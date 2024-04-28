// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpXK-yWcuHT9DudjjBiXGLxIzgcvCZuik",
  authDomain: "assignment-10-4f3d0.firebaseapp.com",
  projectId: "assignment-10-4f3d0",
  storageBucket: "assignment-10-4f3d0.appspot.com",
  messagingSenderId: "273916856675",
  appId: "1:273916856675:web:8b04b23cc50b4befb26b56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;