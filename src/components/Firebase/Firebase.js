import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Taken from Firebase Console
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
};

// Initialize an instance of Firebase that will be imported by other components
firebase.initializeApp(firebaseConfig);

// Export sub-apps of firebase
const firestore = firebase.firestore();
const auth = firebase.auth();

// Export apps needed for authenticaiton with Firebase
const provider = new firebase.auth.GoogleAuthProvider();
const signInWithGoogle = () => auth.signInWithPopup(provider);

export { firebase, firestore, signInWithGoogle };
