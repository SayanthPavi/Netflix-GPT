// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8d5bQEK5OeGoAfXpLM0e5YbjvJ3G--z8",
  authDomain: "netflixgpt-6a26d.firebaseapp.com",
  projectId: "netflixgpt-6a26d",
  storageBucket: "netflixgpt-6a26d.firebasestorage.app",
  messagingSenderId: "784048838305",
  appId: "1:784048838305:web:edeaf2f4cda1774bba02e0",
  measurementId: "G-J6D65E0XN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();


