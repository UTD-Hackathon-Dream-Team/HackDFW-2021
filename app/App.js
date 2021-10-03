import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import TextInputs from './components/auth'; 
import * as WebBrowser from 'expo-web-browser';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Don't Open up App.js to start working on your app!</Text>
      <TextInputs />
      <StatusBar style="auto" />
      <Button
        title="Redeem Gems"
        transparent 
        onPress={()=>
          WebBrowser.openBrowserAsync(
            "https://api.echo3d.co/webar?key=quiet-pond-7565&entry=6b674fdd-db79-409a-8afc-86f4a0ea5f60"
          )    
        }
      >
      </Button>
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
