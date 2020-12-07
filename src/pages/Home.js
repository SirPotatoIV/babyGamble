import React from 'react';

import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import User from '../components/User';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default function Home() {
  return (
    <Box color="text.primary">
      <Typography variant="h1" align="center">
        Home
      </Typography>
      <User />
      <SignIn />
      <SignUp />
    </Box>
  );
}
