import firebase from "firebase";

// Your web app's Firebase configuration
// Initialize Firebase
// const firebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyCpXg3zV4YAD_jVlc6MptgNTgNIhufgB2o",
//   authDomain: "alexdang-portfolio.firebaseapp.com",
//   projectId: "alexdang-portfolio",
//   storageBucket: "alexdang-portfolio.appspot.com",
//   messagingSenderId: "929538604758",
//   appId: "1:929538604758:web:66f7e409932eb3e8e15377",
//   measurementId: "G-VB64RHT3T6"
// });

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCCgvnXvkTtB3pcjXJSeYqsOD_X-JwvTKU",
  authDomain: "myportpolio-2f9bf.firebaseapp.com",
  projectId: "myportpolio-2f9bf",
  storageBucket: "myportpolio-2f9bf.appspot.com",
  messagingSenderId: "513751248086",
  appId: "1:513751248086:web:a5ffd8f91c0fae907aed77",
  measurementId: "G-QEQ4BHGMLX",
});

const db = firebaseApp.firestore();

export default db;
