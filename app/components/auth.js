import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import Firebase from './firebase.js'

const TextInputs = () => {
  const [username, onChangeU] = React.useState(null);
  const [password, onChangeP] = React.useState(null);



  const auth = Firebase.auth();

  

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
        onPress={async () => {
            alert('username: ' + username);
            try {
              if (username !== '' && password !== '') {
                await auth.signInWithEmailAndPassword(username, password);
              }
            } catch (error) {
              alert("Account not found, creating account");
              try {
                let res = await auth.createUserWithEmailAndPassword(username, password); 
              }
              catch(error2){
                alert("account not able to be created"); 
              }
              alert("account: " + username + " " + password + " has been created");
            }; 
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