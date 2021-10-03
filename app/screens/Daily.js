import * as React from "react";
import { Image, Dimensions } from "react-native";
import {
  Box,
  Text,
  NativeBaseProvider,
  Checkbox,
  Heading,
  VStack,
  Button,
} from "native-base";
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
    fontSize: 'md',
    fontWeight: 'medium',
    color: 'black',
    textAlign: 'center',
  }
}

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
      <Box bg={styles.bg} style={{flex:1}}> 
      <Heading textAlign="center" mt="3" size="lg">
        Streak: 7 Days
      </Heading>
        <Box  bg={styles.cardbg} style={styles.box}
          m="2"
          p="7"
          rounded="xl"
        >
          {plan.activities && (
            <VStack space={5} alignItems="flex-start">
              {plan.activities.map((activity) => (
                <Checkbox key={activity} value="info" colorScheme="info">
                  <Text fontSize="lg" mx="3">{activity}</Text>
                </Checkbox>
              ))}
            </VStack>
          )}
        <Button
          onPress={() => navigation.navigate("Story")}
          mt="5"
          width={190}
          size="sm"
          style={{ alignSelf: "center" }}
          colorScheme="light"
        >
          <Text fontSize="lg" color="white">Submit Daily Tasks</Text>
        </Button>
        </Box>

        <Box  bg={styles.cardbg} style={styles.box}
          m="2"
          p="7"
          rounded="xl"
        >
          <Text fontSize="md">You're currently on level 2!</Text>
          <Text fontSize="md">Help Ebony collect fruits for
          her pie! Keep finishing your daily tasks to collect more fruit and
          give them to her for gems!</Text>
          
        </Box>
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
      </Box>
    </NativeBaseProvider>
  );
}

const config = {
  dependencies: {
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
  },
};

export default Daily;
