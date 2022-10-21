// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2K2JWLmVxUyx9nHt9nkkPqr5hEECQLog",
  authDomain: "winddelivery-256c8.firebaseapp.com",
  projectId: "winddelivery-256c8",
  storageBucket: "winddelivery-256c8.appspot.com",
  messagingSenderId: "2550292453",
  appId: "1:2550292453:web:0236b8b243d49b73bdd90c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;