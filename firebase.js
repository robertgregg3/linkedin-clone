import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDhhwNgPC_dWrnhIjUlxlhavhvhxa_jgOU",
  authDomain: "linkedin-clone-rob.firebaseapp.com",
  projectId: "linkedin-clone-rob",
  storageBucket: "linkedin-clone-rob.appspot.com",
  messagingSenderId: "168108481703",
  appId: "1:168108481703:web:4a2968fbb6388bc8d88f82",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
export default firebaseApp;
