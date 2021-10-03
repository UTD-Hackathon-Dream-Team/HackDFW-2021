import * as React from "react";
import { View, Image, Dimensions } from "react-native";
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
  bg: {
    linearGradient: {
      colors: ['#d9caa0', '#c3b590'],
      start: [0, 0],
      end: [1, 0],
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
      <View>
        <Heading textAlign="center" size="md" mt="3">
          Streak: 7 Days
        </Heading>
        <Box  bg={styles.bg} style={styles.box}
          m="2"
          p="7"
          rounded="xl"
        >
          {plan.activities && (
            <VStack space={5} alignItems="flex-start">
              {plan.activities.map((activity) => (
                <Checkbox key={activity} value="info" colorScheme="info">
                  {activity}
                </Checkbox>
              ))}
            </VStack>
          )}
        <Button
          onPress={() => navigation.navigate("Story")}
          mt="6"
          width={190}
          size="sm"
          style={{ alignSelf: "center" }}
          colorScheme="light"
        >
          <Text fontSize="lg" color="white">Submit Daily Tasks</Text>
        </Button>
        </Box>

        <Box  bg={styles.bg} style={styles.box}
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
