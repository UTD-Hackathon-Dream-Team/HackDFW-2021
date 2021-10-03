import * as React from "react";
import { Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { Text, Heading, VStack, HStack, ScrollView } from "native-base";

const styles = StyleSheet.create({
  arImage: {
    width: Dimensions.get("screen").width / 2,
    height: Dimensions.get("screen").width / 2,
    margin: 10,
  },
});

function Photo() {
  return (
    <ScrollView
      style={{
        padding: 10,
      }}
    >
      <Heading style={{ alignSelf: "center" }}>Adventurer Buddies</Heading>
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
              source={require("../TestImages/Honey.png")}
              style={styles.arImage}
            />
          </TouchableOpacity>
          <Image
            source={require("../TestImages/Honey.png")}
            style={styles.arImage}
          />
        </HStack>
        <HStack>
          <Image
            source={require("../TestImages/Honey.png")}
            style={styles.arImage}
          />
          <Image
            source={require("../TestImages/Honey.png")}
            style={styles.arImage}
          />
        </HStack>
      </VStack>
      <Heading style={{ alignSelf: "center" }}>Adventurer Journal</Heading>
    </ScrollView>
  );
}
export default Photo;
