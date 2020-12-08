import {
  firebase,
  firestore,
  auth,
  signInWithGoogle,
  signOut,
  createUserProfileDocument,
  getUserDocument,
} from './Firebase.js';

import { collectIdsAndDocs, authErrorCodeMessage } from './utils';

export {
  firebase,
  firestore,
  auth,
  signInWithGoogle,
  signOut,
  createUserProfileDocument,
  getUserDocument,
  collectIdsAndDocs,
  authErrorCodeMessage,
};
