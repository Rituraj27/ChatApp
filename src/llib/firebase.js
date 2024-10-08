import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-aa5e6.firebaseapp.com",
  projectId: "chatapp-aa5e6",
  storageBucket: "chatapp-aa5e6.appspot.com",
  messagingSenderId: "277136048971",
  appId: "1:277136048971:web:c4e8efe48a300597d31ece",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
