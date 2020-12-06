import React, { useEffect, useState } from 'react';
import { firestore, collectIdsAndDocs } from '../components/Firebase';

import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

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

    const userGuesses = snapshots.docs.map(collectIdsAndDocs);

    setGuesses(userGuesses);
  }

  return (
    <Box color="text.primary">
      <Typography variant="h1" align="center">
        Home
      </Typography>
      <Container>
        <SignIn />
        <SignUp />
      </Container>
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
