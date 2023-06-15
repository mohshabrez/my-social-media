
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyC3Gj5XQmD42ZuJ0VtTa77o2K2mRmdGB7A",
  authDomain: "socialio-34a79.firebaseapp.com",
  projectId: "socialio-34a79",
  storageBucket: "socialio-34a79.appspot.com",
  messagingSenderId: "30629656320",
  appId: "1:30629656320:web:7f24d987b8a65e3cd9e5e5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const storage =  getStorage();

export const db = getFirestore(app)