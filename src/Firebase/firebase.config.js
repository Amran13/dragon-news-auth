// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu2lDhawWkvB6ODXQHpvvdvnV98J2qVM8",
  authDomain: "dragon-news-auth-6ad0f.firebaseapp.com",
  projectId: "dragon-news-auth-6ad0f",
  storageBucket: "dragon-news-auth-6ad0f.appspot.com",
  messagingSenderId: "486048521557",
  appId: "1:486048521557:web:75ad48524d3566a24e23dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;