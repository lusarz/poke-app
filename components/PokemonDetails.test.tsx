import { render } from "@testing-library/react-native";
import React from "react";

import PokemonDetails from "./PokemonDetails";
import * as PokemonsService from "../services/PokemonsService";
import * as PromiseUtils from "../utils/PromiseUtils";

test("renders loading indicator when data is loading", () => {
  const { getByTestId } = render(<PokemonDetails route={{ params: { id: 1 } }} />);
  expect(getByTestId("loading-indicator")).toBeTruthy();
});

test("renders Pokemon details when data is loaded", async () => {
  const mockPokemon = {
    id: 1,
    name: "Pikachu",
    height: 0.4,
    weight: 6,
  };

  jest.spyOn(PokemonsService, "fetchPokemon").mockResolvedValue(mockPokemon);

  const { getByText, getByTestId } = render(<PokemonDetails route={{ params: { id: 1 } }} />);

  // Ensure that loading text is present
  expect(getByTestId("loading-indicator")).toBeTruthy();

  // Ensure that Pokemon details are displayed
  await PromiseUtils.delay(100);
  expect(getByText("Pikachu")).toBeTruthy();
  expect(getByTestId("height")).toHaveTextContent("0.4 m");
  expect(getByTestId("weight")).toHaveTextContent("6 kg");
});
