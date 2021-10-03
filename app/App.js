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
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { LogBox, Text } from "react-native";

LogBox.ignoreLogs(["Warning: ..."]);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Daily Tasks"
        component={Daily}
        options={{
          headerRight: (props) => <Header {...props} />,
          headerLeft: () => <Text style={{ marginLeft: 8 }}>Level 2</Text>,
          tabBarIcon: () => (
            <FontAwesome5 name="calendar-check" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Album"
        component={Photo}
        options={{
          headerRight: (props) => <Header {...props} />,
          headerLeft: (props) => <Text style={{ marginLeft: 8 }}>Level 2</Text>,
          tabBarIcon: () => (
            <Fontisto name="photograph" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Facts"
        component={Facts}
        options={{
          headerRight: (props) => <Header {...props} />,
          headerLeft: (props) => <Text style={{ marginLeft: 8 }}>Level 2</Text>,
          tabBarIcon: () => <FontAwesome name="book" size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
}

function HomeDaily() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Daily Tasks"
        component={HomeStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Story" component={Story} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LogIn" component={Login} />
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen
            name="Daily Tasks"
            component={HomeDaily}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
