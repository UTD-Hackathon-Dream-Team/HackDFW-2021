import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { Button, Text } from "native-base";
import { auth } from "firebase";

const TextInputs = ({ navigation }) => {
  const [username, onChangeU] = React.useState(null);
  const [password, onChangeP] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeU}
        value={username}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeP}
        value={password}
        placeholder="Password"
      />
      <Button
        onPress={async () => {
          try {
            if (username !== "" && password !== "") {
              await auth.signInWithEmailAndPassword(username, password);
            }
          } catch (error) {
            try {
              let res = await auth.createUserWithEmailAndPassword(
                username,
                password
              );
            } catch (error2) {}
            navigation.navigate("Onboarding");
          }
        }}
        mt="6"
        width={190}
        size="lg"
        style={{ alignSelf: "center" }}
        colorScheme="light"
      >
        Begin Adventure
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputs;
