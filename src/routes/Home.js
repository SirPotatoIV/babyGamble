import React, { useContext } from 'react';

import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from '../providers/UserProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    justifyContent: 'center',
    justifyItems: 'center',
  },
  header: {
    margin: theme.spacing(1),
  },
}));

export default function Home() {
  const user = useContext(UserContext);
  const classes = useStyles();

  console.log(user);

  return (
    <Box className={classes.root} color="text.primary">
      <Typography className={classes.header} variant="h1" align="center">
        Welcome to Baby Guesser!
      </Typography>
      <SignIn />
      <Typography variant="h4" align="center">
        OR
      </Typography>
      <SignUp />
    </Box>
  );
}
