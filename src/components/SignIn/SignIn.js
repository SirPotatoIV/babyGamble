import React, { useState } from 'react';
import { auth, googleAuthProvider, createErrorMessage } from '../Firebase';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'black',
  },
  SignIn: {
    border: '0px solid black',
    borderRadius: '10px',
    boxShadow: '5px 10px 8px 10px #888888',
    padding: '10px',
    margin: '10px',
    maxWidth: '400px',
  },
  TextField: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState({
    isPresent: false,
    message: '',
  });

  const classes = useStyles();

  const handleSignInWithEmail = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      // reset form
      setEmail('');
      setPassword('');
      setAuthError({ isPresent: false, message: '' });
    } catch (error) {
      // set error
      setAuthError({
        isPresent: true,
        message: createErrorMessage(error.code),
      });
    }
  };

  const handlePasswordReset = async () => {
    try {
      await auth.sendPasswordResetEmail(email);
      setAuthError({
        isPresent: true,
        message: 'Please check your e-mail for a further steps.',
      });
    } catch (error) {
      setAuthError({ isPresent: true, message: error.message });
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleAuthProvider);
      // reset form
      setEmail('');
      setPassword('');
      setAuthError({ isPresent: false, message: '' });
    } catch (error) {
      // set error
      setAuthError({
        isPresent: true,
        message: createErrorMessage(error.code),
      });
    }
  };

  return (
    <>
      <Grid container spacing={3} className={classes.SignIn}>
        <Grid item xs={12}>
          <Typography variant="h3">Log in</Typography>
        </Grid>
        <Grid item xs={12}>
          <form>
            <TextField
              className={classes.TextField}
              onChange={(event) => setEmail(event.target.value)}
              required
              id="signInEmail"
              label="E-mail"
              type="email"
              autoComplete="username"
              value={email}
            />
            <TextField
              className={classes.TextField}
              onChange={(event) => setPassword(event.target.value)}
              required
              id="signInPassword"
              label="Password"
              type="password"
              autoComplete="current-password"
              value={password}
            />
            <Grid item xs={12}>
              <Button
                className={classes.button}
                onClick={() => handleSignInWithEmail()}
                label="Log in"
                variant="contained"
                color="primary"
              >
                Log in
              </Button>
              <Button
                className={classes.button}
                onClick={() => handleSignInWithGoogle()}
                label="Log in with Google"
                variant="contained"
                color="secondary"
              >
                Log in with Google
              </Button>
              <Button
                className={classes.button}
                onClick={() => handlePasswordReset()}
                label="Forgot Password"
                variant="contained"
              >
                Reset Password
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
    </>
  );
}
