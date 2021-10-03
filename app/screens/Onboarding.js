import * as React from "react";
import { View } from "react-native";
import {
  Box,
  Input,
  Text,
  Button,
  Select,
  CheckIcon,
  VStack,
  NativeBaseProvider, 
} from "native-base";
import { getPlan, getPlans } from "../util/firestore";

var styles = {
  bg: {
    linearGradient: {
      colors: ['#f3f0e8','#cfc3a6'],
      start: [.5, .5],
      end: [1, 1],
    },
  }
}

function ConfiguredPlan() {
  let [plans, setPlans] = React.useState([]);
  let [planName, setPlanName] = React.useState("");
  let [plan, setPlan] = React.useState({});

  React.useEffect(() => {
    async function fetchData() {
      let response = await getPlans();
      setPlans(response);
    }
    fetchData();
  }, []);

  async function getPlanDetails(planName) {
    getPlan(planName).then((plan) => {
      setPlanName(planName);
      setPlan(plan);
    });
  }

  return (
    <Box> 
      <Text fontSize="lg" mt="7"> Choose Plan: </Text>
      <VStack alignItems="center" space={4}>
        <Select
          fontSize="lg"
          selectedValue={planName}
          minWidth="300"
          placeholder="Choose Plan"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(newPlanName) => getPlanDetails(newPlanName)}
        >
          {plans.map((plan) => (
            <Select.Item label={plan} value={plan} key={plan} />
          ))}
        </Select>
      </VStack>
      {plan.name && (
        <View>
          <Text fontSize="lg"> Plan Details: </Text>
          {!plan.isEndless && (
            <Text> Treatment Length: {plan.treatmentLength} Days</Text>
          )}
          <Text> Number of Daily Activities: {plan.dailyActivities}</Text>
          <Text fontSize="md"> Daily Activities: </Text>
          {plan.activities.map((activity) => (
            <Text key={activity}>
              {"\u2B24"} {activity}
            </Text>
          ))}
        </View>
      )}
    </Box>
  );
}

function CustomPlan() {
  return (
    <View>
      <Text> Custom Plan </Text>
    </View>
  );
}

function Onboarding({ navigation }) {
  const [planType, setPlanType] = React.useState("configured");

  return (
    <Box p="10" bg={styles.bg} style={{ flex:1 }}>
      {/* Patient Name */}
      <Text fontSize="lg">Adventurer Name:</Text>
      <Input
        minWidth="300"
        size="lg"
        placeholder="Name"
        w={{
          base: "70%",
          md: "20%",
        }}
      />
      <ConfiguredPlan />
      <Button
        colorScheme="light"
        width={150}
        size="sm"
        mt="10"
        style={{ alignSelf: "center" }}
        onPress={() => navigation.navigate("Daily Tasks")}
      >
        <Text fontSize="lg" color="white">Done</Text>
      </Button>
    </Box>
  );
}

const config = {
  dependencies: {
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
  },
};

export default ( {navigation} ) => {
  return (
    <NativeBaseProvider config={config}>
        <Onboarding navigation={navigation} />
    </NativeBaseProvider>
  );
};

