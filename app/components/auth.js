import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";

const TextInputs = () => {
  const [username, onChangeU] = React.useState(null);
  const [password, onChangeP] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeU}
        value={username}
        placeholder="username"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeP}
        value={password}
        placeholder="password"
      />
      <Button
        onPress={() => {
            alert('username: ' + username);
        }}
        title="Login"
        />
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