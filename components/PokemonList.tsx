import React from "react";
import {
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useInfiniteQuery } from "react-query";

import * as PokemonsService from "../services/PokemonsService";

export default function ({ navigation }) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
    "pokemons",
    ({ pageParam }) => PokemonsService.fetchPokemons((pageParam - 1) * 20, 20),
    {
      getNextPageParam: (lastPage, allPages) =>
        lastPage.length === 0 ? undefined : allPages.length + 1,
    },
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={(data?.pages || []).reduce((acc, page) => acc.concat(page), [])}
        keyExtractor={(item, index) => `${item.name} - ${index}`}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => navigation.navigate("Pokemon details", { id: item.id })}>
            <Text style={styles.listItemText}>{item.name}</Text>
            <Text>➔</Text>
          </TouchableOpacity>
        )}
        onEndReached={() => {
          if (hasNextPage) {
            fetchNextPage();
          }
        }}
        ListFooterComponent={() => {
          return isFetchingNextPage ? (
            <ActivityIndicator style={styles.loadingIndicator} size="large" color="#007aff" />
          ) : null;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 16,
  },
  listItem: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  listItemText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  loadingIndicator: {
    marginTop: 16,
  },
});
