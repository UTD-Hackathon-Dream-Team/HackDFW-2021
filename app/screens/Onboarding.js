import * as React from "react";
import {
  Input,
  Center,
  NativeBaseProvider,
  Text,
  Button,
  Radio,
  Select,
  CheckIcon,
  VStack,
  FlatList,
} from "native-base";
import { getPlan } from "../util/firestore";

function ConfiguredPlan() {
  let [planName, setPlanName] = React.useState("");
  let [plan, setPlan] = React.useState({});

  async function getPlanDetails(planName) {
    getPlan(planName).then((plan) => {
      console.log(plan);
      setPlanName(planName);
      setPlan(plan);
    });
  }

  return (
    <NativeBaseProvider>
      <Text> Choose Plan: </Text>
      <VStack alignItems="center" space={4}>
        <Select
          selectedValue={planName}
          minWidth="200"
          placeholder="Choose Plan"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(newPlanName) => getPlanDetails(newPlanName)}
        >
          <Select.Item label="Diabetes" value="diabetes" />
          {/* <Select.Item label="Mental Health" value="mentalHealth" /> */}
          <Select.Item label="After Surgery" value="postOp" />
        </Select>
      </VStack>
      {plan.name && (
        <NativeBaseProvider>
          <Text fontSize="lg"> Plan Details: </Text>
          {!plan.isEndless && (
            <Text> Treatment Length: {plan.treatmentLength} Days</Text>
          )}
          <Text> Number of Daily Activities: {plan.dailyActivities}</Text>
          <Text fontSize="md"> Daily Activities: </Text>
          {plan.activities.map((activity) => (
            <Text>
              {"\u2B24"} {activity}
            </Text>
          ))}
        </NativeBaseProvider>
      )}
    </NativeBaseProvider>
  );
}

function CustomPlan() {
  return (
    <NativeBaseProvider>
      <Text> Custom Plan </Text>
    </NativeBaseProvider>
  );
}

function Onboarding({ navigation }) {
  const [planType, setPlanType] = React.useState("configured");

  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        {/* Patient Name */}
        <Text>Adventurer Name</Text>
        <Input
          size="md"
          placeholder="Name"
          w={{
            base: "70%",
            md: "20%",
          }}
        />
        {/* Adventure Plan */}
        <Text>Adventure Plan: </Text>
        {/* <Radio.Group
          value={planType}
          onChange={(newPlanType) => {
            setPlanType(newPlanType);
          }}
        >
          <Radio value="configured" my={1}>
            Pre-Configured Plan
          </Radio>
          <Radio value="custom" my={1}>
            Custom Plan
          </Radio>
        </Radio.Group> */}
        <ConfiguredPlan />

        {/* {planType === "configured" ? ConfiguredPlan() : CustomPlan()} */}
        <Button onPress={() => navigation.navigate("Home")}> Done </Button>
      </Center>
    </NativeBaseProvider>
  );
}

export default Onboarding;
