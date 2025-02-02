
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA5zERMFISoi8-E1K4Vp9GL8OF2L_yUxVY",
  authDomain: "movie-mania-gpt-ea78e.firebaseapp.com",
  projectId: "movie-mania-gpt-ea78e",
  storageBucket: "movie-mania-gpt-ea78e.firebasestorage.app",
  messagingSenderId: "768355045497",
  appId: "1:768355045497:web:5238f4da5b73ed172a84a8",
  measurementId: "G-2J32HN1W7S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);