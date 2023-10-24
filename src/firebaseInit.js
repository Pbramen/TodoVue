// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAynIAWdA7tiY0mouZN6junq8O3r6LTbxY",
  authDomain: "todo-vue-82e18.firebaseapp.com",
  projectId: "todo-vue-82e18",
  storageBucket: "todo-vue-82e18.appspot.com",
  messagingSenderId: "184313198063",
  appId: "1:184313198063:web:8d04175ff92fb2501ff21a",
  measurementId: "G-5C7SEPWGFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);