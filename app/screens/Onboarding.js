import * as React from "react";
import { View, Text, Button } from "react-native";

function Onboarding({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login Screen</Text>
      <Button title="Done" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

export default Onboarding;
