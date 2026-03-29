import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { getSpriteUrl, formatName, listPokemon, getPokemon, PokemonBasic, getIdFromUrl } from '../services/pokeapi';
import { TYPE_COLORS } from '../data/games';
import PokemonDetail from '../components/PokemonDetail';

interface Props {
  isCaught: (id: number) => boolean;
  isOnTeam: (id: number) => boolean;
  onToggleCaught: (id: number) => void;
  onToggleTeam: (id: number) => void;
  hasPlaythrough: boolean;
}

const TYPES = Object.keys(TYPE_COLORS);
const BATCH_SIZE = 80;

interface PokemonEntry {
  id: number;
  name: string;
  types: string[];
}

export default function Pokedex({ isCaught, isOnTeam, onToggleCaught, onToggleTeam, hasPlaythrough }: Props) {
  const [allPokemon, setAllPokemon] = useState<PokemonEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState<string | null>(null);
  const [caughtFilter, setCaughtFilter] = useState<'all' | 'caught' | 'uncaught'>('all');
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [displayCount, setDisplayCount] = useState(BATCH_SIZE);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(false);
      let list;
      try {
        list = await listPokemon(1025);
      } catch {
        if (!cancelled) { setError(true); setLoading(false); }
        return;
      }
      const entries: PokemonEntry[] = [];

      // Load in batches of 50 to get type data
      for (let i = 0; i < list.results.length; i += 50) {
        if (cancelled) return;
        const batch = list.results.slice(i, i + 50);
        const pokemonData = await Promise.all(
          batch.map(async (p) => {
            const id = getIdFromUrl(p.url);
            try {
              const data = await getPokemon(id);
              return { id, name: p.name, types: data.types.map(t => t.type.name) };
            } catch {
              return { id, name: p.name, types: [] as string[] };
            }
          })
        );
        if (!cancelled) {
          entries.push(...pokemonData);
          setAllPokemon([...entries]);
        }
      }
      if (!cancelled) setLoading(false);
    })();
    return () => { cancelled = true; };
  }, []);

  const filtered = useMemo(() => {
    let result = allPokemon;
    if (search) {
      const s = search.toLowerCase();
      result = result.filter(p =>
        p.name.includes(s) || p.id.toString() === s || p.id.toString().padStart(4, '0').includes(s)
      );
    }
    if (typeFilter) {
      result = result.filter(p => p.types.includes(typeFilter));
    }
    if (caughtFilter === 'caught') result = result.filter(p => isCaught(p.id));
    if (caughtFilter === 'uncaught') result = result.filter(p => !isCaught(p.id));
    return result;
  }, [allPokemon, search, typeFilter, caughtFilter, isCaught]);

  const displayed = filtered.slice(0, displayCount);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 200) {
      setDisplayCount(prev => Math.min(prev + BATCH_SIZE, filtered.length));
    }
  }, [filtered.length]);

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Filters */}
      <div className="filters-bar">
        <input
          className="search-input"
          placeholder="Search by name or number..."
          value={search}
          onChange={e => { setSearch(e.target.value); setDisplayCount(BATCH_SIZE); }}
        />
        {hasPlaythrough && (
          <>
            <button
              className={`filter-chip ${caughtFilter === 'all' ? 'active' : ''}`}
              onClick={() => setCaughtFilter('all')}
            >All</button>
            <button
              className={`filter-chip ${caughtFilter === 'caught' ? 'active' : ''}`}
              onClick={() => setCaughtFilter('caught')}
            >Caught</button>
            <button
              className={`filter-chip ${caughtFilter === 'uncaught' ? 'active' : ''}`}
              onClick={() => setCaughtFilter('uncaught')}
            >Uncaught</button>
          </>
        )}
      </div>

      {/* Type filters */}
      <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginBottom: 16 }}>
        <button
          className={`filter-chip ${typeFilter === null ? 'active' : ''}`}
          onClick={() => { setTypeFilter(null); setDisplayCount(BATCH_SIZE); }}
          style={{ fontSize: 11 }}
        >All Types</button>
        {TYPES.map(type => (
          <button
            key={type}
            className={`filter-chip ${typeFilter === type ? 'active' : ''}`}
            onClick={() => { setTypeFilter(type === typeFilter ? null : type); setDisplayCount(BATCH_SIZE); }}
            style={{
              fontSize: 11,
              ...(typeFilter === type ? {} : { borderColor: TYPE_COLORS[type], color: TYPE_COLORS[type] }),
              ...(typeFilter === type ? { background: TYPE_COLORS[type], borderColor: TYPE_COLORS[type] } : {}),
            }}
          >{type}</button>
        ))}
      </div>

      {/* Progress bar */}
      {hasPlaythrough && (
        <div style={{ marginBottom: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span className="progress-text">
              {filtered.filter(p => isCaught(p.id)).length} caught
            </span>
            <span className="progress-text">{filtered.length} total</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{
              width: `${filtered.length > 0 ? (filtered.filter(p => isCaught(p.id)).length / filtered.length) * 100 : 0}%`
            }} />
          </div>
        </div>
      )}

      {/* Pokemon Grid */}
      {error ? (
        <div className="loading">
          <div className="loading-text">Failed to load Pokédex. Check your connection and try again.</div>
          <button className="btn btn-primary" style={{ marginTop: 12 }} onClick={() => window.location.reload()}>Retry</button>
        </div>
      ) : loading && allPokemon.length === 0 ? (
        <div className="loading">
          <div className="pokeball-spinner" style={{ fontSize: 32 }}>⚪</div>
          <div className="loading-text">Loading Pokédex...</div>
        </div>
      ) : (
        <div style={{ flex: 1, overflowY: 'auto' }} onScroll={handleScroll}>
          <div className="card-grid">
            {displayed.map(p => (
              <div
                key={p.id}
                className={`pokemon-card ${isCaught(p.id) ? 'caught' : ''}`}
                onClick={() => setSelectedId(p.id)}
              >
                {isCaught(p.id) && <span className="caught-badge">⚾</span>}
                <img src={getSpriteUrl(p.id)} alt={p.name} loading="lazy" />
                <div className="poke-number">#{String(p.id).padStart(4, '0')}</div>
                <div className="poke-name">{formatName(p.name)}</div>
                <div className="type-badges">
                  {p.types.map(t => (
                    <span key={t} className="type-badge" style={{ background: TYPE_COLORS[t] }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {displayed.length < filtered.length && (
            <div className="loading" style={{ padding: 20 }}>
              <div className="loading-text">Scroll for more... ({filtered.length - displayed.length} remaining)</div>
            </div>
          )}
        </div>
      )}

      {/* Detail Panel */}
      {selectedId !== null && (
        <PokemonDetail
          pokemonId={selectedId}
          isCaught={isCaught(selectedId)}
          isOnTeam={isOnTeam(selectedId)}
          onToggleCaught={() => onToggleCaught(selectedId)}
          onToggleTeam={() => onToggleTeam(selectedId)}
          onClose={() => setSelectedId(null)}
          onSelectPokemon={setSelectedId}
        />
      )}
    </div>
  );
}
