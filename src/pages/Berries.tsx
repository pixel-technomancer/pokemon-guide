import React, { useState, useEffect, useMemo } from 'react';
import { listBerries, getBerry, getItem, BerryData, ItemData, getItemSpriteUrl, formatName, getEnglishEntry } from '../services/pokeapi';
import { TYPE_COLORS } from '../data/games';

interface BerryWithItem extends BerryData {
  itemData?: ItemData;
}

const FLAVOR_COLORS: Record<string, string> = {
  spicy: '#EE8130',
  dry: '#6390F0',
  sweet: '#F95587',
  bitter: '#7AC74C',
  sour: '#F7D02C',
};

export default function Berries() {
  const [berries, setBerries] = useState<BerryWithItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedBerry, setSelectedBerry] = useState<BerryWithItem | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      const list = await listBerries(64);
      const loaded: BerryWithItem[] = [];

      for (let i = 0; i < list.results.length; i += 20) {
        if (cancelled) return;
        const batch = list.results.slice(i, i + 20);
        const batchData = await Promise.all(
          batch.map(async b => {
            const berry = await getBerry(b.name).catch(() => null);
            if (!berry) return null;
            const itemData = await getItem(berry.item.name).catch(() => undefined);
            return { ...berry, itemData } as BerryWithItem;
          })
        );
        loaded.push(...batchData.filter((b): b is BerryWithItem => b !== null));
        if (!cancelled) setBerries([...loaded]);
      }
      if (!cancelled) setLoading(false);
    })();
    return () => { cancelled = true; };
  }, []);

  const filtered = useMemo(() => {
    if (!search) return berries;
    const s = search.toLowerCase();
    return berries.filter(b => formatName(b.name).toLowerCase().includes(s));
  }, [berries, search]);

  return (
    <div>
      <div className="filters-bar">
        <input
          className="search-input"
          placeholder="Search berries..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {loading && berries.length === 0 ? (
        <div className="loading">
          <div className="pokeball-spinner" style={{ fontSize: 24 }}>⚪</div>
          <div className="loading-text">Loading berries...</div>
        </div>
      ) : (
        <div className="item-grid">
          {filtered.map(berry => {
            const effect = berry.itemData ? getEnglishEntry(berry.itemData.effect_entries) : null;
            return (
              <div key={berry.id} className="item-card" onClick={() => setSelectedBerry(berry)}>
                <img
                  src={getItemSpriteUrl(berry.item.name)}
                  alt={berry.name}
                  style={{ imageRendering: 'pixelated' }}
                  onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div style={{ flex: 1 }}>
                  <div className="item-name">{formatName(berry.name)} Berry</div>
                  <div className="item-desc">
                    {effect?.short_effect || `Growth: ${berry.growth_time}h · Size: ${berry.size}mm`}
                  </div>
                  <div style={{ display: 'flex', gap: 3, marginTop: 4 }}>
                    {berry.flavors.filter(f => f.potency > 0).map(f => (
                      <span
                        key={f.flavor.name}
                        style={{
                          fontSize: 9,
                          padding: '1px 6px',
                          borderRadius: 'var(--radius-full)',
                          background: FLAVOR_COLORS[f.flavor.name] || 'var(--gray-400)',
                          color: 'white',
                          fontWeight: 700,
                        }}
                      >
                        {f.flavor.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Berry Detail */}
      {selectedBerry && (
        <div className="detail-overlay" onClick={() => setSelectedBerry(null)}>
          <div className="detail-panel" onClick={e => e.stopPropagation()} style={{ maxWidth: 460 }}>
            <button className="detail-close" onClick={() => setSelectedBerry(null)}>✕</button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
              <img
                src={getItemSpriteUrl(selectedBerry.item.name)}
                alt={selectedBerry.name}
                style={{ width: 64, height: 64, imageRendering: 'pixelated' }}
                onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <div>
                <h2 style={{ fontSize: 20, fontWeight: 900 }}>{formatName(selectedBerry.name)} Berry</h2>
                <span className="type-badge" style={{ background: TYPE_COLORS[selectedBerry.natural_gift_type.name] }}>
                  Natural Gift: {selectedBerry.natural_gift_type.name} ({selectedBerry.natural_gift_power})
                </span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 16 }}>
              <div className="stat-card">
                <div className="stat-value">{selectedBerry.growth_time}h</div>
                <div className="stat-label">Growth Time</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">{selectedBerry.size}mm</div>
                <div className="stat-label">Size</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">{formatName(selectedBerry.firmness.name)}</div>
                <div className="stat-label">Firmness</div>
              </div>
            </div>

            {/* Flavor chart */}
            <div className="detail-section">
              <h4>Flavors</h4>
              <div className="stat-bars">
                {selectedBerry.flavors.map(f => (
                  <div key={f.flavor.name} className="stat-row">
                    <span className="stat-name" style={{ width: 50, textTransform: 'capitalize' }}>{f.flavor.name}</span>
                    <div className="stat-bar-bg">
                      <div
                        className="stat-bar-fill"
                        style={{
                          width: `${(f.potency / 40) * 100}%`,
                          background: FLAVOR_COLORS[f.flavor.name] || 'var(--gray-400)',
                        }}
                      />
                    </div>
                    <span className="stat-val">{f.potency}</span>
                  </div>
                ))}
              </div>
            </div>

            {selectedBerry.itemData && (
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--gray-600)', marginTop: 12 }}>
                {getEnglishEntry(selectedBerry.itemData.effect_entries)?.effect || 'No detailed description available.'}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
