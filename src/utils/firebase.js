// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5zERMFISoi8-E1K4Vp9GL8OF2L_yUxVY",
  authDomain: "movie-mania-gpt-ea78e.firebaseapp.com",
  projectId: "movie-mania-gpt-ea78e",
  storageBucket: "movie-mania-gpt-ea78e.appspot.com",
  messagingSenderId: "768355045497",
  appId: "1:768355045497:web:5238f4da5b73ed172a84a8",
  measurementId: "G-2J32HN1W7S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();