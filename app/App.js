import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from "./screens/Login";
import Daily from "./screens/Daily";
import Facts from "./screens/Facts";
import Photo from "./screens/Photo";
import Onboarding from "./screens/Onboarding";
import Story from "./screens/Story";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Daily" component={Daily} />
      <Tab.Screen name="Photo" component={Photo} />
      <Tab.Screen name="Facts" component={Facts} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LogIn" component={Login} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Tab.Screen name="Story" component={Story} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}