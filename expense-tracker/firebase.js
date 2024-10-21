// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7KOPzpv8CQxOpizNAbllwm2YjBvrKkxc",
  authDomain: "expense-tracker-dce0a.firebaseapp.com",
  projectId: "expense-tracker-dce0a",
  storageBucket: "expense-tracker-dce0a.appspot.com",
  messagingSenderId: "1083390162568",
  appId: "1:1083390162568:web:9c9168b9e5a4b9c5a7113d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };