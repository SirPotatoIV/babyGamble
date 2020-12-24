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

  // create variables to store each guess category and create a basic shape.
  // sum up the total count of sex, eyeColor, and hairColor by category
  // put all the weights into a single array
  // -- convert each weight guess into a single number
  // -- There are 16 ounces in a pound, and add that to the pounds property
  // put all the lengths into a single array
  // -- calculate how you are bucketing.
  // -- calculate totals in each bucket.
  // take the weight guess and the length guess and put then in an object as a pair
  // -- [{weight: 6.5, length: 22}, {weight: 8.6, length: 19}]
  // put all dates into a single array
  // -- convert into a date datatype
  // -- calculate how you are bucketing.
  // -- calculate totals in each bucket.
  // put all times into a single array.
  // -- calculate how you are bucketing.
  // -- calculate totals in each bucket.

  response.json({ guesses });
});

exports.updateStats = functions.firestore
  .document('guesses/{guessId}')
  .onWrite(async (change) => {
    // prevents running the rest of the function if the onWrite was to delete the guess.
    if (!change.after.exists) return;

    // addedToStats is used to indicate that this guess has been added to the total calculations.
    // -- if we were using this function to update the guess itself, we could use addedToStats to prevent an infinite loop.
    const { content, addedToStats } = change.after.data();
    if(conent && !addedToStats) {
      const 
    }

    if(content && !addedToStats)

  });
