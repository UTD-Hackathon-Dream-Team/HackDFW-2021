import * as React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import {
  Box,
  NativeBaseProvider,
  Checkbox,
  Heading,
  VStack,
  Button,
} from "native-base";
import { getPlan } from "../util/firestore";

function Daily({ navigation }) {
  let [plan, setPlan] = React.useState({});

  React.useEffect(() => {
    async function fetchData() {
      let response = await getPlan("Diabetes");
      setPlan(response);
    }
    fetchData();
  }, []);

  return (
    <NativeBaseProvider config={config}>
      <View>
        <Heading textAlign="center" size="md" mt="3">
          Streak: 7 Days
        </Heading>
        <Box
          bg={{
            linearGradient: {
              colors: ["#d9caa0", "#c3b590"],
              start: [0, 0],
              end: [1, 0],
            },
          }}
          m="2"
          p="5"
          rounded="xl"
          _text={{
            fontSize: "md",
            fontWeight: "medium",
            color: "black",
            textAlign: "center",
          }}
        >
          {plan.activities && (
            <VStack space={3} alignItems="flex-start">
              {plan.activities.map((activity) => (
                <Checkbox key={activity} value="info" colorScheme="info">
                  {activity}
                </Checkbox>
              ))}
            </VStack>
          )}
        </Box>
        <Button
          onPress={() => navigation.navigate("Story")}
          width={175}
          style={{ alignSelf: "center" }}
        >
          Submit Daily Tasks
        </Button>
        <Text style={{ marginTop: 30, alignSelf: "center" }}>
          You're currently on level 2. You're helping Ebony collect fruits for
          her pie. Keep finishing your daily tasks to collect more fruit and
          give them to her for gems!
        </Text>
        <Image
          style={{
            height: 250,
            width: 170,
            position: "absolute",
            alignSelf: "center",
            top: Dimensions.get("screen").height / 2,
          }}
          source={require("../assets/bunny.png")}
        />
      </View>
    </NativeBaseProvider>
  );
}

const config = {
  dependencies: {
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
  },
};

export default Daily;
