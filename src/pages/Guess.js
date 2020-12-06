import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import GuessForm from '../components/GuessForm';
import Guesses from '../components/Guesses';

export default function Guess() {
  return (
    <Box color="text.primary">
      <Typography variant="h1" align="center">
        Guess
      </Typography>
      <GuessForm />
      <Guesses />
    </Box>
  );
}
