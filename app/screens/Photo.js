import * as React from "react";
import { Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { Box, Text, Heading, VStack, HStack, ScrollView, NativeBaseProvider } from "native-base";

const styles = StyleSheet.create({
  arImage: {
    width: Dimensions.get("screen").width / 2,
    height: Dimensions.get("screen").width / 2,
    margin: 10,
  },
  gemsImage: {
    alignSelf: "center",
    width: 300,
    height: 200,
  },
});
var styles1 = {
  bg: {
    linearGradient: {
      colors: ['#f3f0e8','#cfc3a6'],
      start: [.5, .5],
      end: [1, 1],
    },
  }
}

function Photo() {
  return (
    <Box bg={styles1.bg} style={{flex:1}}> 
      <ScrollView mx="2"    >
        <Heading textAlign="center" mt="3" size="lg">
          Adventurer Buddies
        </Heading>
        <VStack style={{ alignSelf: "center" }}>
          <HStack>
            <TouchableOpacity
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://api.echo3d.co/webar?key=quiet-pond-7565&entry=6b674fdd-db79-409a-8afc-86f4a0ea5f60"
                )
              }
            >
              <Image
                source={require("../assets/fox.jpg")}
                style={styles.arImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://api.echo3d.co/webar?key=quiet-pond-7565&entry=fbd05692-d034-4cd7-8198-4f50d36bb8b5"
                )
              }
            >
            <Image
              source={require("../assets/owl.jpg")}
              style={styles.arImage}
            />
            </TouchableOpacity>
          </HStack>
          <HStack>
          <TouchableOpacity
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://api.echo3d.co/webar?key=quiet-pond-7565&entry=872571e6-658b-4f53-8abb-127a2bd45c4f"
                )
              }
            >
            <Image
              source={require("../TestImages/Honey.png")} // real one 
              style={styles.arImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://api.echo3d.co/webar?key=quiet-pond-7565&entry=8bb07daf-e06f-4b68-9984-18c45e5089a4"
                )
              }
            >
            <Image
              source={require("../assets/parrot.jpg")}
              style={styles.arImage}
            />
          </TouchableOpacity>
          </HStack>
        </VStack>
        <Heading mt="7" style={{ alignSelf: "center" }}>Gem Collection</Heading>
        <Image source={require("../assets/gems.png")} style={styles.gemsImage} />
        <Text mt="3" style={{ alignSelf: "center" }}>5 more gems until next level!</Text>
        <Heading mt="7" style={{ alignSelf: "center" }}>Adventurer Journal</Heading>
      </ScrollView>
    </Box>
  );
}

const config = {
  dependencies: {
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
  },
};

export default () => {
  return (
    <NativeBaseProvider config={config}>
        <Photo />
    </NativeBaseProvider>
  );
};
