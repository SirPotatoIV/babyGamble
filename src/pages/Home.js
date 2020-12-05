import React, { useEffect, useState } from 'react';
import { firestore } from '../components/Firebase';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function Home() {
  const [guesses, setGuesses] = useState([]);

  useEffect(() => {
    getGuesses();
  }, []);

  async function getGuesses() {
    const snapshots = await firestore.collection('guesses').get();

    const userGuesses = snapshots.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    setGuesses(userGuesses);
  }

  return (
    <Box color="text.primary">
      <Typography variant="h1" align="center">
        Home
      </Typography>
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
    </Box>
  );
}
