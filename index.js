// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdDBrgB1YfqP0wN1kqc93-HHdym2IfTj0",
  authDomain: "z-cube-design.firebaseapp.com",
  projectId: "z-cube-design",
  storageBucket: "z-cube-design.appspot.com",
  messagingSenderId: "934456108377",
  appId: "1:934456108377:web:249a8dea0e2a09e9f1d848",
  measurementId: "G-WB9ZDL7DVD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log('app ', app);
const analytics = getAnalytics(app);