import React, { useState } from 'react';
import {
  auth,
  createUserProfileDocument,
  createErrorMessage,
} from '../Firebase';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    color: 'black',
  },
  signUpForm: {
    border: '2px solid black',
    borderRadius: '10px',
    padding: '10px',
    margin: '10px',
  },
});

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [authError, setAuthError] = useState({ isPresent: false, message: '' });

  const classes = useStyles();

  async function handleSignUp() {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfileDocument(user, displayName);
    } catch (error) {
      setAuthError({
        isPresent: true,
        message: createErrorMessage(error.code),
      });
    }

    if (!authError.isPresent) {
      setAuthError({ isPresent: false, message: '' });
    }

    setEmail('');
    setPassword('');
    setDisplayName('');
  }

  return (
    <div className={classes.signUpForm}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h2">Sign up</Typography>
        </Grid>
        <Grid item xs={12}>
          <form>
            <TextField
              onChange={(event) => setDisplayName(event.target.value)}
              required
              id="signUpDisplayName"
              label="Display Name"
              variant="outlined"
              type="text"
              value={displayName}
            />
            <TextField
              onChange={(event) => setEmail(event.target.value)}
              required
              id="signUpEmail"
              label="E-mail"
              variant="outlined"
              type="email"
              autoComplete="username"
              value={email}
            />
            <TextField
              onChange={(event) => setPassword(event.target.value)}
              required
              id="signUpPassword"
              label="Password"
              variant="outlined"
              type="password"
              autoComplete="current-password"
              value={password}
            />
            <Grid item xs={12}>
              <Button
                onClick={() => handleSignUp()}
                label="Sign up"
                variant="contained"
                color="primary"
              >
                Sign up
              </Button>
            </Grid>
          </form>
        </Grid>
        {authError.isPresent && (
          <Typography variant="subtitle1" color="error">
            {authError.message}
          </Typography>
        )}
      </Grid>
    </div>
  );
}
