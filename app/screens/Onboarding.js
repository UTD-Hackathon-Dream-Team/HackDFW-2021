import * as React from "react";
import {
  Input,
  Center,
  NativeBaseProvider,
  Text,
  Button,
  Radio,
} from "native-base";

function Onboarding({ navigation }) {
  const [plan, setPlan] = React.useState("configured");

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
          value={plan}
          onChange={(newPlan) => {
            setPlan(newPlan);
          }}
        >
          <Radio value="configured" my={1}>
            Pre-Configured Plan
          </Radio>
          <Radio value="custom" my={1}>
            Custom Plan
          </Radio>
        </Radio.Group>

        {plan === "configured" ? (
          <Text> Configured Plan </Text>
        ) : (
          <Text> Custom Plan </Text>
        )}
        <Button onPress={() => navigation.navigate("Home")}> Done </Button>
      </Center>
    </NativeBaseProvider>
  );
}

export default Onboarding;
