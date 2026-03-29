import React, { useState, useEffect } from 'react';
import { POKEMON_GAMES, GENERATIONS } from '../data/games';
import { getSpriteUrl, formatName, getPokemon, PokemonBasic } from '../services/pokeapi';

interface Props {
  onClose: () => void;
  onCreate: (name: string, gameId: string, starterId: number | null) => void;
}

export default function NewGameModal({ onClose, onCreate }: Props) {
  const [step, setStep] = useState<'game' | 'name' | 'starter'>('game');
  const [selectedGameId, setSelectedGameId] = useState('');
  const [name, setName] = useState('');
  const [selectedStarter, setSelectedStarter] = useState<number | null>(null);
  const [starterData, setStarterData] = useState<PokemonBasic[]>([]);

  const selectedGame = POKEMON_GAMES.find(g => g.id === selectedGameId);

  useEffect(() => {
    if (selectedGame && step === 'starter') {
      Promise.all(selectedGame.starters.map(id => getPokemon(id))).then(setStarterData);
    }
  }, [selectedGame, step]);

  const handleGameSelect = (gameId: string) => {
    setSelectedGameId(gameId);
    setStep('name');
  };

  const handleNameNext = () => {
    if (!name.trim()) return;
    if (selectedGame && selectedGame.starters.length > 0) {
      setStep('starter');
    } else {
      onCreate(name.trim(), selectedGameId, null);
    }
  };

  const handleCreate = () => {
    onCreate(name.trim(), selectedGameId, selectedStarter);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        {step === 'game' && (
          <>
            <h2>Choose Your Game</h2>
            <div style={{ maxHeight: '50vh', overflowY: 'auto' }}>
              {GENERATIONS.map(gen => {
                const games = POKEMON_GAMES.filter(g => g.generation === gen.num);
                return (
                  <div key={gen.num} className="gen-group">
                    <h3>Gen {gen.num} — {gen.region}</h3>
                    <div className="gen-games">
                      {games.map(game => (
                        <div key={game.id} className="game-card" onClick={() => handleGameSelect(game.id)}>
                          <div className="game-dot" style={{ background: game.color }} />
                          <div>
                            <div className="game-name">{game.name.replace('Pokémon ', '')}</div>
                            <div className="game-region">{game.region} · {game.year}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {step === 'name' && (
          <>
            <h2>Name Your Adventure</h2>
            <p style={{ fontSize: 13, color: 'var(--gray-500)', marginBottom: 16 }}>
              Playing {selectedGame?.name}
            </p>
            <label>Playthrough Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value.slice(0, 50))}
              placeholder="e.g., My Nuzlocke Run"
              maxLength={50}
              autoFocus
              onKeyDown={e => e.key === 'Enter' && handleNameNext()}
            />
            <div className="modal-actions">
              <button className="btn btn-secondary" onClick={() => setStep('game')}>Back</button>
              <button className="btn btn-primary" onClick={handleNameNext} disabled={!name.trim()}>
                Next
              </button>
            </div>
          </>
        )}

        {step === 'starter' && (
          <>
            <h2>Pick Your Starter!</h2>
            <div className="starter-picker">
              {starterData.map(p => (
                <div
                  key={p.id}
                  className={`starter-option ${selectedStarter === p.id ? 'selected' : ''}`}
                  onClick={() => setSelectedStarter(p.id)}
                >
                  <img src={getSpriteUrl(p.id)} alt={p.name} />
                  <div className="starter-name">{formatName(p.name)}</div>
                </div>
              ))}
            </div>
            <div className="modal-actions">
              <button className="btn btn-secondary" onClick={() => setStep('name')}>Back</button>
              <button className="btn btn-primary" onClick={handleCreate} disabled={!selectedStarter}>
                Start Adventure!
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
