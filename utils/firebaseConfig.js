// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM-fMNwS4vnMpJrUzIIHkH6gPUgzPeE3I",
  authDomain: "netflixgenerativept.firebaseapp.com",
  projectId: "netflixgenerativept",
  storageBucket: "netflixgenerativept.firebasestorage.app",
  messagingSenderId: "80991231061",
  appId: "1:80991231061:web:fe104df7b437aeb3e9c8dc",
  measurementId: "G-XPM8C25629",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export { auth };
