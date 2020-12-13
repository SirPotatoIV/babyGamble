import React from 'react';

import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    justifyContent: 'center',
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Box className={classes.root} color="text.primary">
      <Typography variant="h1" align="center">
        Home
      </Typography>
      <SignIn />
      <Typography variant="h4" align="center">
        OR
      </Typography>
      <SignUp />
    </Box>
  );
}
