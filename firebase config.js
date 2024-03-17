// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfoYpUOToqdjfTi3S126mNpRGL47SD4ek",
    authDomain: "garmin-gepner-lab.firebaseapp.com",
    projectId: "garmin-gepner-lab",
    storageBucket: "garmin-gepner-lab.appspot.com",
    messagingSenderId: "688973196613",
    appId: "1:688973196613:web:4455400a0d77fd3889a22c",
    measurementId: "G-93FQLSNBX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);