import React, { useState } from 'react';
import { firestore, auth } from '../Firebase';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '120px',
  },
  textField: {
    margin: theme.spacing(1),
  },
  textFieldFull: {
    margin: theme.spacing(1),
  },
}));

const GuessForm = () => {
  const [hairColor, setHairColor] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const classes = useStyles();

  const handleSubmitGuess = async (event) => {
    event.preventDefault();
    // taking data from currentUser and storing it with the guess
    const { displayName, email: userEmail, uid } = auth?.currentUser;
    // taking data from the form and storing it with the guess
    const guess = { displayName, userEmail, uid, firstName, lastName, email };
    // sending guess to database
    const docRef = await firestore.collection('guesses').add(guess);
    const document = await docRef.get();

    console.log(document.id);
  };

  return (
    <Container className={classes.root}>
      <form>
        <FormControl className={classes.formControl}>
          <InputLabel id="hairColorLabel">Hair Color</InputLabel>
          <Select
            labelId="hairColorLabel"
            id="hairColor"
            value={hairColor}
            onChange={(event) => setHairColor(event.target.value)}
          >
            <MenuItem value="brown">Brown</MenuItem>
            <MenuItem value="blonde">Blonde</MenuItem>
            <MenuItem value="black">Black</MenuItem>
            <MenuItem value="red">Red</MenuItem>
            <MenuItem value="bald">Bald</MenuItem>
          </Select>
        </FormControl>

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
};

export default GuessForm;
