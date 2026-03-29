import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Playthrough } from '../services/playthrough';
import { POKEMON_GAMES } from '../data/games';
import { getSpriteUrl, getOfficialArtworkUrl, formatName, getPokemon, PokemonBasic } from '../services/pokeapi';
import PokeballSvg from '../components/PokeballSvg';

interface Props {
  active: Playthrough | null;
  onNewGame: () => void;
  onDeletePlaythrough: (id: string) => void;
  playthroughs: Playthrough[];
}

export default function Dashboard({ active, onNewGame, onDeletePlaythrough, playthroughs }: Props) {
  const navigate = useNavigate();
  const [teamData, setTeamData] = useState<(PokemonBasic | null)[]>([]);

  const game = active ? POKEMON_GAMES.find(g => g.id === active.gameId) : null;

  useEffect(() => {
    if (active && active.team.length > 0) {
      Promise.all(active.team.map(id => getPokemon(id).catch(() => null))).then(setTeamData);
    } else {
      setTeamData([]);
    }
  }, [active?.team.join(',')]);

  if (!active) {
    return (
      <div className="welcome-screen">
        <PokeballSvg size={120} className="welcome-pokeball" />
        <h2>Welcome, Trainer!</h2>
        <p>Start your Pokémon adventure by creating a new playthrough. Pick your game, name your journey, and choose your starter!</p>
        <button className="btn btn-primary" onClick={onNewGame}>
          ⚡ Start Your Adventure!
        </button>
        {playthroughs.length > 0 && (
          <p style={{ marginTop: 16, fontSize: 13, color: 'var(--gray-400)' }}>
            Or select an existing playthrough from the sidebar
          </p>
        )}
      </div>
    );
  }

  const totalPokemon = 1025;
  const recentCaught = [...active.caughtPokemon].reverse().slice(0, 8);
  const emptySlots = 6 - active.team.length;

  return (
    <>
      {/* Banner */}
      <div className="dashboard-banner">
        {active.starterId && (
          <img className="starter-sprite" src={getOfficialArtworkUrl(active.starterId)} alt="Starter" />
        )}
        <div className="banner-info">
          <h2>{active.name}</h2>
          <p>{game?.name} · {game?.region}</p>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8, position: 'relative', zIndex: 1 }}>
          <button className="btn btn-sm btn-yellow" onClick={onNewGame}>+ New Adventure</button>
          <button className="btn btn-sm btn-secondary" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}
            onClick={() => { if (confirm('Delete this playthrough?')) onDeletePlaythrough(active.id); }}>
            Delete
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon">📱</div>
          <div className="stat-value">{active.caughtPokemon.length}</div>
          <div className="stat-label">Pokémon Caught</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🏅</div>
          <div className="stat-value">{active.badgesEarned}</div>
          <div className="stat-label">Badges Earned</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🗺️</div>
          <div className="stat-value">{active.completedRoutes.length}</div>
          <div className="stat-label">Routes Cleared</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⭐</div>
          <div className="stat-value">{active.team.length}/6</div>
          <div className="stat-label">Team Members</div>
        </div>
      </div>

      {/* Progress */}
      <div className="card" style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="progress-text">Pokédex Progress</span>
          <span className="progress-text">{active.caughtPokemon.length} / {totalPokemon}</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${(active.caughtPokemon.length / totalPokemon) * 100}%` }} />
        </div>
      </div>

      {/* Team */}
      <div className="dashboard-section">
        <h3>Your Team</h3>
        <div className="team-grid">
          {teamData.map((mon, i) => (
            <div key={active.team[i]} className="team-slot" onClick={() => navigate('/pokedex')}>
              {mon ? (
                <>
                  <img src={getSpriteUrl(mon.id)} alt={mon.name} />
                  <div className="team-name">{formatName(mon.name)}</div>
                </>
              ) : (
                <div style={{ color: 'var(--gray-400)', fontSize: 24 }}>?</div>
              )}
            </div>
          ))}
          {Array.from({ length: emptySlots }).map((_, i) => (
            <div key={`empty-${i}`} className="team-slot empty" onClick={() => navigate('/pokedex')}>
              <div style={{ color: 'var(--gray-300)', fontSize: 13, fontWeight: 600 }}>Empty</div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Catches */}
      {recentCaught.length > 0 && (
        <div className="dashboard-section">
          <h3>Recently Caught</h3>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {recentCaught.map(id => (
              <div key={id} className="team-slot" style={{ width: 80, cursor: 'pointer' }} onClick={() => navigate('/pokedex')}>
                <img src={getSpriteUrl(id)} alt="" style={{ width: 48, height: 48 }} />
                <div className="team-name">#{id}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick Links */}
      <div className="dashboard-section">
        <h3>Quick Links</h3>
        <div style={{ display: 'flex', gap: 10 }}>
          <button className="btn btn-primary" onClick={() => navigate('/pokedex')}>📱 Pokédex</button>
          <button className="btn btn-blue" onClick={() => navigate('/routes')}>🗺️ Route Guide</button>
          <button className="btn btn-yellow" onClick={() => navigate('/items')}>🎒 Items</button>
          <button className="btn btn-secondary" onClick={() => navigate('/tms')}>💿 TMs & HMs</button>
          <button className="btn btn-secondary" onClick={() => navigate('/berries')}>🫐 Berries</button>
        </div>
      </div>
    </>
  );
}
