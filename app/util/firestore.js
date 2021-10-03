import Firebase from "./firebaseConfig";
const db = Firebase.firestore();

export const getPlan = async (planName) => {
  var planData = db.collection("plans").doc(planName);

  const response = await planData.get();

  if (!response.exists) console.log("No such document!");
  // console.log("Inside firestore.js: ", response.data());
  return response.data();
};

export const getPlans = async () => {
  var planData = db.collection("plans");

  const response = await planData.get();

  var plans = [];
  response.forEach((plan) => {
    plans.push(plan.id);
  });
  console.log(plans);
  // console.log("Inside firestore.js: ", response.data());
  return plans;
};
