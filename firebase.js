import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAG9SO4zXdm7B0sL1YyeE1W6FyunKZupfE",
  authDomain: "clone-jward.firebaseapp.com",
  databaseURL: "https://clone-jward.firebaseapp.com",
  projectId: "clone-jward",
  storageBucket: "clone-jward.appspot.com",
  messagingSenderId: "436867331101",
  appId: "1:436867331101:web:30a7cb72fc9782848082f4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
