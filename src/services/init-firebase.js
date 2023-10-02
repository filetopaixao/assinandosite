import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbkUFhqGDpC8UUFpzp4M2sDm-8zfPaeEQ",
  authDomain: "leads-c65c7.firebaseapp.com",
  projectId: "leads-c65c7",
  storageBucket: "leads-c65c7.appspot.com",
  messagingSenderId: "336142932356",
  appId: "1:336142932356:web:f95680b98c42b2359525d1",
  measurementId: "G-KRSM4ZQWVS"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);