import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  textField: {
    margin: theme.spacing(1),
    // width: '25ch',
  },
  textFieldFull: {
    margin: theme.spacing(1),
  },
}));

export default function GuessForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <form>
        <div>
          <TextField
            className={classes.textField}
            id="firstName"
            label="First Name"
            type="text"
            variant="outlined"
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
            value={firstName}
          />
          <TextField
            className={classes.textField}
            id="lastName"
            label="Last Name"
            type="text"
            variant="outlined"
            onChange={(event) => {
              setLastName(event.target.value);
            }}
            value={lastName}
          />
        </div>
        <div>
          <TextField
            className={classes.textFieldFull}
            fullWidth
            id="email"
            label="E-mail"
            type="email"
            variant="outlined"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
          />
        </div>
        <Button variant="contained" color="primary" endIcon={<Icon>send</Icon>}>
          Submit Guess
        </Button>
      </form>
    </Container>
  );
}
