import React, { useState, useEffect, useMemo } from 'react';
import { listMoves, getMove, MoveData, formatName, getEnglishEntry } from '../services/pokeapi';
import { TYPE_COLORS } from '../data/games';

export default function TMs() {
  const [moves, setMoves] = useState<MoveData[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState<string | null>(null);
  const [classFilter, setClassFilter] = useState<string | null>(null);
  const [selectedMove, setSelectedMove] = useState<MoveData | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      // Load TM/HM moves - these are moves that have machine data
      const list = await listMoves(850);
      const loaded: MoveData[] = [];

      for (let i = 0; i < list.results.length; i += 50) {
        if (cancelled) return;
        const batch = list.results.slice(i, i + 50);
        const batchData = await Promise.all(
          batch.map(m => getMove(m.name).catch(() => null))
        );
        const tmMoves = batchData.filter((m): m is MoveData =>
          m !== null && m.machines.length > 0
        );
        loaded.push(...tmMoves);
        if (!cancelled) setMoves([...loaded]);
      }
      if (!cancelled) setLoading(false);
    })();
    return () => { cancelled = true; };
  }, []);

  const filtered = useMemo(() => {
    let result = moves;
    if (search) {
      const s = search.toLowerCase();
      result = result.filter(m => formatName(m.name).toLowerCase().includes(s));
    }
    if (typeFilter) result = result.filter(m => m.type.name === typeFilter);
    if (classFilter) result = result.filter(m => m.damage_class.name === classFilter);
    return result.sort((a, b) => a.id - b.id);
  }, [moves, search, typeFilter, classFilter]);

  const TYPES = Object.keys(TYPE_COLORS);

  return (
    <div>
      <div className="filters-bar">
        <input
          className="search-input"
          placeholder="Search moves..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button className={`filter-chip ${classFilter === null ? 'active' : ''}`} onClick={() => setClassFilter(null)}>All</button>
        <button className={`filter-chip ${classFilter === 'physical' ? 'active' : ''}`} onClick={() => setClassFilter('physical')}>Physical</button>
        <button className={`filter-chip ${classFilter === 'special' ? 'active' : ''}`} onClick={() => setClassFilter('special')}>Special</button>
        <button className={`filter-chip ${classFilter === 'status' ? 'active' : ''}`} onClick={() => setClassFilter('status')}>Status</button>
      </div>

      <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginBottom: 16 }}>
        <button className={`filter-chip ${typeFilter === null ? 'active' : ''}`} onClick={() => setTypeFilter(null)} style={{ fontSize: 11 }}>All Types</button>
        {TYPES.map(type => (
          <button
            key={type}
            className={`filter-chip ${typeFilter === type ? 'active' : ''}`}
            onClick={() => setTypeFilter(type === typeFilter ? null : type)}
            style={{
              fontSize: 11,
              ...(typeFilter === type ? { background: TYPE_COLORS[type], borderColor: TYPE_COLORS[type] } : { borderColor: TYPE_COLORS[type], color: TYPE_COLORS[type] }),
            }}
          >{type}</button>
        ))}
      </div>

      {loading && moves.length === 0 ? (
        <div className="loading">
          <div className="pokeball-spinner" style={{ fontSize: 24 }}>⚪</div>
          <div className="loading-text">Loading TM & HM moves...</div>
        </div>
      ) : (
        <table className="tm-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Move</th>
              <th>Type</th>
              <th>Class</th>
              <th>Power</th>
              <th>Accuracy</th>
              <th>PP</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(move => (
              <tr key={move.id} onClick={() => setSelectedMove(move)} style={{ cursor: 'pointer' }}>
                <td className="tm-number">{move.id}</td>
                <td style={{ fontWeight: 700 }}>{formatName(move.name)}</td>
                <td>
                  <span className="type-badge" style={{ background: TYPE_COLORS[move.type.name] }}>
                    {move.type.name}
                  </span>
                </td>
                <td style={{ textTransform: 'capitalize', fontSize: 12 }}>{move.damage_class.name}</td>
                <td>{move.power || '—'}</td>
                <td>{move.accuracy ? `${move.accuracy}%` : '—'}</td>
                <td>{move.pp || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Move Detail */}
      {selectedMove && (
        <div className="detail-overlay" onClick={() => setSelectedMove(null)}>
          <div className="detail-panel" onClick={e => e.stopPropagation()} style={{ maxWidth: 460 }}>
            <button className="detail-close" onClick={() => setSelectedMove(null)}>✕</button>
            <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 4 }}>{formatName(selectedMove.name)}</h2>
            <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
              <span className="type-badge" style={{ background: TYPE_COLORS[selectedMove.type.name] }}>
                {selectedMove.type.name}
              </span>
              <span className="type-badge" style={{ background: 'var(--gray-500)', textTransform: 'capitalize' }}>
                {selectedMove.damage_class.name}
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 16 }}>
              <div className="stat-card">
                <div className="stat-value">{selectedMove.power || '—'}</div>
                <div className="stat-label">Power</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">{selectedMove.accuracy ? `${selectedMove.accuracy}%` : '—'}</div>
                <div className="stat-label">Accuracy</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">{selectedMove.pp || '—'}</div>
                <div className="stat-label">PP</div>
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--gray-600)' }}>
              {getEnglishEntry(selectedMove.effect_entries)?.effect?.replace(/\$effect_chance/g, String(selectedMove.accuracy || '')) || 'No description available.'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
