import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCwd369Akn112lxcRcxtyjIH4VID_QkooM",
  authDomain: "isda-sa-araw-cj-pesco.firebaseapp.com",
  databaseURL: "https://isda-sa-araw-cj-pesco.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//This is a named export
export { firebaseApp };

//This is default export
export default base;
