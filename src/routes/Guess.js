import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import GuessForm from '../components/GuessForm';

export default function Guess() {
  return (
    <Box color="text.primary">
      <Typography variant="h1" align="center">
        Guess
      </Typography>
      <GuessForm />
    </Box>
  );
}
