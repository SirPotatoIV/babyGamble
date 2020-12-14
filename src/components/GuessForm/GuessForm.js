import React, { useState } from 'react';
import { firestore, auth } from '../Firebase';
import { useHistory } from 'react-router-dom';
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
  multilineTextField: {
    margin: theme.spacing(1),
    minWidth: '100%',
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
  const [message, setMessage] = useState('');
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
  const history = useHistory();

  const handleSubmitGuess = async () => {
    // taking data from currentUser and storing it with the guess
    const { email: userEmail, uid } = auth.currentUser || {
      email: '',
      uid: '',
    };
    // check if user has already guessed
    const userRef = firestore.doc(`users/${uid}`);
    const userSnapshot = await userRef.get();
    if (userSnapshot.data().hasGuessed) {
      setError({ isPresent: true, message: 'Sorry, you can only guess once.' });
      return;
    }
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
      message,
      timeSubmitted: new Date(),
    };
    // sending guess to database
    try {
      await firestore.collection('guesses').add(guess);
      const userRef = firestore.doc(`users/${uid}`);
      await userRef.update({ hasGuessed: true });
      history.push('/user/result');
    } catch (error) {
      setError({ isPresent: 'true', message: error.message });
    }
  };

  return (
    <Box className={classes.root}>
      {error.isPresent && (
        <Typography variant="subtitle1" color="error">
          {error.message}
        </Typography>
      )}
      <Typography variant="caption">Please fill in all fields.</Typography>
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
          <FormControl
            className={classes.formControl}
            component="fieldset"
            required={true}
          >
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
          <FormControl className={classes.formControl} required>
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
          <FormControl className={classes.formControl} required>
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
              setWeight({ ...weight, pounds: event.target.value });
            }}
            value={weight.pounds}
            required
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
            required
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
            required
          />
        </div>
        <div>
          <Typography className={classes.header} variant="h6">
            Leave a Little Message (optional)
          </Typography>
          <TextField
            className={classes.multilineTextField}
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
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
