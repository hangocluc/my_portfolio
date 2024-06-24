import firebase from 'firebase';

// Your web app's Firebase configuration
// Initialize Firebase
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCpXg3zV4YAD_jVlc6MptgNTgNIhufgB2o",
  authDomain: "alexdang-portfolio.firebaseapp.com",
  projectId: "alexdang-portfolio",
  storageBucket: "alexdang-portfolio.appspot.com",
  messagingSenderId: "929538604758",
  appId: "1:929538604758:web:66f7e409932eb3e8e15377",
  measurementId: "G-VB64RHT3T6"
});

const db = firebaseApp.firestore();

export default db;