import * as React from "react";
import { View } from "react-native";
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
import { getPlan, getPlans } from "../util/firestore";

function ConfiguredPlan() {
  let [plans, setPlans] = React.useState([]);
  let [planName, setPlanName] = React.useState("");
  let [plan, setPlan] = React.useState({});

  React.useEffect(() => {
    getPlans().then((plans) => {
      console.log(plans);
      setPlans(plans);
    });
  }, []);

  async function getPlanDetails(planName) {
    getPlan(planName).then((plan) => {
      setPlanName(planName);
      setPlan(plan);
      console.log(plan);
    });
  }

  return (
    <View>
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
    </View>
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
    <View style={{ margin: 50 }}>
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
      {/* <Text>Adventure Plan: </Text> */}
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
      <Button
        style={{ margin: 40 }}
        onPress={() => navigation.navigate("Home")}
      >
        {" "}
        Done{" "}
      </Button>
    </View>
  );
}

export default Onboarding;
