import * as React from "react";
import { View, Text, Button } from "react-native";
import Onboarding from "./Onboarding";

function Login({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Onboarding")}
      />
    </View>
  );
}

export default Login;