import React, { useState, createContext } from 'react';
import { firestore, collectIdsAndDocs } from '../components/Firebase';

const GuessesContext = createContext();

const GuessesProvider = ({ children }) => {
  const [guesses, setGuesses] = useState([]);

  useEffect(() => {
    const unsubscribeFromGuesses = await  firestore.collection('guesses').get();
    
    // clean up step for when we no longer need to be listening for updates to guesses
    return () => unsubscribeFromGuesses();
  }, []);

  async function getGuesses() {
    const snapshots = await firestore.collection('guesses').get();
    const userGuesses = snapshots.docs.map(collectIdsAndDocs);
    setGuesses(userGuesses);
  }

  return (
    <GuessesContext.Provider value={guesses}>
      {children}
    </GuessesContext.Provider>
  );
};

export default GuessesProvider;
