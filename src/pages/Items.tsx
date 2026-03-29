import React, { useState, useEffect, useMemo } from 'react';
import { listItems, getItem, ItemData, getItemSpriteUrl, formatName, getEnglishEntry } from '../services/pokeapi';

const CATEGORIES = [
  'all', 'standard-balls', 'special-balls', 'medicine', 'vitamins',
  'healing', 'status-cures', 'revival', 'stat-boosts', 'evolution',
  'held-items', 'choice', 'type-enhancement', 'plates', 'mega-stones',
  'memories', 'z-crystals', 'treasure', 'loot',
];

const CATEGORY_LABELS: Record<string, string> = {
  all: 'All Items',
  'standard-balls': 'Poké Balls',
  'special-balls': 'Special Balls',
  medicine: 'Medicine',
  vitamins: 'Vitamins',
  healing: 'Healing',
  'status-cures': 'Status Cures',
  revival: 'Revival',
  'stat-boosts': 'Battle Items',
  evolution: 'Evolution',
  'held-items': 'Hold Items',
  choice: 'Choice Items',
  'type-enhancement': 'Type Boost',
  plates: 'Plates',
  'mega-stones': 'Mega Stones',
  memories: 'Memories',
  'z-crystals': 'Z-Crystals',
  treasure: 'Treasure',
  loot: 'Loot',
};

export default function Items() {
  const [items, setItems] = useState<ItemData[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<ItemData | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      const list = await listItems(300);
      const loaded: ItemData[] = [];

      for (let i = 0; i < list.results.length; i += 30) {
        if (cancelled) return;
        const batch = list.results.slice(i, i + 30);
        const batchData = await Promise.all(
          batch.map(item => getItem(item.name).catch(() => null))
        );
        loaded.push(...batchData.filter((d): d is ItemData => d !== null));
        if (!cancelled) setItems([...loaded]);
      }
      if (!cancelled) setLoading(false);
    })();
    return () => { cancelled = true; };
  }, []);

  const filtered = useMemo(() => {
    let result = items;
    if (search) {
      const s = search.toLowerCase();
      result = result.filter(item => formatName(item.name).toLowerCase().includes(s));
    }
    if (category !== 'all') {
      result = result.filter(item => item.category.name === category);
    }
    return result;
  }, [items, search, category]);

  return (
    <div>
      <div className="filters-bar">
        <input
          className="search-input"
          placeholder="Search items..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="item-categories">
        {CATEGORIES.filter(cat => cat === 'all' || items.some(i => i.category.name === cat)).map(cat => (
          <button
            key={cat}
            className={`filter-chip ${category === cat ? 'active' : ''}`}
            onClick={() => setCategory(cat)}
          >
            {CATEGORY_LABELS[cat] || formatName(cat)}
          </button>
        ))}
      </div>

      {loading && items.length === 0 ? (
        <div className="loading">
          <div className="pokeball-spinner" style={{ fontSize: 24 }}>⚪</div>
          <div className="loading-text">Loading items...</div>
        </div>
      ) : (
        <div className="item-grid">
          {filtered.map(item => {
            const effect = getEnglishEntry(item.effect_entries);
            return (
              <div key={item.id} className="item-card" onClick={() => setSelectedItem(item)}>
                <img
                  src={getItemSpriteUrl(item.name)}
                  alt={item.name}
                  onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div>
                  <div className="item-name">{formatName(item.name)}</div>
                  <div className="item-desc">
                    {effect?.short_effect || 'No description available.'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Item Detail Overlay */}
      {selectedItem && (
        <div className="detail-overlay" onClick={() => setSelectedItem(null)}>
          <div className="detail-panel" onClick={e => e.stopPropagation()} style={{ maxWidth: 460 }}>
            <button className="detail-close" onClick={() => setSelectedItem(null)}>✕</button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
              <img
                src={getItemSpriteUrl(selectedItem.name)}
                alt={selectedItem.name}
                style={{ width: 64, height: 64, imageRendering: 'pixelated' }}
                onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <div>
                <h2 style={{ fontSize: 20, fontWeight: 900 }}>{formatName(selectedItem.name)}</h2>
                <span className="type-badge" style={{ background: 'var(--gray-500)', fontSize: 11 }}>
                  {formatName(selectedItem.category.name)}
                </span>
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--gray-600)' }}>
              {getEnglishEntry(selectedItem.effect_entries)?.effect || 'No detailed description available.'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
