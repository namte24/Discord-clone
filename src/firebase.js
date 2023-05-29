import firebase from "firebase/compat/app";
import "firebase/compat/firestore"; // Example for Firestore
import "firebase/compat/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL99VKqDvLH8L5MMEa3FdoYx0xutG82Tw",
  authDomain: "discord-8dffd.firebaseapp.com",
  projectId: "discord-8dffd",
  storageBucket: "discord-8dffd.appspot.com",
  messagingSenderId: "390759075704",
  appId: "1:390759075704:web:cff14e13917000881d028d",
  measurementId: "G-GFZFR54BCP",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
