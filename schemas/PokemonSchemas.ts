import { z } from "zod";

const PokemonListItemSchema = z.object({
  name: z.string(),
  url: z.string(),
});

export const PokemonListResponseSchema = z.object({
  count: z.number(),
  next: z.string(),
  previous: z.union([z.string(), z.null()]),
  results: z.array(PokemonListItemSchema),
});

// API returns url instead of id - this is why custom type is necessary
export type PokemonListItem = {
  name: string;
  id: number;
};

export const PokemonDetailsResponseSchema = z.object({
  name: z.string(),
  id: z.number(),
  height: z.number(),
  weight: z.number(),
  base_experience: z.number()
});

export type PokemonDetailsItem = z.infer<typeof PokemonDetailsResponseSchema>;
