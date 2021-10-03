import * as React from "react";
import { View, Text, Button, Image } from "react-native";
import Onboarding from "./Onboarding";
import Swiper from "react-native-swiper/src";

import book from "../assets/book.png";

var styles = {
  slides: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  desc: {
    textAlign: "center",
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  icon: {
    width: 350,
    height: 400,
  },
};

function Login({ navigation }) {
  return (
    <Swiper showsButtons loop={false}>
      <View style={styles.slides}>
        <Image source={book} style={styles.icon}></Image>
        <Text style={styles.desc}>Welcome to Health Quest!</Text>
      </View>
      <View style={styles.slides}>
        <Image source={book} style={styles.icon}></Image>
        <Text style={styles.desc}>
          Track daily tasks and learn fun facts on your quest to stay healthy!
        </Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Onboarding")}
        />
      </View>
    </Swiper>
  );
}

export default Login;
