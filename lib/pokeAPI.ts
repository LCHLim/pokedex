import axios from "axios";

const POKEMON_API = "https://pokeapi.co/api/v2";
const POKEMON_IMG_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

export async function getPokemonList(limit?: number, offset?: number) {
  const response = await axios.get(
    `${POKEMON_API}/pokemon?limit=${limit}&offset=${offset}`,
  );
  return response.data.results;
}

export function getPokemonImageUrlById(id: number): string {
  return `${POKEMON_IMG_URL}/${id}.png`;
}

export function getPokemonId(pokemon): number{
  return pokemon.url.split('/')[6];
}
