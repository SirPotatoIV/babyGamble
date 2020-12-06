import React, { useEffect, useState } from 'react';
import { firestore, collectIdsAndDocs } from '../components/Firebase';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Guesses from '../components/Guesses';

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
      <Guesses guesses={guesses} />
    </Box>
  );
}
