// Import the functions you need from the SDKs you need
import { firebase } from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF77M21-I10zoey5fXQj0DHkQkbwqsTEc",
  authDomain: "reactnativefirebase-b6887.firebaseapp.com",
  projectId: "reactnativefirebase-b6887",
  storageBucket: "reactnativefirebase-b6887.appspot.com",
  messagingSenderId: "486468951403",
  appId: "1:486468951403:web:4f85412a1f22fa45a0402e"
};

// Initialize Firebase
let app;
if (firebase.apps.length == 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}
const auth = firebase.auth()
export {auth};