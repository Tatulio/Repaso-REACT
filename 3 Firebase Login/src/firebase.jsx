import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDyKTTnL1pJCtiJMEwT9pxY5bZn_vUFJXo",
    authDomain: "fir-login-4a561.firebaseapp.com",
    projectId: "fir-login-4a561",
    storageBucket: "fir-login-4a561.appspot.com",
    messagingSenderId: "414433013922",
    appId: "1:414433013922:web:6ac0bbaa8679ff0c6967fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export { app, auth };