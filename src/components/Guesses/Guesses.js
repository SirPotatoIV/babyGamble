import React, { useEffect, useState } from 'react';
import { firestore, collectIdsAndDocs } from '../Firebase';

import Container from '@material-ui/core/Container';

const Guesses = () => {
  const [guesses, setGuesses] = useState([]);

  useEffect(() => {
    getGuesses();
  }, []);

  async function getGuesses() {
    const snapshots = await firestore.collection('guesses').get();
    const userGuesses = snapshots.docs.map(collectIdsAndDocs);
    setGuesses(userGuesses);
  }

  return (
    <Container>
      {!!guesses &&
        guesses.map((guess) => {
          return (
            <div key={guess.id}>
              <div>{guess.email}</div>
              <div>
                {guess.firstName} {guess.lastName}
              </div>
              <div>{guess.hairColor}</div>
            </div>
          );
        })}
    </Container>
  );
};

export default Guesses;
