import React, { useEffect, useState } from 'react';
import {
  getPokemon, getPokemonSpecies, getEvolutionChain,
  PokemonBasic, PokemonSpecies, EvolutionNode,
  getOfficialArtworkUrl, getSpriteUrl, formatName,
  getEnglishEntry, getIdFromUrl,
} from '../services/pokeapi';
import { TYPE_COLORS } from '../data/games';

interface Props {
  pokemonId: number;
  isCaught: boolean;
  isOnTeam: boolean;
  onToggleCaught: () => void;
  onToggleTeam: () => void;
  onClose: () => void;
  onSelectPokemon: (id: number) => void;
}

const STAT_NAMES: Record<string, string> = {
  hp: 'HP', attack: 'ATK', defense: 'DEF',
  'special-attack': 'SPA', 'special-defense': 'SPD', speed: 'SPE',
};

const STAT_COLORS: Record<string, string> = {
  hp: '#FF5959', attack: '#F5AC78', defense: '#FAE078',
  'special-attack': '#9DB7F5', 'special-defense': '#A7DB8D', speed: '#FA92B2',
};

function flattenEvoChain(node: EvolutionNode): { name: string; id: number }[][] {
  const stages: { name: string; id: number }[][] = [];
  function walk(n: EvolutionNode, depth: number) {
    if (!stages[depth]) stages[depth] = [];
    stages[depth].push({ name: n.species.name, id: getIdFromUrl(n.species.url) });
    n.evolves_to.forEach(e => walk(e, depth + 1));
  }
  walk(node, 0);
  return stages;
}

export default function PokemonDetail({ pokemonId, isCaught, isOnTeam, onToggleCaught, onToggleTeam, onClose, onSelectPokemon }: Props) {
  const [pokemon, setPokemon] = useState<PokemonBasic | null>(null);
  const [species, setSpecies] = useState<PokemonSpecies | null>(null);
  const [evoStages, setEvoStages] = useState<{ name: string; id: number }[][] | null>(null);

  useEffect(() => {
    let cancelled = false;
    setPokemon(null); setSpecies(null); setEvoStages(null);
    Promise.all([getPokemon(pokemonId), getPokemonSpecies(pokemonId)]).then(([p, s]) => {
      if (cancelled) return;
      setPokemon(p);
      setSpecies(s);
      const evoId = getIdFromUrl(s.evolution_chain.url);
      getEvolutionChain(evoId).then(ec => {
        if (!cancelled) setEvoStages(flattenEvoChain(ec.chain));
      }).catch(() => {});
    }).catch(() => {});
    return () => { cancelled = true; };
  }, [pokemonId]);

  if (!pokemon || !species) {
    return (
      <div className="detail-overlay" onClick={onClose}>
        <div className="detail-panel" onClick={e => e.stopPropagation()}>
          <div className="loading">
            <div className="pokeball-spinner">⚪</div>
            <div className="loading-text">Loading Pokémon data...</div>
          </div>
        </div>
      </div>
    );
  }

  const flavorEntry = species.flavor_text_entries.find(e => e.language.name === 'en');
  const genus = getEnglishEntry(species.genera);

  return (
    <div className="detail-overlay" onClick={onClose}>
      <div className="detail-panel" onClick={e => e.stopPropagation()}>
        <button className="detail-close" onClick={onClose}>✕</button>

        <div className="detail-header">
          <img src={getOfficialArtworkUrl(pokemonId)} alt={pokemon.name} />
          <div className="detail-info">
            <div className="poke-number">#{String(pokemonId).padStart(4, '0')}</div>
            <h2>{formatName(pokemon.name)}</h2>
            {genus && <div className="poke-genus">{genus.genus}</div>}
            <div className="type-badges" style={{ marginTop: 8 }}>
              {pokemon.types.map(t => (
                <span key={t.type.name} className="type-badge" style={{ background: TYPE_COLORS[t.type.name] }}>
                  {t.type.name}
                </span>
              ))}
            </div>
            <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
              <button className={`btn-catch ${isCaught ? 'caught-btn' : ''}`} onClick={onToggleCaught}>
                {isCaught ? '✓ Caught' : '◎ Mark Caught'}
              </button>
              <button className={`btn btn-sm ${isOnTeam ? 'btn-secondary' : 'btn-blue'}`} onClick={onToggleTeam}>
                {isOnTeam ? '✓ On Team' : '+ Add to Team'}
              </button>
            </div>
          </div>
        </div>

        {flavorEntry && (
          <p style={{ fontSize: 13, color: 'var(--gray-600)', lineHeight: 1.6, fontStyle: 'italic' }}>
            {flavorEntry.flavor_text.replace(/[\n\f]/g, ' ')}
          </p>
        )}

        <div style={{ display: 'flex', gap: 20, marginTop: 12, fontSize: 13 }}>
          <div><strong>Height:</strong> {(pokemon.height / 10).toFixed(1)}m</div>
          <div><strong>Weight:</strong> {(pokemon.weight / 10).toFixed(1)}kg</div>
          <div><strong>Abilities:</strong> {pokemon.abilities.map(a => formatName(a.ability.name) + (a.is_hidden ? ' (H)' : '')).join(', ')}</div>
        </div>

        <div className="detail-section">
          <h4>Base Stats</h4>
          <div className="stat-bars">
            {pokemon.stats.map(s => (
              <div key={s.stat.name} className="stat-row">
                <span className="stat-name">{STAT_NAMES[s.stat.name] || s.stat.name}</span>
                <div className="stat-bar-bg">
                  <div
                    className="stat-bar-fill"
                    style={{
                      width: `${Math.min(100, (s.base_stat / 255) * 100)}%`,
                      background: STAT_COLORS[s.stat.name] || 'var(--blue)',
                    }}
                  />
                </div>
                <span className="stat-val">{s.base_stat}</span>
              </div>
            ))}
          </div>
        </div>

        {evoStages && evoStages.length > 1 && (
          <div className="detail-section">
            <h4>Evolution Chain</h4>
            <div className="evo-chain">
              {evoStages.map((stage, si) => (
                <React.Fragment key={si}>
                  {si > 0 && <span className="evo-arrow">→</span>}
                  {stage.map(mon => (
                    <div
                      key={mon.id}
                      className="evo-stage"
                      onClick={() => onSelectPokemon(mon.id)}
                      style={{ opacity: mon.id === pokemonId ? 1 : 0.7 }}
                    >
                      <img src={getSpriteUrl(mon.id)} alt={mon.name} />
                      <div className="evo-name">{formatName(mon.name)}</div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
