import React, { useState, useEffect } from 'react';
import { Playthrough } from '../services/playthrough';
import { POKEMON_GAMES } from '../data/games';
import {
  getRegion, getLocation, getLocationArea,
  getSpriteUrl, formatName, getIdFromUrl,
  LocationData, LocationAreaData,
  RegionData,
} from '../services/pokeapi';
import { TYPE_COLORS } from '../data/games';

interface Props {
  active: Playthrough | null;
  onUpdatePlaythrough: (id: string, updates: Partial<Playthrough>) => void;
}

interface RouteInfo {
  name: string;
  locationName: string;
  areas: string[];
}

export default function Routes({ active, onUpdatePlaythrough }: Props) {
  const [routes, setRoutes] = useState<RouteInfo[]>([]);
  const [selectedRoute, setSelectedRoute] = useState<RouteInfo | null>(null);
  const [areaData, setAreaData] = useState<LocationAreaData[]>([]);
  const [loading, setLoading] = useState(false);
  const [routesLoading, setRoutesLoading] = useState(false);

  const game = active ? POKEMON_GAMES.find(g => g.id === active.gameId) : null;

  // Load routes for the region
  useEffect(() => {
    if (!game) return;
    let cancelled = false;
    setRoutesLoading(true);

    const regionName = game.region.toLowerCase();
    getRegion(regionName).then((region: RegionData) => {
      if (cancelled) return;
      const routeInfos: RouteInfo[] = region.locations.map(loc => ({
        name: formatName(loc.name),
        locationName: loc.name,
        areas: [],
      }));
      // Sort routes: numbered routes first, then named locations
      routeInfos.sort((a, b) => {
        const aNum = a.name.match(/Route (\d+)/)?.[1];
        const bNum = b.name.match(/Route (\d+)/)?.[1];
        if (aNum && bNum) return parseInt(aNum) - parseInt(bNum);
        if (aNum) return -1;
        if (bNum) return 1;
        return a.name.localeCompare(b.name);
      });
      setRoutes(routeInfos);
      setRoutesLoading(false);
      if (routeInfos.length > 0 && !selectedRoute) {
        setSelectedRoute(routeInfos[0]);
      }
    }).catch(() => {
      if (!cancelled) setRoutesLoading(false);
    });
    return () => { cancelled = true; };
  }, [game?.id]);

  // Load area data when route selected
  useEffect(() => {
    if (!selectedRoute) return;
    let cancelled = false;
    setLoading(true);
    setAreaData([]);

    getLocation(selectedRoute.locationName).then((loc: LocationData) => {
      if (cancelled) return;
      if (loc.areas.length === 0) {
        setLoading(false);
        return;
      }
      Promise.all(
        loc.areas.slice(0, 5).map(a => getLocationArea(a.name).catch(() => null))
      ).then(areas => {
        if (!cancelled) {
          setAreaData(areas.filter((a): a is LocationAreaData => a !== null));
          setLoading(false);
        }
      });
    }).catch(() => {
      if (!cancelled) setLoading(false);
    });
    return () => { cancelled = true; };
  }, [selectedRoute?.locationName]);

  if (!active || !game) {
    return (
      <div className="loading">
        <div style={{ fontSize: 48, marginBottom: 16 }}>🗺️</div>
        <div className="loading-text">Start a playthrough to see route guides!</div>
      </div>
    );
  }

  const isRouteCompleted = (routeName: string) => active.completedRoutes.includes(routeName);

  const toggleRouteComplete = (routeName: string) => {
    const completed = isRouteCompleted(routeName)
      ? active.completedRoutes.filter(r => r !== routeName)
      : [...active.completedRoutes, routeName];
    onUpdatePlaythrough(active.id, { completedRoutes: completed });
  };

  // Collect all encounters for the selected version
  const encounters = areaData.flatMap(area =>
    area.pokemon_encounters.flatMap(enc => {
      const versionDetail = enc.version_details.find(v => v.version.name === game.pokeapiVersion);
      if (!versionDetail) return [];
      return versionDetail.encounter_details.map(detail => ({
        pokemonName: enc.pokemon.name,
        pokemonId: getIdFromUrl(enc.pokemon.url),
        method: formatName(detail.method.name),
        chance: detail.chance,
        minLevel: detail.min_level,
        maxLevel: detail.max_level,
        area: formatName(area.name),
      }));
    })
  );

  // Deduplicate by pokemon + method
  const uniqueEncounters = encounters.reduce((acc, enc) => {
    const key = `${enc.pokemonName}-${enc.method}`;
    if (!acc.has(key) || acc.get(key)!.chance < enc.chance) {
      acc.set(key, enc);
    }
    return acc;
  }, new Map<string, typeof encounters[0]>());

  const sortedEncounters = [...uniqueEncounters.values()].sort((a, b) => b.chance - a.chance);

  return (
    <div className="route-layout">
      {/* Route sidebar */}
      <div className="route-sidebar">
        <div style={{ padding: '4px 8px 12px', fontSize: 13, fontWeight: 800, color: 'var(--gray-500)' }}>
          {game.region} Routes
        </div>
        {routesLoading ? (
          <div className="loading" style={{ padding: 20 }}>
            <div className="loading-text">Loading routes...</div>
          </div>
        ) : (
          routes.map(route => (
            <div
              key={route.locationName}
              className={`route-list-item ${selectedRoute?.locationName === route.locationName ? 'active' : ''} ${isRouteCompleted(route.locationName) ? 'completed' : ''}`}
              onClick={() => setSelectedRoute(route)}
            >
              <span className="route-check">
                {isRouteCompleted(route.locationName) ? '✓' : '○'}
              </span>
              {route.name}
            </div>
          ))
        )}
      </div>

      {/* Route detail */}
      <div className="route-detail">
        {selectedRoute ? (
          <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <h2>{selectedRoute.name}</h2>
              <button
                className={`btn btn-sm ${isRouteCompleted(selectedRoute.locationName) ? 'btn-secondary' : 'btn-primary'}`}
                onClick={() => toggleRouteComplete(selectedRoute.locationName)}
              >
                {isRouteCompleted(selectedRoute.locationName) ? '✓ Completed' : 'Mark Complete'}
              </button>
            </div>

            {loading ? (
              <div className="loading">
                <div className="pokeball-spinner" style={{ fontSize: 24 }}>⚪</div>
                <div className="loading-text">Loading encounter data...</div>
              </div>
            ) : sortedEncounters.length > 0 ? (
              <>
                <h3 style={{ fontSize: 14, fontWeight: 800, color: 'var(--gray-600)', marginBottom: 12 }}>Wild Pokémon</h3>
                <table className="encounter-table">
                  <thead>
                    <tr>
                      <th>Pokémon</th>
                      <th>Method</th>
                      <th>Level</th>
                      <th>Chance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedEncounters.map((enc, i) => (
                      <tr key={i}>
                        <td>
                          <div className="encounter-pokemon">
                            <img src={getSpriteUrl(enc.pokemonId)} alt={enc.pokemonName} />
                            <span style={{ fontWeight: 700 }}>{formatName(enc.pokemonName)}</span>
                          </div>
                        </td>
                        <td>{enc.method}</td>
                        <td>{enc.minLevel === enc.maxLevel ? `Lv.${enc.minLevel}` : `Lv.${enc.minLevel}-${enc.maxLevel}`}</td>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <div style={{ width: 60, height: 6, background: 'var(--gray-100)', borderRadius: 3 }}>
                              <div style={{ width: `${enc.chance}%`, height: '100%', background: enc.chance > 20 ? 'var(--blue)' : 'var(--gray-400)', borderRadius: 3 }} />
                            </div>
                            <span style={{ fontSize: 12, fontWeight: 600 }}>{enc.chance}%</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            ) : (
              <div className="loading">
                <div style={{ fontSize: 32, marginBottom: 12 }}>🏞️</div>
                <div className="loading-text">No encounter data available for this location in {game.name.replace('Pokémon ', '')}</div>
              </div>
            )}
          </>
        ) : (
          <div className="loading">
            <div className="loading-text">Select a route to view details</div>
          </div>
        )}
      </div>
    </div>
  );
}
