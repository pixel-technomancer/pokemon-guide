const API_BASE = 'https://pokeapi.co/api/v2';
const CACHE_DB_NAME = 'pokemon-guide-cache';
const CACHE_STORE_NAME = 'api-cache';
const CACHE_VERSION = 1;

let dbInstance: IDBDatabase | null = null;
let dbPromise: Promise<IDBDatabase> | null = null;

function openCacheDB(): Promise<IDBDatabase> {
  if (dbInstance) return Promise.resolve(dbInstance);
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(CACHE_DB_NAME, CACHE_VERSION);
    request.onupgradeneeded = () => {
      request.result.createObjectStore(CACHE_STORE_NAME);
    };
    request.onsuccess = () => {
      dbInstance = request.result;
      dbInstance.onclose = () => { dbInstance = null; dbPromise = null; };
      resolve(dbInstance);
    };
    request.onerror = () => {
      dbPromise = null;
      reject(request.error);
    };
  });
  return dbPromise;
}

async function getCached<T>(key: string): Promise<T | null> {
  try {
    const db = await openCacheDB();
    return new Promise((resolve) => {
      const tx = db.transaction(CACHE_STORE_NAME, 'readonly');
      const store = tx.objectStore(CACHE_STORE_NAME);
      const request = store.get(key);
      request.onsuccess = () => resolve(request.result ?? null);
      request.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

async function setCache<T>(key: string, value: T): Promise<void> {
  try {
    const db = await openCacheDB();
    const tx = db.transaction(CACHE_STORE_NAME, 'readwrite');
    tx.objectStore(CACHE_STORE_NAME).put(value, key);
  } catch {
    // Cache write failure is non-critical
  }
}

async function fetchWithCache<T>(url: string): Promise<T> {
  const cached = await getCached<T>(url);
  if (cached) return cached;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) throw new Error(`API error: ${response.status}`);
    const data = await response.json();
    await setCache(url, data);
    return data;
  } finally {
    clearTimeout(timeout);
  }
}

// Types
export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonBasic {
  id: number;
  name: string;
  types: { type: { name: string } }[];
  sprites: {
    front_default: string | null;
    other: {
      'official-artwork': { front_default: string | null };
      showdown: { front_default: string | null };
    };
  };
  stats: { base_stat: number; stat: { name: string } }[];
  abilities: { ability: { name: string }; is_hidden: boolean }[];
  height: number;
  weight: number;
}

export interface PokemonSpecies {
  id: number;
  name: string;
  flavor_text_entries: { flavor_text: string; language: { name: string }; version: { name: string } }[];
  genera: { genus: string; language: { name: string } }[];
  evolution_chain: { url: string };
  generation: { name: string };
  varieties: { is_default: boolean; pokemon: { name: string; url: string } }[];
}

export interface EvolutionChain {
  chain: EvolutionNode;
}

export interface EvolutionNode {
  species: { name: string; url: string };
  evolution_details: { min_level: number | null; trigger: { name: string }; item: { name: string } | null }[];
  evolves_to: EvolutionNode[];
}

export interface LocationAreaEncounter {
  location_area: { name: string; url: string };
  version_details: {
    version: { name: string };
    max_chance: number;
    encounter_details: { method: { name: string }; chance: number; min_level: number; max_level: number }[];
  }[];
}

export interface ItemData {
  id: number;
  name: string;
  sprites: { default: string | null };
  effect_entries: { effect: string; short_effect: string; language: { name: string } }[];
  category: { name: string };
  flavor_text_entries: { text: string; language: { name: string }; version_group: { name: string } }[];
}

export interface BerryData {
  id: number;
  name: string;
  item: { name: string; url: string };
  growth_time: number;
  size: number;
  firmness: { name: string };
  flavors: { potency: number; flavor: { name: string } }[];
  natural_gift_type: { name: string };
  natural_gift_power: number;
}

export interface MoveData {
  id: number;
  name: string;
  type: { name: string };
  power: number | null;
  accuracy: number | null;
  pp: number | null;
  damage_class: { name: string };
  effect_entries: { effect: string; short_effect: string; language: { name: string } }[];
  machines: { machine: { url: string }; version_group: { name: string } }[];
}

export interface MachineData {
  id: number;
  item: { name: string; url: string };
  move: { name: string; url: string };
  version_group: { name: string; url: string };
}

export interface LocationData {
  id: number;
  name: string;
  region: { name: string } | null;
  areas: { name: string; url: string }[];
}

export interface LocationAreaData {
  id: number;
  name: string;
  location: { name: string; url: string };
  pokemon_encounters: {
    pokemon: { name: string; url: string };
    version_details: {
      version: { name: string };
      max_chance: number;
      encounter_details: { method: { name: string }; chance: number; min_level: number; max_level: number }[];
    }[];
  }[];
}

export interface RegionData {
  id: number;
  name: string;
  locations: { name: string; url: string }[];
}

export interface PokedexData {
  id: number;
  name: string;
  pokemon_entries: { entry_number: number; pokemon_species: { name: string; url: string } }[];
}

// API Functions
export async function getPokemon(idOrName: number | string): Promise<PokemonBasic> {
  return fetchWithCache<PokemonBasic>(`${API_BASE}/pokemon/${idOrName}`);
}

export async function getPokemonSpecies(idOrName: number | string): Promise<PokemonSpecies> {
  return fetchWithCache<PokemonSpecies>(`${API_BASE}/pokemon-species/${idOrName}`);
}

export async function getEvolutionChain(id: number): Promise<EvolutionChain> {
  return fetchWithCache<EvolutionChain>(`${API_BASE}/evolution-chain/${id}`);
}

export async function getPokemonEncounters(id: number): Promise<LocationAreaEncounter[]> {
  return fetchWithCache<LocationAreaEncounter[]>(`${API_BASE}/pokemon/${id}/encounters`);
}

export async function getItem(idOrName: number | string): Promise<ItemData> {
  return fetchWithCache<ItemData>(`${API_BASE}/item/${idOrName}`);
}

export async function getBerry(idOrName: number | string): Promise<BerryData> {
  return fetchWithCache<BerryData>(`${API_BASE}/berry/${idOrName}`);
}

export async function getMove(idOrName: number | string): Promise<MoveData> {
  return fetchWithCache<MoveData>(`${API_BASE}/move/${idOrName}`);
}

export async function getMachine(id: number): Promise<MachineData> {
  return fetchWithCache<MachineData>(`${API_BASE}/machine/${id}`);
}

export async function getRegion(idOrName: number | string): Promise<RegionData> {
  return fetchWithCache<RegionData>(`${API_BASE}/region/${idOrName}`);
}

export async function getLocation(idOrName: number | string): Promise<LocationData> {
  return fetchWithCache<LocationData>(`${API_BASE}/location/${idOrName}`);
}

export async function getLocationArea(idOrName: number | string): Promise<LocationAreaData> {
  return fetchWithCache<LocationAreaData>(`${API_BASE}/location-area/${idOrName}`);
}

export async function getPokedex(idOrName: number | string): Promise<PokedexData> {
  return fetchWithCache<PokedexData>(`${API_BASE}/pokedex/${idOrName}`);
}

export async function getVersionGroup(name: string) {
  return fetchWithCache<{ id: number; name: string; pokedexes: { name: string; url: string }[]; regions: { name: string; url: string }[]; }>(`${API_BASE}/version-group/${name}`);
}

export async function listPokemon(limit: number, offset: number = 0): Promise<{ results: PokemonListItem[]; count: number }> {
  return fetchWithCache(`${API_BASE}/pokemon?limit=${limit}&offset=${offset}`);
}

export async function listItems(limit: number, offset: number = 0): Promise<{ results: PokemonListItem[]; count: number }> {
  return fetchWithCache(`${API_BASE}/item?limit=${limit}&offset=${offset}`);
}

export async function listBerries(limit: number = 64, offset: number = 0): Promise<{ results: PokemonListItem[]; count: number }> {
  return fetchWithCache(`${API_BASE}/berry?limit=${limit}&offset=${offset}`);
}

export async function listMoves(limit: number, offset: number = 0): Promise<{ results: PokemonListItem[]; count: number }> {
  return fetchWithCache(`${API_BASE}/move?limit=${limit}&offset=${offset}`);
}

// Helpers
export function getSpriteUrl(id: number): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

export function getOfficialArtworkUrl(id: number): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

export function getShowdownSpriteUrl(id: number): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`;
}

export function getItemSpriteUrl(name: string): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${name}.png`;
}

export function formatName(name: string): string {
  return name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

export function getEnglishEntry<T extends { language: { name: string } }>(entries: T[]): T | undefined {
  return entries.find(e => e.language.name === 'en');
}

export function getIdFromUrl(url: string): number {
  const parts = url.replace(/\/$/, '').split('/');
  return parseInt(parts[parts.length - 1], 10);
}
