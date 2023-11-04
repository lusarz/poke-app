import React from "react";
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
import { useInfiniteQuery } from "react-query";

import * as PokemonsService from "../services/PokemonsService";
// import * as Settings from "expo-custom-module";

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
    <View className="flex-1 bg-gray-100 py-2">
      {/*<Text>{Settings.hello()}</Text>*/}
      <FlatList
        data={(data?.pages || []).reduce((acc, page) => acc.concat(page), [])}
        keyExtractor={(item, index) => `${item.name} - ${index}`}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="bg-white p-4 my-1 rounded-lg flex flex-row justify-between items-center shadow-md"
            onPress={() => navigation.navigate("Pokemon details", { id: item.id })}>
            <Text className="text-xl font-bold">{item.name}</Text>
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
            <ActivityIndicator className="mt-4" size="large" color="#007aff" />
          ) : null;
        }}
      />
    </View>
  );
}
