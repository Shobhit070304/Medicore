import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnQKRmMRbkpBNZn641XrYUY0rd_VUBaK4",
  authDomain: "medicore-6103b.firebaseapp.com",
  projectId: "medicore-6103b",
  storageBucket: "medicore-6103b.firebasestorage.app",
  messagingSenderId: "967863134047",
  appId: "1:967863134047:web:4264c1dcc4879434f238ea",
  measurementId: "G-8NVB659P9Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup };
