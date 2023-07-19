// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYUEo6o-uDO-zeqkCPn5WgfP_PGfOT8nc",
  authDomain: "social-media-prototype-ef53a.firebaseapp.com",
  projectId: "social-media-prototype-ef53a",
  storageBucket: "social-media-prototype-ef53a.appspot.com",
  messagingSenderId: "1040559324162",
  appId: "1:1040559324162:web:0d25e9103f7e29bd0ffb1b",
  measurementId: "G-G4WC1NWQS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);