// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcluQdsSjLKbgAtObqkCDt6TXw3xXQfWw",
  authDomain: "physiobook-761a9.firebaseapp.com",
  projectId: "physiobook-761a9",
  storageBucket: "physiobook-761a9.firebasestorage.app",
  messagingSenderId: "200040781293",
  appId: "1:200040781293:web:66f37ce10af0daffd343e4",
  measurementId: "G-48VYWZ22YY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)