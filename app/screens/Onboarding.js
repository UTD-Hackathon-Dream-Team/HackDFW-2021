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
} from "native-base";

function ConfiguredPlan() {
  let [plan, setPlan] = React.useState("");

  return (
    <NativeBaseProvider>
      <Text> Choose Plan: </Text>
      <VStack alignItems="center" space={4}>
        <Select
          selectedValue={plan}
          minWidth="200"
          placeholder="Choose Plan"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(newPlan) => setPlan(newPlan)}
        >
          <Select.Item label="Diabetes" value="diabetes" />
          <Select.Item label="Mental Health" value="mentalHealth" />
          <Select.Item label="After Surgery" value="postOp" />
        </Select>
      </VStack>
    </NativeBaseProvider>
  );
}

function CustomPlan() {
  return <Text> Custom Plan </Text>;
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
        <Radio.Group
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
        </Radio.Group>

        {planType === "configured" ? ConfiguredPlan() : CustomPlan()}
        <Button onPress={() => navigation.navigate("Home")}> Done </Button>
      </Center>
    </NativeBaseProvider>
  );
}

export default Onboarding;
