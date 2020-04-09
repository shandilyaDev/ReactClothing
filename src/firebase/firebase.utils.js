import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyADOCuFQSdFLNIWqFiJfBqVYqCfJVJ1POU",
  authDomain: "react-shop-c397e.firebaseapp.com",
  databaseURL: "https://react-shop-c397e.firebaseio.com",
  projectId: "react-shop-c397e",
  storageBucket: "react-shop-c397e.appspot.com",
  messagingSenderId: "916363343979",
  appId: "1:916363343979:web:300ca66a49d19c4675592e",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
