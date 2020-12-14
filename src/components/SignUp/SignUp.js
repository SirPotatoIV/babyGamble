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

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'black',
  },
  signUp: {
    border: '0px solid black',
    borderRadius: '10px',
    boxShadow: '5px 10px 8px 10px #888888',
    padding: '10px',
    margin: '10px',
    maxWidth: '400px',
  },
  textField: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

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
      console.log('user created in FB:', user);
      const additionalInfo = {
        displayName: displayName,
        hasGuessed: false,
        requestedUpdates: false,
      };
      console.log('display name added', user);
      await createUserProfileDocument(user, additionalInfo);

      // Clear form
      setEmail('');
      setPassword('');
      setDisplayName('');
      setAuthError({ isPresent: false, message: '' });
    } catch (error) {
      // Set error
      setAuthError({
        isPresent: true,
        message: createErrorMessage(error.code),
      });
    }
  }

  return (
    <>
      <Grid container spacing={3} className={classes.signUp}>
        <Grid item xs={12}>
          <Typography variant="h3">Sign up</Typography>
        </Grid>
        <Grid item xs={12}>
          <form>
            <TextField
              className={classes.textField}
              onChange={(event) => setDisplayName(event.target.value)}
              required
              id="signUpDisplayName"
              label="Display Name"
              type="text"
              value={displayName}
            />
            <TextField
              className={classes.textField}
              onChange={(event) => setEmail(event.target.value)}
              required
              id="signUpEmail"
              label="E-mail"
              type="email"
              autoComplete="username"
              value={email}
            />
            <TextField
              className={classes.textField}
              onChange={(event) => setPassword(event.target.value)}
              required
              id="signUpPassword"
              label="Password"
              type="password"
              autoComplete="current-password"
              value={password}
            />
            <Grid item xs={12}>
              <Button
                className={classes.button}
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
    </>
  );
}
