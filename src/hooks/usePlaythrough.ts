import { useState, useCallback } from 'react';
import {
  Playthrough,
  getAllPlaythroughs,
  getPlaythrough,
  getActivePlaythroughId,
  setActivePlaythrough as setActiveId,
  createPlaythrough as createPT,
  updatePlaythrough as updatePT,
  deletePlaythrough as deletePT,
  toggleCaughtPokemon as toggleCaught,
  toggleTeamMember as toggleTeam,
} from '../services/playthrough';

export function usePlaythrough() {
  const [playthroughs, setPlaythroughs] = useState<Playthrough[]>(getAllPlaythroughs);
  const [activeId, setActiveIdState] = useState<string | null>(getActivePlaythroughId);

  const refresh = useCallback(() => {
    setPlaythroughs(getAllPlaythroughs());
    setActiveIdState(getActivePlaythroughId());
  }, []);

  const active = activeId ? playthroughs.find(p => p.id === activeId) ?? null : null;

  const createPlaythrough = useCallback((name: string, gameId: string) => {
    const pt = createPT(name, gameId);
    refresh();
    return pt;
  }, [refresh]);

  const setActive = useCallback((id: string) => {
    setActiveId(id);
    refresh();
  }, [refresh]);

  const updatePlaythrough = useCallback((id: string, updates: Partial<Playthrough>) => {
    const pt = updatePT(id, updates);
    refresh();
    return pt;
  }, [refresh]);

  const deletePlaythrough = useCallback((id: string) => {
    deletePT(id);
    refresh();
  }, [refresh]);

  const toggleCaughtPokemon = useCallback((pokemonId: number) => {
    if (!activeId) return;
    toggleCaught(activeId, pokemonId);
    refresh();
  }, [activeId, refresh]);

  const toggleTeamMember = useCallback((pokemonId: number) => {
    if (!activeId) return;
    toggleTeam(activeId, pokemonId);
    refresh();
  }, [activeId, refresh]);

  const isCaught = useCallback((pokemonId: number) => {
    return active?.caughtPokemon.includes(pokemonId) ?? false;
  }, [active]);

  const isOnTeam = useCallback((pokemonId: number) => {
    return active?.team.includes(pokemonId) ?? false;
  }, [active]);

  return {
    playthroughs,
    active,
    activeId,
    setActive,
    createPlaythrough,
    updatePlaythrough,
    deletePlaythrough,
    toggleCaughtPokemon,
    toggleTeamMember,
    isCaught,
    isOnTeam,
    refresh,
  };
}
