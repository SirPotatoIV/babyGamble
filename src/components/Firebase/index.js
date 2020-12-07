import {
  firebase,
  firestore,
  auth,
  signInWithGoogle,
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
  signOut,
  collectIdsAndDocs,
  createUserProfileDocument,
  getUserDocument,
};
