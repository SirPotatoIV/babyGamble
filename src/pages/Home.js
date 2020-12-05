import React, { useEffect } from 'react';
import { firestore } from '../components/Firebase';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const getGuesses = async () => {
  const snapshots = await firestore.collection('guesses').get();

  snapshots.forEach((document) => {
    const id = document.id;
    const data = document.data();

    console.log({ id, data });
  });
};

export default function Home() {
  useEffect(() => {
    getGuesses();
  }, []);

  return (
    <Box color="text.primary">
      <Typography variant="h1" align="center">
        Home
      </Typography>
    </Box>
  );
}
