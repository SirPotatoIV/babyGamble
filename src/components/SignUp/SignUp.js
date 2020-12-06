import React, { useState } from 'react';

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

  const classes = useStyles();

  const handleSignUp = () => console.log(email, password);

  return (
    <div className={classes.signUpForm}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h2">Sign up</Typography>
        </Grid>
        <Grid item xs={12}>
          <form>
            <TextField
              onChange={(event) => setEmail(event.target.value)}
              required
              id="signUpEmail"
              label="E-mail"
              variant="outlined"
              type="email"
              value={email}
            />
            <TextField
              onChange={(event) => setPassword(event.target.value)}
              required
              id="signUpPassword"
              label="Password"
              variant="outlined"
              type="password"
              value={password}
            />
            <Grid item xs={12}>
              <Button
                onClick={(event) => handleSignUp()}
                label="Sign up"
                variant="contained"
                color="primary"
              >
                Sign up
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
