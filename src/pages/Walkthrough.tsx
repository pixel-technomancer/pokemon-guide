import React, { useState, useMemo } from 'react';
import { Playthrough } from '../services/playthrough';
import { POKEMON_GAMES } from '../data/games';
import { WALKTHROUGHS, WalkthroughChapter, WalkthroughStep } from '../data/walkthroughs';

interface Props {
  active: Playthrough | null;
  onUpdatePlaythrough: (id: string, updates: Partial<Playthrough>) => void;
}

export default function Walkthrough({ active, onUpdatePlaythrough }: Props) {
  const [selectedChapter, setSelectedChapter] = useState(0);
  const [expandedSteps, setExpandedSteps] = useState<Set<string>>(new Set());

  const game = active ? POKEMON_GAMES.find(g => g.id === active.gameId) : null;

  const walkthrough = useMemo(() => {
    if (!active) return null;
    return WALKTHROUGHS.find(w => w.gameId === active.gameId) || null;
  }, [active?.gameId]);

  if (!active || !game) {
    return (
      <div className="loading">
        <div style={{ fontSize: 48, marginBottom: 16 }}>📖</div>
        <div className="loading-text">Start a playthrough to see the walkthrough!</div>
      </div>
    );
  }

  if (!walkthrough) {
    return (
      <div className="loading">
        <div style={{ fontSize: 48, marginBottom: 16 }}>📖</div>
        <div className="loading-text">Walkthrough coming soon for {game.name}!</div>
      </div>
    );
  }

  const completedSteps = active.completedSteps ?? [];

  const toggleStep = (stepKey: string) => {
    const updated = completedSteps.includes(stepKey)
      ? completedSteps.filter(s => s !== stepKey)
      : [...completedSteps, stepKey];
    onUpdatePlaythrough(active.id, { completedSteps: updated });
  };

  const toggleExpand = (stepKey: string) => {
    setExpandedSteps(prev => {
      const next = new Set(prev);
      if (next.has(stepKey)) next.delete(stepKey);
      else next.add(stepKey);
      return next;
    });
  };

  const chapter = walkthrough.chapters[selectedChapter];
  const totalSteps = walkthrough.chapters.reduce((sum, ch) => sum + ch.steps.length, 0);
  const completedCount = completedSteps.length;

  const chapterCompletedCount = (chIdx: number) => {
    return walkthrough.chapters[chIdx].steps.filter((_, si) =>
      completedSteps.includes(`${chIdx}-${si}`)
    ).length;
  };

  return (
    <div className="route-layout">
      {/* Chapter sidebar */}
      <div className="route-sidebar">
        <div style={{ padding: '4px 8px 8px', fontSize: 13, fontWeight: 800, color: 'var(--gray-500)' }}>
          {game.name.replace('Pokémon ', '')} Walkthrough
        </div>
        <div style={{ padding: '0 8px 12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, fontWeight: 600, color: 'var(--gray-400)' }}>
            <span>Progress</span>
            <span>{completedCount}/{totalSteps}</span>
          </div>
          <div className="progress-bar" style={{ height: 6, margin: '4px 0 0' }}>
            <div className="progress-fill" style={{ width: `${totalSteps > 0 ? (completedCount / totalSteps) * 100 : 0}%` }} />
          </div>
        </div>

        {walkthrough.chapters.map((ch, idx) => {
          const done = chapterCompletedCount(idx);
          const total = ch.steps.length;
          const allDone = done === total;
          return (
            <div
              key={idx}
              className={`route-list-item ${selectedChapter === idx ? 'active' : ''} ${allDone ? 'completed' : ''}`}
              onClick={() => setSelectedChapter(idx)}
            >
              <span className="route-check" style={{ fontSize: 12 }}>
                {allDone ? '✓' : `${done}/${total}`}
              </span>
              <span style={{ flex: 1, fontSize: 12 }}>{ch.title}</span>
            </div>
          );
        })}
      </div>

      {/* Chapter detail */}
      <div className="route-detail">
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--gray-400)', textTransform: 'uppercase', letterSpacing: 1 }}>
            Chapter {selectedChapter + 1} of {walkthrough.chapters.length}
          </div>
          <h2 style={{ fontSize: 22, fontWeight: 900, marginTop: 4 }}>{chapter.title}</h2>
          <p style={{ fontSize: 14, color: 'var(--gray-500)', marginTop: 6, lineHeight: 1.6 }}>{chapter.summary}</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {chapter.steps.map((step, si) => {
            const stepKey = `${selectedChapter}-${si}`;
            const isDone = completedSteps.includes(stepKey);
            const isExpanded = expandedSteps.has(stepKey);

            return (
              <div
                key={si}
                style={{
                  background: isDone ? 'var(--gray-50)' : 'white',
                  border: `2px solid ${isDone ? 'var(--gray-200)' : 'var(--gray-100)'}`,
                  borderRadius: 'var(--radius)',
                  overflow: 'hidden',
                  transition: 'all 0.15s',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '14px 16px',
                    cursor: 'pointer',
                  }}
                  onClick={() => toggleExpand(stepKey)}
                >
                  <button
                    onClick={e => { e.stopPropagation(); toggleStep(stepKey); }}
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      border: `2px solid ${isDone ? 'var(--blue)' : 'var(--gray-300)'}`,
                      background: isDone ? 'var(--blue)' : 'transparent',
                      color: 'white',
                      fontSize: 12,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.15s',
                    }}
                  >
                    {isDone ? '✓' : ''}
                  </button>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: isDone ? 'var(--gray-400)' : 'var(--gray-800)',
                      textDecoration: isDone ? 'line-through' : 'none',
                    }}>
                      {step.title}
                    </div>
                  </div>
                  <span style={{ color: 'var(--gray-400)', fontSize: 14, transition: 'transform 0.15s', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    ▼
                  </span>
                </div>

                {isExpanded && (
                  <div style={{ padding: '0 16px 16px 52px', animation: 'slideUp 0.15s ease' }}>
                    <p style={{ fontSize: 13, color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 12 }}>
                      {step.description}
                    </p>

                    {step.tips && step.tips.length > 0 && (
                      <div style={{
                        background: '#FFF8E1',
                        borderRadius: 8,
                        padding: '10px 14px',
                        marginBottom: 10,
                      }}>
                        <div style={{ fontSize: 11, fontWeight: 800, color: '#F57F17', marginBottom: 4 }}>
                          💡 TIPS
                        </div>
                        {step.tips.map((tip, ti) => (
                          <div key={ti} style={{ fontSize: 12, color: '#5D4037', lineHeight: 1.5, marginBottom: 2 }}>
                            • {tip}
                          </div>
                        ))}
                      </div>
                    )}

                    {step.pokemon && step.pokemon.length > 0 && (
                      <div style={{
                        background: '#E3F2FD',
                        borderRadius: 8,
                        padding: '10px 14px',
                        marginBottom: 10,
                      }}>
                        <div style={{ fontSize: 11, fontWeight: 800, color: '#1565C0', marginBottom: 4 }}>
                          🎯 NOTABLE POKÉMON
                        </div>
                        <div style={{ fontSize: 12, color: '#1A237E', lineHeight: 1.5 }}>
                          {step.pokemon.join(', ')}
                        </div>
                      </div>
                    )}

                    {step.items && step.items.length > 0 && (
                      <div style={{
                        background: '#F3E5F5',
                        borderRadius: 8,
                        padding: '10px 14px',
                      }}>
                        <div style={{ fontSize: 11, fontWeight: 800, color: '#7B1FA2', marginBottom: 4 }}>
                          🎒 KEY ITEMS
                        </div>
                        <div style={{ fontSize: 12, color: '#4A148C', lineHeight: 1.5 }}>
                          {step.items.join(', ')}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24 }}>
          <button
            className="btn btn-secondary"
            disabled={selectedChapter === 0}
            onClick={() => setSelectedChapter(prev => prev - 1)}
          >
            ← Previous Chapter
          </button>
          <button
            className="btn btn-primary"
            disabled={selectedChapter === walkthrough.chapters.length - 1}
            onClick={() => setSelectedChapter(prev => prev + 1)}
          >
            Next Chapter →
          </button>
        </div>
      </div>
    </div>
  );
}
