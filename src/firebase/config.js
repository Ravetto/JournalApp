// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMhcJaLgz1UaYzGydbS-6V-iy2IvZnq68",
  authDomain: "journalapp-8dd50.firebaseapp.com",
  projectId: "journalapp-8dd50",
  storageBucket: "journalapp-8dd50.firebasestorage.app",
  messagingSenderId: "113996451599",
  appId: "1:113996451599:web:d2b5fcbe94318370fcf87a"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB   = getFirestore(FirebaseApp)
