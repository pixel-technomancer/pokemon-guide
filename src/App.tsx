import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Pokedex from './pages/Pokedex';
import Walkthrough from './pages/Walkthrough';
import RoutesPage from './pages/Routes';
import Items from './pages/Items';
import TMs from './pages/TMs';
import Berries from './pages/Berries';
import NewGameModal from './components/NewGameModal';
import { usePlaythrough } from './hooks/usePlaythrough';

export default function App() {
  const {
    playthroughs, active, setActive,
    createPlaythrough, updatePlaythrough, deletePlaythrough,
    toggleCaughtPokemon, toggleTeamMember, isCaught, isOnTeam, refresh,
  } = usePlaythrough();
  const [showNewGame, setShowNewGame] = useState(false);

  const handleCreateGame = (name: string, gameId: string, starterId: number | null) => {
    const pt = createPlaythrough(name, gameId);
    if (starterId) {
      updatePlaythrough(pt.id, {
        starterId,
        caughtPokemon: [starterId],
        team: [starterId],
      });
    }
    setShowNewGame(false);
  };

  return (
    <HashRouter>
      <Routes>
        <Route
          element={
            <Layout
              playthroughs={playthroughs}
              active={active}
              onSwitchPlaythrough={setActive}
              onDataImported={refresh}
            />
          }
        >
          <Route
            index
            element={
              <Dashboard
                active={active}
                onNewGame={() => setShowNewGame(true)}
                onDeletePlaythrough={deletePlaythrough}
                playthroughs={playthroughs}
              />
            }
          />
          <Route
            path="pokedex"
            element={
              <Pokedex
                isCaught={isCaught}
                isOnTeam={isOnTeam}
                onToggleCaught={toggleCaughtPokemon}
                onToggleTeam={toggleTeamMember}
                hasPlaythrough={!!active}
              />
            }
          />
          <Route
            path="walkthrough"
            element={
              <Walkthrough
                active={active}
                onUpdatePlaythrough={updatePlaythrough}
              />
            }
          />
          <Route
            path="routes"
            element={
              <RoutesPage
                active={active}
                onUpdatePlaythrough={updatePlaythrough}
              />
            }
          />
          <Route path="items" element={<Items />} />
          <Route path="tms" element={<TMs />} />
          <Route path="berries" element={<Berries />} />
        </Route>
      </Routes>
      {showNewGame && (
        <NewGameModal
          onClose={() => setShowNewGame(false)}
          onCreate={handleCreateGame}
        />
      )}
    </HashRouter>
  );
}
