import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";

import * as PokemonsService from "../services/PokemonsService";
import { PokemonDetailsItem } from "../schemas/PokemonSchemas";

export default function ({ route }) {
  const { id } = route.params;
  const [pokemon, setPokemon] = useState<PokemonDetailsItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    PokemonsService.fetchPokemon(id)
      .then((data) => {
        setPokemon(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [id]);

  return (
    <View className="flex-1 bg-gray-200 justify-start mt-3">
      {isLoading ? (
        <ActivityIndicator size="large" color="#007aff" testID="loading-indicator" />
      ) : (
        <View className="bg-white p-6 rounded-xl items-center shadow-md elevation-4">
          {pokemon ? (
            <>
              <Text className="text-2xl font-bold mb-4">{pokemon.name}</Text>
              <Text className="text-xl font-bold">Height:</Text>
              <Text className="text-xl mb-4" testID="height">
                {pokemon.height} m
              </Text>
              <Text className="text-xl font-bold">Weight:</Text>
              <Text className="text-xl mb-4" testID="weight">
                {pokemon.weight} kg
              </Text>
            </>
          ) : (
            <Text>No data available</Text>
          )}
        </View>
      )}
    </View>
  );
}
