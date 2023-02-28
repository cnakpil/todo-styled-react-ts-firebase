// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyAD2ith99n4T4bu28cYgOwDknwvG1CEI0M",

    authDomain: "todo-app-2b97f.firebaseapp.com",

    projectId: "todo-app-2b97f",

    storageBucket: "todo-app-2b97f.appspot.com",

    messagingSenderId: "97341461451",

    appId: "1:97341461451:web:d3db6f5a345d062bd71c4e"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export default app;