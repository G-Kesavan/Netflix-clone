import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB3pmOeNP6I-sfoT9dd4Pc7FZfOQ7UIMh0",
    authDomain: "project-netflix-copy.firebaseapp.com",
    projectId: "project-netflix-copy",
    storageBucket: "project-netflix-copy.firebasestorage.app",
    messagingSenderId: "927177263064",
    appId: "1:927177263064:web:083bb9e29b5d2b130ed4ad"
  };

const app = initializeApp(firebaseConfig)
const auth = getAuth();
const db = getFirestore()

export {app,auth,db}