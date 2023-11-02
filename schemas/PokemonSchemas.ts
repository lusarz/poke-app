import { z } from "zod";

export const PokemonListResponseSchema = z.object({
  count: z.number(),
  next: z.string(),
  previous: z.union([z.string(), z.null()]),
  results: z.array(z.object({ name: z.string(), url: z.string() }))
})

export const PokemonDetailsResponseSchema = z.object({
  name: z.string(),
  id: z.number(),
  height: z.number(),
  weight: z.number(),
  [z.string()]: z.unknown(), // This allows any additional properties with unknown values
})
