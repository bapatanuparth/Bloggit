// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "bloggit-c484b.firebaseapp.com",
  projectId: "bloggit-c484b",
  storageBucket: "bloggit-c484b.appspot.com",
  messagingSenderId: "758691747275",
  appId: "1:758691747275:web:746db591f3597db8f6d24e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
