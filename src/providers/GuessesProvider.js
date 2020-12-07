import React, { useState, createContext } from 'react';
import { firestore, collectIdsAndDocs } from '../components/Firebase';

const GuessesContext = createContext();

const GuessesProvider = ({ children }) => {
  const [guesses, setGuesses] = useState([]);

  useEffect(() => {
    const unsubscribeFromGuesses = firestore
      .collection('guesses')
      .onSnapshot((snapshot) => {
        const userGuesses = snapshot.docs.map(collectIdsAndDocs);
        setGuesses(userGuesses);
      });
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
