import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkHJMqsuFoj1u1bOZRYvkuS7P331pNb18",
  authDomain: "ecommerce-joyeriaian.firebaseapp.com",
  projectId: "ecommerce-joyeriaian",
  storageBucket: "ecommerce-joyeriaian.firebasestorage.app",
  messagingSenderId: "126150611254",
  appId: "1:126150611254:web:cfd2de72824f86bc27e397"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db 