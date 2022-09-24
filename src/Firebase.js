import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8FcAcbUnGZxSlGmX9J12CYNii_2MuycM",
  authDomain: "clone-e0e05.firebaseapp.com",
  projectId: "clone-e0e05",
  storageBucket: "clone-e0e05.appspot.com",
  messagingSenderId: "1093740703762",
  appId: "1:1093740703762:web:df3e5dce0ad5fb71aba8cb",
  measurementId: "G-PYQBDWJJZ1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
