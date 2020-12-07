import {
  firebase,
  firestore,
  auth,
  signInWithGoogle,
  signInWithEmail,
  signOut,
  createUserProfileDocument,
  getUserDocument,
} from './Firebase.js';

import { collectIdsAndDocs } from './utils';

export {
  firebase,
  firestore,
  auth,
  signInWithGoogle,
  signInWithEmail,
  signOut,
  collectIdsAndDocs,
  createUserProfileDocument,
  getUserDocument,
};
