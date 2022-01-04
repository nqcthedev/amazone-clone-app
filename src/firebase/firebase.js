import firebase from "firebase";
 const firebaseConfig = {
  apiKey: "AIzaSyBJGSb6yj_eM8ZG77NNQOtKER_DsBgayZM",
  authDomain: "e-app-84da4.firebaseapp.com",
  databaseURL: "https://e-app-84da4-default-rtdb.firebaseio.com",
  projectId: "e-app-84da4",
  storageBucket: "e-app-84da4.appspot.com",
  messagingSenderId: "835281900244",
  appId: "1:835281900244:web:157e86ccba0249babe6141",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };


