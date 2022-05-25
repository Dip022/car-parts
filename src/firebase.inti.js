// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApA4GaC_jJ6vAc0V6RP0GngbUdD6X9xKw",
  authDomain: "car-parts-3d55c.firebaseapp.com",
  projectId: "car-parts-3d55c",
  storageBucket: "car-parts-3d55c.appspot.com",
  messagingSenderId: "228872184647",
  appId: "1:228872184647:web:536c83d7cb1d6d763d2262",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
