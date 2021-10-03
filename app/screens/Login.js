import * as React from "react";
import { Image } from "react-native";
import Onboarding from "./Onboarding";
import Swiper from "react-native-swiper/src";
import { Box, Text, Button, NativeBaseProvider } from "native-base";

import book from "../assets/book.png";
import apple from "../assets/apple.png";

var styles = {
  slides: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  desc: {
    textAlign: "center",
    fontWeight: "bold",
  },
  bg: {
    linearGradient: {
      colors: ['#f3f0e8','#cfc3a6'],
      start: [.5, .5],
      end: [1, 1],
    },
  },
};

function Login({ navigation }) {
  return (
    <Box bg={styles.bg} style={{flex:1}}>
      <Swiper showsButtons loop={false}>
        <Box style={styles.slides}>
            <Image source={book} style={{width: 180, height: 200}}></Image>
            <Text m="7" fontSize="4xl" style={styles.desc}>Welcome to Health Quest!</Text>
          </Box>
          <Box style={styles.slides}>
            <Image source={apple} style={{width: 120, height: 120}}></Image>
            <Text m="7" fontSize="3xl" style={styles.desc}>
              Track daily tasks and learn fun facts on your quest to stay healthy!
            </Text>
          <Button
            onPress={() => navigation.navigate("Onboarding")}
            mt="6"
            width={190}
            size="sm"
            style={{ alignSelf: "center" }}
            colorScheme="light"
          >
            <Text fontSize="lg" color="white">Begin Adventure</Text>
          </Button>

        </Box>
      </Swiper>
    </Box>
  );
}

const config = {
  dependencies: {
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
  },
};

export default ( {navigation} ) => {
  return (
    <NativeBaseProvider config={config}>
        <Login navigation={navigation} />
    </NativeBaseProvider>
  );
};