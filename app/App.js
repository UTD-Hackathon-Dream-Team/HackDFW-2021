import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextInputs from './components/auth'; 


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Don't Open up App.js to start working on your app!</Text>
      <TextInputs />
      <StatusBar style="auto" />
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
