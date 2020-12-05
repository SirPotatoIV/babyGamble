import React, { useEffect } from 'react';
import { firestore } from '../components/Firebase';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default function Home() {
  useEffect(() => {
    const guesses = firestore.collection('guesses').get();
    console.log(guesses);
  }, []);

  return (
    <Box color="text.primary">
      <Typography variant="h1" align="center">
        Home
      </Typography>
    </Box>
  );
}
