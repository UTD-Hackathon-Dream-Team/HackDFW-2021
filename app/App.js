import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeBaseProvider } from "native-base";
import Login from "./screens/Login";
import Daily from "./screens/Daily";
import Facts from "./screens/Facts";
import Photo from "./screens/Photo";
import Onboarding from "./screens/Onboarding";
import Story from "./screens/Story";
import Header from "./components/Header";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Warning: ..."]);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Daily"
        component={Daily}
        options={{ headerRight: (props) => <Header {...props} /> }}
      />
      <Tab.Screen name="Photo" component={Photo} />
      <Tab.Screen name="Facts" component={Facts} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="LogIn" component={Login} />
          <Stack.Screen name="Story" component={Story} />
          <Stack.Screen name="Onboarding" component={Onboarding} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
