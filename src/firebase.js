// src/firebase.js
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyDnKTyg2xVHcDfkTq-34j3Hv7VbwKEcPIU",
//     authDomain: "code-pen-e771b.firebaseapp.com",
//     projectId: "code-pen-e771b",
//     storageBucket: "code-pen-e771b.appspot.com",
//     messagingSenderId: "187223897469",
//     appId: "1:187223897469:web:4ad0a12d04626f0de0c814"
//   URL  : //     https://code-pen-e771b-default-rtdb.asia-southeast1.firebasedatabase.app/
// :
// null
  // };
  

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const googleAuthProvider = new GoogleAuthProvider();

// export { app, auth, GoogleAuthProvider };








// // src/firebase.js
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// // Your Firebase configuration object

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Auth and Google Provider
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();

// export { app, auth, googleProvider };












import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Replace these with your Firebase project credentials
const firebaseConfig = {
  apiKey: "AIzaSyDnKTyg2xVHcDfkTq-34j3Hv7VbwKEcPIU",
  authDomain: "code-pen-e771b.firebaseapp.com",
  projectId: "code-pen-e771b",
  storageBucket: "code-pen-e771b.appspot.com",
  messagingSenderId: "187223897469",
  appId: "1:187223897469:web:4ad0a12d04626f0de0c814"
};


// Initialize Firebase
  const app =  initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(); // Initialize GoogleAuthProvider

// export { auth, provider };

export { auth, provider, signInWithPopup };