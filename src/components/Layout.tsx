import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Playthrough } from '../services/playthrough';
import { POKEMON_GAMES } from '../data/games';
import SyncModal from './SyncModal';

interface LayoutProps {
  playthroughs: Playthrough[];
  active: Playthrough | null;
  onSwitchPlaythrough: (id: string) => void;
  onDataImported: () => void;
}

const NAV_ITEMS = [
  { to: '/', icon: '🏠', label: 'Home' },
  { to: '/pokedex', icon: '📱', label: 'Pokédex' },
  { to: '/walkthrough', icon: '📖', label: 'Guide' },
  { to: '/routes', icon: '🗺️', label: 'Routes' },
  { to: '/items', icon: '🎒', label: 'Items' },
  { to: '/tms', icon: '💿', label: 'TMs' },
  { to: '/berries', icon: '🫐', label: 'Berries' },
];

const PAGE_TITLES: Record<string, string> = {
  '/': 'Dashboard',
  '/pokedex': 'Pokédex',
  '/walkthrough': 'Walkthrough',
  '/routes': 'Route Guide',
  '/items': 'Items',
  '/tms': 'TMs & HMs',
  '/berries': 'Berries',
};

export default function Layout({ playthroughs, active, onSwitchPlaythrough, onDataImported }: LayoutProps) {
  const location = useLocation();
  const activeGame = active ? POKEMON_GAMES.find(g => g.id === active.gameId) : null;
  const pageTitle = PAGE_TITLES[location.pathname] || 'Pokemon Guide';
  const [showSync, setShowSync] = useState(false);

  return (
    <div className="app-layout">
      {/* Desktop sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div style={{ fontSize: '32px', marginBottom: 4 }}>⚡</div>
          <h1>Pokemon Guide</h1>
        </div>
        <nav className="sidebar-nav">
          {NAV_ITEMS.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => isActive ? 'active' : ''}
              end={item.to === '/'}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
        {playthroughs.length > 0 && (
          <div className="sidebar-playthrough">
            <select
              value={active?.id || ''}
              onChange={e => onSwitchPlaythrough(e.target.value)}
            >
              {playthroughs.map(pt => {
                const game = POKEMON_GAMES.find(g => g.id === pt.gameId);
                return (
                  <option key={pt.id} value={pt.id}>
                    {pt.name} ({game?.name.replace('Pokemon ', '') || pt.gameId})
                  </option>
                );
              })}
            </select>
          </div>
        )}
        <button className="sidebar-sync-btn" onClick={() => setShowSync(true)}>
          Sync
        </button>
      </aside>

      {/* Main content */}
      <main className="main-content">
        <header className="topbar">
          <span className="topbar-title">{pageTitle}</span>
          {activeGame && (
            <span className="topbar-game">{activeGame.name}</span>
          )}
          <button className="topbar-sync-btn" onClick={() => setShowSync(true)}>
            Sync
          </button>
        </header>
        <div className="page-content">
          <Outlet />
        </div>
      </main>

      {/* Mobile bottom tab bar */}
      <nav className="bottom-nav">
        {NAV_ITEMS.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
            end={item.to === '/'}
          >
            <span className="bottom-nav-icon">{item.icon}</span>
            <span className="bottom-nav-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {showSync && (
        <SyncModal
          onClose={() => setShowSync(false)}
          onDataImported={onDataImported}
        />
      )}
    </div>
  );
}
