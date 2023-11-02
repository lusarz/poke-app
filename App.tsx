import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeWindStyleSheet } from "nativewind";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import PokemonDetails from "./components/PokemonDetails";
import PokemonList from "./components/PokemonList";

const Stack = createStackNavigator();
const queryClient = new QueryClient();
NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="PokemonList">
          <Stack.Screen name="Pokemons" component={PokemonList} />
          <Stack.Screen name="Pokemon details" component={PokemonDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
