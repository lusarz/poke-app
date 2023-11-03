import axios from "axios";

import {
  PokemonListItem,
  PokemonDetailsItem,
  PokemonDetailsResponseSchema,
  PokemonListResponseSchema,
} from "../schemas/PokemonSchemas";

export async function fetchPokemons(offset: number, limit: number): Promise<PokemonListItem[]> {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
  );

  return PokemonListResponseSchema.parse(response.data).results.map(({ url, name }) => {
    const match = url.match(/\/(\d+)\/$/);
    const id = parseInt(match[1], 10);
    return { name, id };
  });
}

export async function fetchPokemon(id: string): Promise<PokemonDetailsItem> {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  return PokemonDetailsResponseSchema.parse(response.data);
}
