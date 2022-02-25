import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const FirebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDnyqY1_7Y9HUDYmcxybTllNvUQMTi7LkE",
    authDomain: "chatapp-50ee5.firebaseapp.com",
    projectId: "chatapp-50ee5",
    storageBucket: "chatapp-50ee5.appspot.com",
    messagingSenderId: "581068680057",
    appId: "1:581068680057:web:f6a2fd81ba6d17cdd29da8",
    measurementId: "G-45XNSFHR7D"
})

const db = FirebaseApp.firestore();
const auth = firebase.auth();

export {db , auth}