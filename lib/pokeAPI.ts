import axios from "axios";

const POKEMON_API = "https://pokeapi.co/api/v2";
const POKEMON_IMG_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";
const ITEMS_PER_PAGE = 20;
const MAX_POKEMON_COUNT = 1025;

export interface Pokemon {
  name: string;
  url: string;
}

async function findPokemonsByName(query: string) {
  const response = await fetch(
    `${POKEMON_API}/pokemon?limit=${MAX_POKEMON_COUNT}&offset=0`,
    { cache: "force-cache" },
  ).then((res) => res.json());
  
  const allPokemons = response.results;

  if (!query) return allPokemons;

  const formattedQuery = query.toLowerCase();
  const matchedPokemons = allPokemons.filter((p: Pokemon) =>
    p.name.toLowerCase().startsWith(formattedQuery),
  );

  return matchedPokemons;
}

export async function getFilteredPokemons(query: string, currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const matchedPokemons = await findPokemonsByName(query);
  return matchedPokemons.slice(offset, offset + ITEMS_PER_PAGE);
}

export async function getPages(query: string) {
  let resultCount = 0;

  if (query) {
    const matchedPokemons = await findPokemonsByName(query);
    resultCount = matchedPokemons.length;
  } else {
    resultCount = MAX_POKEMON_COUNT;
  }

  const totalPages = Math.ceil(resultCount / ITEMS_PER_PAGE);
  return totalPages;
}

export function getPokemonImageUrlById(id: number): string {
  return `${POKEMON_IMG_URL}/${id}.png`;
}

export function getPokemonId(pokemon: Pokemon): number {
  return Number(pokemon.url.split("/")[6]);
}
