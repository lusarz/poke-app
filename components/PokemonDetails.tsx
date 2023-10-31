import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

import * as PokemonsService from "../services/PokemonsService";
import { PokemonDetailsItem } from "../types/PokemonTypes";

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
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#007aff" testID="loading-indicator" />
      ) : (
        <View style={styles.card}>
          {pokemon ? (
            <>
              <Text style={styles.title}>{pokemon.name}</Text>
              <Text style={styles.label}>Height:</Text>
              <Text style={styles.value} testID="height">
                {pokemon.height} m
              </Text>
              <Text style={styles.label}>Weight:</Text>
              <Text style={styles.value} testID="weight">
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    justifyContent: "flex-start",
    marginTop: 12,
  },
  card: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
  value: {
    fontSize: 18,
    marginBottom: 16,
  },
  loadingText: {
    fontSize: 18,
  },
});
