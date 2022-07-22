// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";


// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyC_LsjTg_3JQcOWxwoCM-T3EkdSDfhWIDM",
        authDomain: "next-crud-7a9ee.firebaseapp.com",
        projectId: "next-crud-7a9ee",
        storageBucket: "next-crud-7a9ee.appspot.com",
         messagingSenderId: "480283715972",
        appId: "1:480283715972:web:abbb37bc06e052593215d1"
    });
}

export default firebase;

