import React, { useState } from 'react';
import { firestore, auth } from '../Firebase';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import DatePicker from './DatePicker';
import Typography from '@material-ui/core/Typography';

import { DATE_DAYS, DATE_MONTHS, DATE_YEARS } from './form_constants';
import { TIME_MINUTES, TIME_HOURS } from './form_constants';

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
}));

const GuessForm = () => {
  const [sex, setSex] = useState('');
  const [hairColor, setHairColor] = useState('');
  const [eyeColor, setEyeColor] = useState('');
  const [weight, setWeight] = useState({ pounds: '', ounces: '' });
  const [length, setLength] = useState('');
  const [date, setDate] = useState({
    day: DATE_DAYS[0],
    month: DATE_MONTHS[0],
    year: DATE_YEARS[0],
  });
  const [time, setTime] = useState({ hour: '' });

  const classes = useStyles();

  const handleSubmitGuess = async (event) => {
    event.preventDefault();
    // taking data from currentUser and storing it with the guess
    const { displayName, email: userEmail, uid } = auth?.currentUser;
    // taking data from the form and storing it with the guess
    const guess = { displayName, userEmail, uid, sex, hairColor, eyeColor };
    // sending guess to database
    const docRef = await firestore.collection('guesses').add(guess);
    const document = await docRef.get();

    console.log(document.id);
  };

  return (
    <Container className={classes.root}>
      <form>
        <div>
          <Typography variant="h6">Birthday</Typography>
          <DatePicker date={date} setDate={setDate} />
        </div>
        <div>
          <FormControl component="fieldset">
            <FormLabel component="legend">Sex</FormLabel>
            <RadioGroup
              aria-label="sex"
              name="sex"
              value={sex}
              onChange={(event) => setSex(event.target.value)}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel id="eyeColorLabel">Eye Color</InputLabel>
            <Select
              labelId="eyeColorLabel"
              id="eyeColor"
              value={eyeColor}
              onChange={(event) => setEyeColor(event.target.value)}
            >
              <MenuItem value="brown">Brown</MenuItem>
              <MenuItem value="blonde">Blue</MenuItem>
              <MenuItem value="black">Green</MenuItem>
              <MenuItem value="red">Hazel</MenuItem>
            </Select>
          </FormControl>
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
        </div>
        <div className={classes.textField}>
          <TextField
            id="pounds"
            type="number"
            label="Weight (lbs)"
            onChange={(event) => {
              console.log(event.target.value);
              setWeight({ ...weight, pounds: event.target.value });
            }}
            value={weight.pounds}
          />
          <TextField
            id="ounces"
            type="number"
            label="Weight (oz)"
            onChange={(event) =>
              setWeight({ ...weight, ounces: event.target.value })
            }
            value={weight.ounces}
          />
        </div>
        <div>
          <TextField
            className={classes.textField}
            id="length"
            type="number"
            label="Length (inches)"
            onChange={(event) => setLength(event.target.value)}
            value={length}
          />
        </div>
        <Button
          type="submit"
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
