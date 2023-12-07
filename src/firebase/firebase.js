import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCSP5ztmXL0ZNvlfztxFskP7bihgrfFFo0",
    authDomain: "solid-habits.firebaseapp.com",
    projectId: "solid-habits",
    storageBucket: "solid-habits.appspot.com",
    messagingSenderId: "693366611359",
    appId: "1:693366611359:web:9430512cc52a35315b71aa",
    measurementId: "G-QHL0GK9DPB",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();