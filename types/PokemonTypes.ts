export type PokemonListItem = {
  name: string;
  id: number;
};

export type PokemonDetailsItem = {
  name: string;
  id: number;
  height: number;
  weight: number;
  [key: string]: unknown;
};
