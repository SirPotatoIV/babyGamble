import React, { useEffect, useState, createContext } from 'react';
import { firestore, collectIdsAndDocs } from '../components/Firebase';

export const GuessesContext = createContext();

const GuessesProvider = ({ children }) => {
  const [guesses, setGuesses] = useState([]);

  useEffect(() => {
    const unsubscribeFromGuesses = firestore.collection('guesses').onSnapshot(
      (snapshot) => {
        const userGuesses = snapshot.docs.map(collectIdsAndDocs);
        setGuesses(userGuesses);
      },
      (error) => {
        // When the application initially starts, an error will occur because the user will not be logged in.
        // An error for insufficient permissions should not be thrown to the console.
        if (error.message !== 'Missing or insufficient permissions.') {
          console.log(error.message);
        }
      }
    );
    // clean up step for when we no longer need to be listening for updates to guesses
    return () => unsubscribeFromGuesses();
  }, []);

  return (
    <GuessesContext.Provider value={guesses}>
      {children}
    </GuessesContext.Provider>
  );
};

export default GuessesProvider;
