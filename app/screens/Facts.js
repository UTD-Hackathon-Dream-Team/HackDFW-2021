import * as React from "react";
import { View } from "react-native";
import { Box,  Text, Center, Heading, NativeBaseProvider, VStack } from "native-base";
import { getPlan } from "../util/firestore";

var styles = {
  cardbg: {
    linearGradient: {
      colors: ['#d9caa0', '#c3b590'],
      start: [0, 0],
      end: [1, 0],
    },
  },
  bg: {
    linearGradient: {
      colors: ['#f3f0e8','#cfc3a6'],
      start: [.5, .5],
      end: [1, 1],
    },
  },
  box: {
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
    <Box bg={styles.bg} style={{flex:1}}> 
      <Heading textAlign="center" mt="3" size="lg">
        Adventurer Wisdom
      </Heading>
      {plan.facts && (
        <VStack mt="5" alignSelf="center" space={2} alignItems="flex-start">
          {plan.facts.map((fact) => (
            <Box
              key={fact}
              bg={styles.cardbg}
              style={styles.box}
              p="7"
              m="1"
              rounded="xl"
              width="300"
            >
              <Text fontSize="lg">{fact}</Text>
            </Box>
          ))}
        </VStack>
      )}
    </Box>
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
        <Facts />
    </NativeBaseProvider>
  );
};
