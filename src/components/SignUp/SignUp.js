import React from 'react';

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
  const classes = useStyles();

  return (
    <div className={classes.signUpForm}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h2">Sign up</Typography>
        </Grid>
        <Grid item xs={12}>
          <form>
            <TextField
              required
              id="email"
              label="E-mail"
              variant="outlined"
              type="email"
            />
            <TextField
              required
              id="password"
              label="password"
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
