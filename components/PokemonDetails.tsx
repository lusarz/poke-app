import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useQuery } from "react-query";

import * as PokemonsService from "../services/PokemonsService";
import { PillView } from "../modules/custom-views";

export default function ({ route }) {
  const { id } = route.params;

  const { data: pokemon, isLoading, isError } = useQuery(
    ["pokemon", id],
    () => PokemonsService.fetchPokemon(id)
  );

  return (
    <View className="flex-1 bg-gray-200 justify-start mt-3">
      {isLoading ? (
        <ActivityIndicator size="large" color="#007aff" testID="loading-indicator" />
      ) : (
        <View className="bg-white p-6 rounded-xl items-center shadow-md elevation-4 ">
          {pokemon && !isError ? (
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
              <Text className="text-xl font-bold">Experience:</Text>
              <PillView
                value={pokemon.base_experience}
                style={{ minHeight: 50, minWidth: 50, marginTop: 20 }}
              />
            </>
          ) : (
            <Text>No data available</Text>
          )}
        </View>
      )}
    </View>
  );
}
