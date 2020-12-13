import React, { useState } from 'react';
import { firestore, auth } from '../Firebase';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    justifyContent: 'center',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '120px',
  },
  textField: {
    margin: theme.spacing(1),
    minWidth: '120px',
  },
  header: {
    marginTop: '6px',
  },
  submit: {
    marginTop: '8px',
  },
}));

const GuessForm = () => {
  const [error, setError] = useState({ isPresent: 'false', message: '' });
  const [sex, setSex] = useState('');
  const [hairColor, setHairColor] = useState('');
  const [eyeColor, setEyeColor] = useState('');
  const [weight, setWeight] = useState({ pounds: '', ounces: '' });
  const [length, setLength] = useState('');
  const [date, setDate] = useState({
    day: '',
    month: '',
    year: '',
  });
  const [time, setTime] = useState({
    hour: '',
    minute: '',
    meridiem: '',
  });

  const classes = useStyles();

  const handleSubmitGuess = async () => {
    // taking data from currentUser and storing it with the guess
    const { email: userEmail, uid } = auth.currentUser || {
      email: '',
      uid: '',
    };
    // taking data from the form and storing it with the guess
    const guess = {
      userEmail,
      uid,
      sex,
      hairColor,
      eyeColor,
      weight,
      length,
      date,
      time,
    };
    // sending guess to database
    try {
      const docRef = await firestore.collection('guesses').add(guess);
      const document = await docRef.get();
      console.log(document.id);
    } catch (error) {
      setError({ isPresent: 'true', message: error.message });
    }
  };

  return (
    <Box className={classes.root}>
      {error.isPresent && (
        <div>
          <Typography variant="subtitle1" color="error">
            {error.message}
          </Typography>
        </div>
      )}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmitGuess();
        }}
      >
        <div>
          <Typography className={classes.header} variant="h6">
            Birthday & Time
          </Typography>
          <DatePicker date={date} setDate={setDate} />
        </div>
        <div>
          <TimePicker time={time} setTime={setTime}></TimePicker>
        </div>
        <div>
          <Typography className={classes.header} variant="h6">
            Sex
          </Typography>
          <FormControl className={classes.formControl} component="fieldset">
            <RadioGroup
              aria-label="sex"
              name="sex"
              value={sex}
              onChange={(event) => setSex(event.target.value)}
              row
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
          <Typography className={classes.header} variant="h6">
            Hair & Eye Color
          </Typography>
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
        <div>
          <Typography className={classes.header} variant="h6">
            Weight & Length
          </Typography>
          <TextField
            className={classes.textField}
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
            className={classes.textField}
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
          className={classes.submit}
          type="submit"
          variant="contained"
          color="primary"
          endIcon={<Icon>send</Icon>}
        >
          Submit Guess
        </Button>
      </form>
    </Box>
  );
};

export default GuessForm;
