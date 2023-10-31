import axios from "axios";

import { PokemonDetailsItem, PokemonListItem } from "../types/PokemonTypes";

export async function fetchPokemons(offset: number, limit: number): Promise<PokemonListItem[]> {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
  );
  return response.data.results.map(({ url, name }) => {
    const match = url.match(/\/(\d+)\/$/);
    const id = match ? parseInt(match[1], 10) : null;
    return { name, id };
  });
}

export async function fetchPokemon(id: string): Promise<PokemonDetailsItem> {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  return response.data;
}
