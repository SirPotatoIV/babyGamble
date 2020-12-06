import React, { useState } from 'react';
import { firestore, auth } from '../Firebase';
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

  async function handleSubmitGuess(event) {
    event.preventDefault();
    // taking data from currentUser and storing it with the guess
    const { displayName, email: userEmail } = auth.currentUser;
    // taking data from the form and storing it with the guess
    const guess = { displayName, userEmail, firstName, lastName, email };
    // sending guess to database
    const docRef = await firestore.collection('guesses').add(guess);
    const document = await docRef.get();

    console.log(document.id);
  }

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
        <Button
          onClick={(event) => handleSubmitGuess(event)}
          variant="contained"
          color="primary"
          endIcon={<Icon>send</Icon>}
        >
          Submit Guess
        </Button>
      </form>
    </Container>
  );
}
