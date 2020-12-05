import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    margin: theme.spacing(1),
    width: '25ch',
  },
}));

export default function GuessForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <form>
        <div>
          <TextField
            className={classes.textField}
            id="firstName"
            label="First Name"
            type="text"
            variant="outlined"
          />
          <TextField
            className={classes.textField}
            id="lastName"
            label="Last Name"
            type="text"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            className={classes.textField}
            id="firstName"
            label="First Name"
            type="text"
            variant="outlined"
          />
          <TextField
            className={classes.textField}
            id="lastName"
            label="Last Name"
            type="text"
            variant="outlined"
          />
        </div>
      </form>
    </div>
  );
}
