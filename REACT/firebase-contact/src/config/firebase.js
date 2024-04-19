// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB17FC3TUTHUBFvkGdSOqCJfsELuw4uRjI",
  authDomain: "fir-contact-431a5.firebaseapp.com",
  projectId: "fir-contact-431a5",
  storageBucket: "fir-contact-431a5.appspot.com",
  messagingSenderId: "118170229611",
  appId: "1:118170229611:web:052ba5a14b8d9576d48a2e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);