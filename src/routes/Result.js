import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    height: '500px',
  },
  text: {
    margin: theme.spacing(1),
  },
  header: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Result = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      alignContent="space-around"
      className={classes.root}
    >
      <Grid item xs={12} className={classes.header}>
        <Typography variant="h3" align="center">
          Thanks for Guessing!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" align="center" className={classes.text}>
          In the near future when you come back to the site, this page will show
          a summary of all the guesses so far.
        </Typography>
        <Typography variant="body1" align="center" className={classes.text}>
          If you would like to be notified by e-mail when this page is updated,
          please click "Keep me updated". Otherwise, click "No thanks".
        </Typography>
      </Grid>
      <Grid item xs={12} spacing={3} align="center">
        <Button className={classes.button} variant="contained" color="primary">
          Keep me updated
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
        >
          No thanks
        </Button>
      </Grid>
    </Grid>
  );
};

export default Result;
