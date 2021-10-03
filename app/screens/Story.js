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
import { Colors } from "react-native/Libraries/NewAppScreen";

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
  gems: {
    marginTop: 50,
    height: 250,
    width: 350,
    alignSelf: "center",
  },
  character: {
    marginTop: 50,
    height: 330,
    width: 250,
    alignSelf: "center",
    flex: 1,
    resizeMode: 'contain',
  },
};

function Story({ navigation }) {
  const [index, setIndex] = useState(0);
  const messages = [
    { text: "~ Hello partner!" },
    { text: "~ Are you ready for today's adventure?" },
    { text: "~ Choose which gem you'd like!" },
    { text: "~ Awesome. It seems that you have finished your daily task! Let's go to the forest!" },
    { text: "~ Look, that owl has apples in her basket! Let’s ask if we could take some." },
    { text: "~ Hey Mrs. Pearl, can we take some of your apples for our pie?" },
    { text: "- Sure, but you must answer this question:" },
    { text: "- What is diabetes?" },
    { text: "- a) A disease that occurs when your blood sugar is high " },
    { text: "- b) A tooth ache     " },
    { text: "- That’s right! Here’s your apples and a gem. Good Luck!    " },
    { text: "~ Thank you! Let’s go!   " },
    { text: "~ Is that Mr. Dove the deer? We can ask him for Butter and flour!" },
    { text: "~ Hi Mr. Dove, can we get some your Butter and flour for our pie?" },
    { text: "# Hey! You certainly can, but answer my question:" },
    { text: "# How many types of diabetes are there?" },
    { text: "# a) 1000" },
    { text: "# b) 2" },
    { text: "# You’re correct! Here’s the flour and butter. You also get 2 more gems. Have fun, kids!" },
    { text: "~ We will, thank you!" },
    { text: "~ Thanks for coming along on our adventure!" },
  ];

  const proceedIndex = () =>
    setIndex((prevState) => {
      if (prevState == messages.length - 1) {
        navigation.navigate("Daily Tasks");
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
          <Heading color="white">Quest: Apple Pie</Heading>
          <Text mt="20" color="white" fontWeight="medium">
            {messages[index] && messages[index].text}
          </Text>
        </Container>
      </TouchableOpacity>
      

      {messages[index] && messages[index].text.includes("gem") && (
        <Image style={styles.gems} source={require("../assets/gems.png")} />
      )}
      {messages[index] && messages[index].text.includes("-") && (
        <Image style={styles.character} source={require("../assets/owl.png")} />
      )}
      {messages[index] && messages[index].text.includes("~") && (
        <Image style={styles.avatar} source={require("../assets/bunny.png")} />
      )}
     {messages[index] && messages[index].text.includes("#") && (
        <Image style={styles.avatar} source={require("../assets/deer.png")} />
      )}
    </ImageBackground>
   
  );
}

export default Story;
