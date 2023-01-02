import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5onPt4vuodkVxEJkwB2cnISAF6qc5gk8",
  authDomain: "instagramclone-f9b4e.firebaseapp.com",
  projectId: "instagramclone-f9b4e",
  storageBucket: "instagramclone-f9b4e.appspot.com",
  messagingSenderId: "476428817572",
  appId: "1:476428817572:web:2b143f3122fc91194ac231",
  measurementId: "G-E1DTNE1K8X"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    // posts : firestore.collection('posts'),
    // comments : firestore.collection('comments'),
     getTimeStamp : firebase.firestore.FieldValue.serverTimestamp,

}

export const storage = firebase.storage()

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);