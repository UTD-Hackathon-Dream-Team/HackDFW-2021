import * as React from 'react';
import { View, Text, Button } from 'react-native';

function Login({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Home')}/>
      </View>
    );
}

export default Login;