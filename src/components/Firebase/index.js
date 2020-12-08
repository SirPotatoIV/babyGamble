import {
  firebase,
  firestore,
  auth,
  signInWithGoogle,
  signOut,
  createUserProfileDocument,
  getUserDocument,
} from './Firebase.js';

import { collectIdsAndDocs, createErrorMessage } from './utils';

export {
  firebase,
  firestore,
  auth,
  signInWithGoogle,
  signOut,
  createUserProfileDocument,
  getUserDocument,
  collectIdsAndDocs,
  createErrorMessage,
};
