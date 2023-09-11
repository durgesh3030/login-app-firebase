// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKmKHRSMhgtC4UknPi5_lrzceRdmAW2Yo",
    authDomain: "login-page-1d2ff.firebaseapp.com",
    projectId: "login-page-1d2ff",
    storageBucket: "login-page-1d2ff.appspot.com",
    messagingSenderId: "362228839746",
    appId: "1:362228839746:web:ac8c704ca7a88caf6cc4db",
    measurementId: "G-CGQHGMR1Y1",
    darabaseURL: "https://console.firebase.google.com/project/login-page-1d2ff/database/login-page-1d2ff-default-rtdb/data/~2F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);