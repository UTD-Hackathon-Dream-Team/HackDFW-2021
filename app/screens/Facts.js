import * as React from "react";
import { View, Text } from "react-native";
import { Box, Center, Heading, NativeBaseProvider, VStack } from "native-base";
import { getPlan } from "../util/firestore";

var styles = {
  bg: {
    linearGradient: {
      colors: ["#d9caa0", "#c3b590"],
      start: [0, 0],
      end: [1, 0],
    },
  },
  box: {
    fontSize: "md",
    fontWeight: "medium",
    color: "black",
    textAlign: "center",
  },
};

function Facts() {
  let [plan, setPlan] = React.useState({});

  React.useEffect(() => {
    async function fetchData() {
      let response = await getPlan("Diabetes");
      setPlan(response);
    }
    fetchData();
  }, []);

  return (
    <View>
      <Heading textAlign="center" size="lg">
        Adventurer Wisdom
      </Heading>
      {plan.facts && (
        <VStack space={3} alignItems="flex-start">
          {plan.facts.map((fact) => (
            <Box
              key={fact}
              bg={styles.bg}
              style={styles.box}
              p="7"
              m="1"
              rounded="xl"
              width="300"
            >
              {fact}
            </Box>
          ))}
        </VStack>
      )}
    </View>
  );
}

const config = {
  dependencies: {
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
  },
};

export default () => {
  return (
    <NativeBaseProvider config={config}>
      <Center flex={1} px="3">
        <Facts />
      </Center>
    </NativeBaseProvider>
  );
};
