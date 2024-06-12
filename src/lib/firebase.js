import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: import.meta.env.VITE_API_KEY,  
    authDomain: "chatpulse-24c4f.firebaseapp.com",
    projectId: "chatpulse-24c4f",
    storageBucket: "chatpulse-24c4f.appspot.com",
    messagingSenderId: "237759067181",
    appId: "1:237759067181:web:bf27b7e59f1c8886cdf4a4"
  };
  

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()