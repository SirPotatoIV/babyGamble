import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import {
  TIME_MINUTES,
  TIME_HOURS_TWELVE,
  TIME_MERIDIEM,
} from './form_constants';

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
}));

const TimePicker = ({ time, setTime }) => {
  const classes = useStyles();
  const handleTimeChange = (key, newValue) => {
    setTime({ ...time, [key]: newValue });
  };
  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel id="hourLabel">Hour</InputLabel>
        <Select
          labelId="hourLabel"
          id="hour"
          value={time.hour}
          onChange={(event) => {
            handleTimeChange('hour', event.target.value);
          }}
        >
          {TIME_HOURS_TWELVE.map((hour) => (
            <MenuItem key={`hour_${hour}`} value={hour}>
              {hour}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="minuteLabel">Minute</InputLabel>
        <Select
          labelId="minuteLabel"
          id="minute"
          value={time.minute}
          onChange={(event) => {
            handleTimeChange('minute', event.target.value);
          }}
        >
          {TIME_MINUTES.map((minute) => (
            <MenuItem key={`minute_${minute}`} value={minute}>
              {minute}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="meridiemLabel">AM / PM</InputLabel>
        <Select
          labelId="meridiemLabel"
          id="meridiem"
          value={time.meridiem}
          onChange={(event) => {
            handleTimeChange('meridiem', event.target.value);
          }}
        >
          {TIME_MERIDIEM.map((meridiem) => (
            <MenuItem key={`meridiem_${meridiem}`} value={meridiem}>
              {meridiem}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default TimePicker;
