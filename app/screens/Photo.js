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
  gemsImage: {
    alignSelf: "center",
    width: 300,
    height: 200,
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
      <Heading style={{ alignSelf: "center" }}>Gem Collection</Heading>
      <Image source={require("../assets/gems.png")} style={styles.gemsImage} />
      <Text style={{ alignSelf: "center" }}>5 more to the next level!</Text>
      <Heading style={{ alignSelf: "center" }}>Adventurer Journal</Heading>
    </ScrollView>
  );
}
export default Photo;
