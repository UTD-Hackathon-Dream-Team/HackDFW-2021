import React, { useState } from "react";
import {
  ImageBackground,
  Button,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { Container, Text, Heading, Box } from "native-base";

const styles = {
  background: {
    resizeMode: "cover",
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
  panel: {
    backgroundColor: "#997208",
    borderWidth: 3,
    borderColor: "#614804",
    borderRadius: 15,
    padding: 15,
    alignSelf: "center",
    marginTop: 50,
  },
  avatar: {
    height: 250,
    width: 170,
    position: "absolute",
    margin: 16,
    alignSelf: "center",
    bottom: Dimensions.get("screen").height / 7,
  },
};

function Story({ navigation }) {
  const [index, setIndex] = useState(0);
  const messages = [
    { text: "hello" },
    { text: "sir how r u doing dis is longer" },
  ];

  const proceedIndex = () =>
    setIndex((prevState) => {
      if (prevState == messages.length - 1) {
        navigation.navigate("Home");
        return 0;
      } else {
        return prevState + 1;
      }
    });

  return (
    <ImageBackground
      source={require("../assets/forest.jpg")}
      style={styles.background}
    >
      <TouchableOpacity onPress={proceedIndex}>
        <Container style={styles.panel}>
          <Heading color="white">Ebony</Heading>
          <Text mt="3" color="white" fontWeight="medium">
            {messages[index] && messages[index].text}
          </Text>
        </Container>
      </TouchableOpacity>
      <Image style={styles.avatar} source={require("../assets/bunny.png")} />
    </ImageBackground>
  );
}

export default Story;
