export interface PokemonGame {
  id: string;
  name: string;
  generation: number;
  region: string;
  pokeapiVersionGroup: string;
  pokeapiVersion: string;
  color: string;
  year: number;
  starters: number[];
}

export const POKEMON_GAMES: PokemonGame[] = [
  // Gen 1
  { id: 'red', name: 'Pokémon Red', generation: 1, region: 'Kanto', pokeapiVersionGroup: 'red-blue', pokeapiVersion: 'red', color: '#FF1111', year: 1996, starters: [1, 4, 7] },
  { id: 'blue', name: 'Pokémon Blue', generation: 1, region: 'Kanto', pokeapiVersionGroup: 'red-blue', pokeapiVersion: 'blue', color: '#1111FF', year: 1996, starters: [1, 4, 7] },
  { id: 'yellow', name: 'Pokémon Yellow', generation: 1, region: 'Kanto', pokeapiVersionGroup: 'yellow', pokeapiVersion: 'yellow', color: '#FFD733', year: 1998, starters: [25] },
  // Gen 2
  { id: 'gold', name: 'Pokémon Gold', generation: 2, region: 'Johto', pokeapiVersionGroup: 'gold-silver', pokeapiVersion: 'gold', color: '#DAA520', year: 1999, starters: [152, 155, 158] },
  { id: 'silver', name: 'Pokémon Silver', generation: 2, region: 'Johto', pokeapiVersionGroup: 'gold-silver', pokeapiVersion: 'silver', color: '#C0C0C0', year: 1999, starters: [152, 155, 158] },
  { id: 'crystal', name: 'Pokémon Crystal', generation: 2, region: 'Johto', pokeapiVersionGroup: 'crystal', pokeapiVersion: 'crystal', color: '#4FD9FF', year: 2000, starters: [152, 155, 158] },
  // Gen 3
  { id: 'ruby', name: 'Pokémon Ruby', generation: 3, region: 'Hoenn', pokeapiVersionGroup: 'ruby-sapphire', pokeapiVersion: 'ruby', color: '#A00000', year: 2002, starters: [252, 255, 258] },
  { id: 'sapphire', name: 'Pokémon Sapphire', generation: 3, region: 'Hoenn', pokeapiVersionGroup: 'ruby-sapphire', pokeapiVersion: 'sapphire', color: '#0000A0', year: 2002, starters: [252, 255, 258] },
  { id: 'emerald', name: 'Pokémon Emerald', generation: 3, region: 'Hoenn', pokeapiVersionGroup: 'emerald', pokeapiVersion: 'emerald', color: '#00A000', year: 2004, starters: [252, 255, 258] },
  { id: 'firered', name: 'Pokémon FireRed', generation: 3, region: 'Kanto', pokeapiVersionGroup: 'firered-leafgreen', pokeapiVersion: 'firered', color: '#FF7327', year: 2004, starters: [1, 4, 7] },
  { id: 'leafgreen', name: 'Pokémon LeafGreen', generation: 3, region: 'Kanto', pokeapiVersionGroup: 'firered-leafgreen', pokeapiVersion: 'leafgreen', color: '#00DD00', year: 2004, starters: [1, 4, 7] },
  // Gen 4
  { id: 'diamond', name: 'Pokémon Diamond', generation: 4, region: 'Sinnoh', pokeapiVersionGroup: 'diamond-pearl', pokeapiVersion: 'diamond', color: '#AAAAFF', year: 2006, starters: [387, 390, 393] },
  { id: 'pearl', name: 'Pokémon Pearl', generation: 4, region: 'Sinnoh', pokeapiVersionGroup: 'diamond-pearl', pokeapiVersion: 'pearl', color: '#FFAAAA', year: 2006, starters: [387, 390, 393] },
  { id: 'platinum', name: 'Pokémon Platinum', generation: 4, region: 'Sinnoh', pokeapiVersionGroup: 'platinum', pokeapiVersion: 'platinum', color: '#999999', year: 2008, starters: [387, 390, 393] },
  { id: 'heartgold', name: 'Pokémon HeartGold', generation: 4, region: 'Johto', pokeapiVersionGroup: 'heartgold-soulsilver', pokeapiVersion: 'heartgold', color: '#B69E00', year: 2009, starters: [152, 155, 158] },
  { id: 'soulsilver', name: 'Pokémon SoulSilver', generation: 4, region: 'Johto', pokeapiVersionGroup: 'heartgold-soulsilver', pokeapiVersion: 'soulsilver', color: '#C0C0E0', year: 2009, starters: [152, 155, 158] },
  // Gen 5
  { id: 'black', name: 'Pokémon Black', generation: 5, region: 'Unova', pokeapiVersionGroup: 'black-white', pokeapiVersion: 'black', color: '#444444', year: 2010, starters: [495, 498, 501] },
  { id: 'white', name: 'Pokémon White', generation: 5, region: 'Unova', pokeapiVersionGroup: 'black-white', pokeapiVersion: 'white', color: '#E1E1E1', year: 2010, starters: [495, 498, 501] },
  { id: 'black-2', name: 'Pokémon Black 2', generation: 5, region: 'Unova', pokeapiVersionGroup: 'black-2-white-2', pokeapiVersion: 'black-2', color: '#444444', year: 2012, starters: [495, 498, 501] },
  { id: 'white-2', name: 'Pokémon White 2', generation: 5, region: 'Unova', pokeapiVersionGroup: 'black-2-white-2', pokeapiVersion: 'white-2', color: '#E1E1E1', year: 2012, starters: [495, 498, 501] },
  // Gen 6
  { id: 'x', name: 'Pokémon X', generation: 6, region: 'Kalos', pokeapiVersionGroup: 'x-y', pokeapiVersion: 'x', color: '#025DA6', year: 2013, starters: [650, 653, 656] },
  { id: 'y', name: 'Pokémon Y', generation: 6, region: 'Kalos', pokeapiVersionGroup: 'x-y', pokeapiVersion: 'y', color: '#EA1A3E', year: 2013, starters: [650, 653, 656] },
  { id: 'omega-ruby', name: 'Pokémon Omega Ruby', generation: 6, region: 'Hoenn', pokeapiVersionGroup: 'omega-ruby-alpha-sapphire', pokeapiVersion: 'omega-ruby', color: '#CF3025', year: 2014, starters: [252, 255, 258] },
  { id: 'alpha-sapphire', name: 'Pokémon Alpha Sapphire', generation: 6, region: 'Hoenn', pokeapiVersionGroup: 'omega-ruby-alpha-sapphire', pokeapiVersion: 'alpha-sapphire', color: '#26649C', year: 2014, starters: [252, 255, 258] },
  // Gen 7
  { id: 'sun', name: 'Pokémon Sun', generation: 7, region: 'Alola', pokeapiVersionGroup: 'sun-moon', pokeapiVersion: 'sun', color: '#F5A623', year: 2016, starters: [722, 725, 728] },
  { id: 'moon', name: 'Pokémon Moon', generation: 7, region: 'Alola', pokeapiVersionGroup: 'sun-moon', pokeapiVersion: 'moon', color: '#7038F8', year: 2016, starters: [722, 725, 728] },
  { id: 'ultra-sun', name: 'Pokémon Ultra Sun', generation: 7, region: 'Alola', pokeapiVersionGroup: 'ultra-sun-ultra-moon', pokeapiVersion: 'ultra-sun', color: '#E8682A', year: 2017, starters: [722, 725, 728] },
  { id: 'ultra-moon', name: 'Pokémon Ultra Moon', generation: 7, region: 'Alola', pokeapiVersionGroup: 'ultra-sun-ultra-moon', pokeapiVersion: 'ultra-moon', color: '#5C2D91', year: 2017, starters: [722, 725, 728] },
  { id: 'lets-go-pikachu', name: "Pokémon Let's Go Pikachu", generation: 7, region: 'Kanto', pokeapiVersionGroup: 'lets-go-pikachu-lets-go-eevee', pokeapiVersion: 'lets-go-pikachu', color: '#F5D442', year: 2018, starters: [25] },
  { id: 'lets-go-eevee', name: "Pokémon Let's Go Eevee", generation: 7, region: 'Kanto', pokeapiVersionGroup: 'lets-go-pikachu-lets-go-eevee', pokeapiVersion: 'lets-go-eevee', color: '#C88D32', year: 2018, starters: [133] },
  // Gen 8
  { id: 'sword', name: 'Pokémon Sword', generation: 8, region: 'Galar', pokeapiVersionGroup: 'sword-shield', pokeapiVersion: 'sword', color: '#00A1E9', year: 2019, starters: [810, 813, 816] },
  { id: 'shield', name: 'Pokémon Shield', generation: 8, region: 'Galar', pokeapiVersionGroup: 'sword-shield', pokeapiVersion: 'shield', color: '#BF004F', year: 2019, starters: [810, 813, 816] },
  { id: 'brilliant-diamond', name: 'Pokémon Brilliant Diamond', generation: 8, region: 'Sinnoh', pokeapiVersionGroup: 'brilliant-diamond-and-shining-pearl', pokeapiVersion: 'brilliant-diamond', color: '#44A2F0', year: 2021, starters: [387, 390, 393] },
  { id: 'shining-pearl', name: 'Pokémon Shining Pearl', generation: 8, region: 'Sinnoh', pokeapiVersionGroup: 'brilliant-diamond-and-shining-pearl', pokeapiVersion: 'shining-pearl', color: '#E86882', year: 2021, starters: [387, 390, 393] },
  { id: 'legends-arceus', name: 'Pokémon Legends: Arceus', generation: 8, region: 'Hisui', pokeapiVersionGroup: 'legends-arceus', pokeapiVersion: 'legends-arceus', color: '#36597E', year: 2022, starters: [155, 501, 722] },
  // Gen 9
  { id: 'scarlet', name: 'Pokémon Scarlet', generation: 9, region: 'Paldea', pokeapiVersionGroup: 'scarlet-violet', pokeapiVersion: 'scarlet', color: '#F34134', year: 2022, starters: [906, 909, 912] },
  { id: 'violet', name: 'Pokémon Violet', generation: 9, region: 'Paldea', pokeapiVersionGroup: 'scarlet-violet', pokeapiVersion: 'violet', color: '#8B2CC0', year: 2022, starters: [906, 909, 912] },
];

export const GENERATIONS = [
  { num: 1, name: 'Generation I', region: 'Kanto', range: [1, 151] },
  { num: 2, name: 'Generation II', region: 'Johto', range: [152, 251] },
  { num: 3, name: 'Generation III', region: 'Hoenn', range: [252, 386] },
  { num: 4, name: 'Generation IV', region: 'Sinnoh', range: [387, 493] },
  { num: 5, name: 'Generation V', region: 'Unova', range: [494, 649] },
  { num: 6, name: 'Generation VI', region: 'Kalos', range: [650, 721] },
  { num: 7, name: 'Generation VII', region: 'Alola', range: [722, 809] },
  { num: 8, name: 'Generation VIII', region: 'Galar', range: [810, 905] },
  { num: 9, name: 'Generation IX', region: 'Paldea', range: [906, 1025] },
];

export const TYPE_COLORS: Record<string, string> = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};
