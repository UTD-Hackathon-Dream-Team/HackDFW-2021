import Firebase from "./firebaseConfig";
const db = Firebase.firestore();

export const getPlan = async (planName) => {
  var planData = db.collection("plans").doc(planName);

  const response = await planData.get();

  if (!response.exists) console.log("No such document!");
  // console.log("Inside firestore.js: ", response.data());
  return response.data();
};
