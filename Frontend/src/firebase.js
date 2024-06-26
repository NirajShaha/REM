// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rem-project-5a693.firebaseapp.com",
  projectId: "rem-project-5a693",
  storageBucket: "rem-project-5a693.appspot.com",
  messagingSenderId: "952037545172",
  appId: "1:952037545172:web:a34a58e4ca0518571fd741"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);