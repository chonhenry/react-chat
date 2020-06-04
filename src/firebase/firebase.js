import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyADwMTIyJsEq7m2J6o802ONJm8EjfTSHRI",
  authDomain: "react-chat-fb551.firebaseapp.com",
  databaseURL: "https://react-chat-fb551.firebaseio.com",
  projectId: "react-chat-fb551",
  storageBucket: "react-chat-fb551.appspot.com",
  messagingSenderId: "246616076169",
  appId: "1:246616076169:web:4587b0998a559f96e63b58",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
