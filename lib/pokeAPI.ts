import axios from "axios";

const POKEMON_API = "https://pokeapi.co/api/v2";
const POKEMON_IMG_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";
const ITEMS_PER_PAGE = 20;
const MAX_POKEMON_COUNT = 1302;

export interface Pokemon {
  name: string;
  url: string;
}

export async function getFilteredPokemons(query: string, currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  if (query) {
    const formattedQuery = query.toLowerCase();
    const allPokemons = (
      await axios.get(`${POKEMON_API}/pokemon?limit=${MAX_POKEMON_COUNT}`)
    ).data.results;

    const matchedPokemons = allPokemons.filter((p: Pokemon) =>
      p.name.toLowerCase().startsWith(formattedQuery),
    );

    return matchedPokemons.slice(offset, offset + ITEMS_PER_PAGE);
  } else {
    const response = await axios.get(
      `${POKEMON_API}/pokemon?limit=${ITEMS_PER_PAGE}&offset=${offset}`,
    );

    return response.data.results;
  }
}

export function getPokemonImageUrlById(id: number): string {
  return `${POKEMON_IMG_URL}/${id}.png`;
}

export function getPokemonId(pokemon: Pokemon): number {
  return Number(pokemon.url.split("/")[6]);
}
