import { StyleSheet, Text, View } from 'react-native';

import * as ExpoCustomModule from 'expo-custom-module';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoCustomModule.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
