const functions = require('firebase-functions');
const admin = require('firebase-admin');

// This initializes the app AND gets the secret keys needed to run admin functionality
admin.initializeApp(functions.config().firebase);

const firestore = admin.firestore();
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true });
  response.send('Hello from Firebase!');
});

exports.getAllGuesses = functions.https.onRequest(async (request, response) => {
  const snapshot = await firestore.collection('guesses').get();
  const guesses = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  response.json({ guesses });
});
