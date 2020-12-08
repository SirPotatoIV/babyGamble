import {
  firebase,
  firestore,
  auth,
  googleAuthProvider,
  signOut,
  createUserProfileDocument,
  getUserDocument,
} from './Firebase.js';

import { collectIdsAndDocs, createErrorMessage } from './utils';

export {
  firebase,
  firestore,
  auth,
  googleAuthProvider,
  signOut,
  createUserProfileDocument,
  getUserDocument,
  collectIdsAndDocs,
  createErrorMessage,
};
