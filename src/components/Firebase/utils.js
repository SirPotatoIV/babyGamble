export const collectIdsAndDocs = (doc) => {
  return { id: doc.id, ...doc.data() };
};

// Firebase returns a full error message, but I wanted to include my own interruptations of the error.
export const createErrorMessage = (errorCode) => {
  let errorMessage = '';
  switch (errorCode) {
    case 'auth/user-not-found':
      errorMessage = 'An account does not exist with this email address.';
      break;
    case 'auth/wrong-password':
      errorMessage = 'The password you entered is incorrect.';
      break;
    case 'auth/email-already-in-use':
      errorMessage = 'The e-mail address you entered is already registered.';
      break;
    case 'auth/invalid-email':
      errorMessage =
        'The e-mail address you entered is not formatted correctly.';
      break;
    default:
      errorMessage =
        'Sign in/Sign Up is currently not working. Please try again later.';
      break;
  }

  return errorMessage;
};
