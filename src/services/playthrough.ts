export interface Playthrough {
  id: string;
  name: string;
  gameId: string;
  starterId: number | null;
  caughtPokemon: number[];
  team: number[];
  currentRouteIndex: number;
  completedRoutes: string[];
  completedSteps: string[];
  badgesEarned: number;
  createdAt: number;
  updatedAt: number;
}

const STORAGE_KEY = 'pokemon-guide-playthroughs';
const ACTIVE_KEY = 'pokemon-guide-active-playthrough';

function loadPlaythroughs(): Playthrough[] {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return [];
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function savePlaythroughs(playthroughs: Playthrough[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(playthroughs));
}

export function getAllPlaythroughs(): Playthrough[] {
  return loadPlaythroughs();
}

export function getPlaythrough(id: string): Playthrough | undefined {
  return loadPlaythroughs().find(p => p.id === id);
}

export function getActivePlaythroughId(): string | null {
  return localStorage.getItem(ACTIVE_KEY);
}

export function setActivePlaythrough(id: string) {
  localStorage.setItem(ACTIVE_KEY, id);
}

export function createPlaythrough(name: string, gameId: string): Playthrough {
  const playthroughs = loadPlaythroughs();
  const newPlaythrough: Playthrough = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    name,
    gameId,
    starterId: null,
    caughtPokemon: [],
    team: [],
    currentRouteIndex: 0,
    completedRoutes: [],
    completedSteps: [],
    badgesEarned: 0,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
  playthroughs.push(newPlaythrough);
  savePlaythroughs(playthroughs);
  setActivePlaythrough(newPlaythrough.id);
  return newPlaythrough;
}

export function updatePlaythrough(id: string, updates: Partial<Playthrough>): Playthrough | undefined {
  const playthroughs = loadPlaythroughs();
  const index = playthroughs.findIndex(p => p.id === id);
  if (index === -1) return undefined;
  playthroughs[index] = { ...playthroughs[index], ...updates, updatedAt: Date.now() };
  savePlaythroughs(playthroughs);
  return playthroughs[index];
}

export function deletePlaythrough(id: string) {
  const playthroughs = loadPlaythroughs().filter(p => p.id !== id);
  savePlaythroughs(playthroughs);
  if (getActivePlaythroughId() === id) {
    localStorage.removeItem(ACTIVE_KEY);
    if (playthroughs.length > 0) {
      setActivePlaythrough(playthroughs[0].id);
    }
  }
}

export function toggleCaughtPokemon(playthroughId: string, pokemonId: number): Playthrough | undefined {
  const pt = getPlaythrough(playthroughId);
  if (!pt) return undefined;
  const caught = pt.caughtPokemon.includes(pokemonId)
    ? pt.caughtPokemon.filter(id => id !== pokemonId)
    : [...pt.caughtPokemon, pokemonId];
  return updatePlaythrough(playthroughId, { caughtPokemon: caught });
}

export function setTeam(playthroughId: string, team: number[]): Playthrough | undefined {
  return updatePlaythrough(playthroughId, { team: team.slice(0, 6) });
}

export function toggleTeamMember(playthroughId: string, pokemonId: number): Playthrough | undefined {
  const pt = getPlaythrough(playthroughId);
  if (!pt) return undefined;
  const team = pt.team.includes(pokemonId)
    ? pt.team.filter(id => id !== pokemonId)
    : pt.team.length < 6 ? [...pt.team, pokemonId] : pt.team;
  return updatePlaythrough(playthroughId, { team });
}
