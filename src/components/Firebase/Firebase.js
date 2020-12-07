import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { authErrorCodeMessage } from './utils';

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
try {
  firebase.initializeApp(firebaseConfig);
} catch (error) {
  console.log(error);
}

// Export sub-apps of firebase
const firestore = firebase.firestore();
const auth = firebase.auth();

// Export apps needed for authenticaiton with Firebase
const provider = new firebase.auth.GoogleAuthProvider();
const signInWithGoogle = () => auth.signInWithPopup(provider);
const signInWithEmail = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.log('an error occurred logging in with email.', error.message);
    return authErrorCodeMessage(error.code);
  }
};

const signOut = () => auth.signOut();

const createUserProfileDocument = async (user, additionalData) => {
  // if no user, exit
  if (!user) return;
  // Get reference to the user in the database, assuming they do exist
  const userRef = firestore.doc(`users/${user.uid}`);
  // Go and fetch the document from the location.
  const snapshot = await userRef.get();
  // if a snapshot does not exist (meaning the user profile does not exist)
  if (!snapshot.exists) {
    const createdAt = new Date();
    const { displayName, email } = user;
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error('Error creating user', error);
    }
    // When a user profile has to be created, also get the user document and return it.
  }

  return getUserDocument(user.uid);
};

const getUserDocument = async (uid) => {
  // if no uid, exit
  if (!uid) {
    return null;
  }
  try {
    const userDocument = await firestore.collection('users').doc(uid).get();
    return { uid, ...userDocument.data() };
  } catch (error) {
    console.error('Error fetching the user', error.message);
  }
};

export {
  firebase,
  firestore,
  auth,
  signInWithGoogle,
  signInWithEmail,
  signOut,
  createUserProfileDocument,
  getUserDocument,
};
