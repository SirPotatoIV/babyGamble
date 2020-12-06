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
  },
});

export default function SignUp() {
  const [newUser, setNewUser] = useState({
    email: '',
    password: '',
  });
  const classes = useStyles();
  console.log(newUser);
  const handleChange = (event) =>
    setNewUser({ [event.target.id]: event.target.value });

  return (
    <div className={classes.signUpForm}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h2">Sign up</Typography>
        </Grid>
        <Grid item xs={12}>
          <form>
            <TextField
              onChange={(event) => handleChange(event)}
              required
              id="email"
              label="E-mail"
              variant="outlined"
              type="email"
            />
            <TextField
              onChange={(event) => handleChange(event)}
              required
              id="password"
              label="Password"
              variant="outlined"
              type="password"
            />
            <Grid item xs={12}>
              <Button label="Sign up" variant="contained" color="primary">
                Sign up
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
