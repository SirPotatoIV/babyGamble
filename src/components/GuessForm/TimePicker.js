import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

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
}));

const TimePicker = ({ time, setTime }) => {
  const classes = useStyles();
  const handleTimeChange = (key, newValue) => {
    setTime({ ...time, [key]: newValue });
  };
  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel id="hourLabel">hour</InputLabel>
        <Select
          labelId="hourLabel"
          id="hour"
          value={time.hour}
          onChange={(event) => {
            handleTimeChange('hour', event.target.value);
          }}
        >
          {TIME_HOURS.map((hour) => (
            <MenuItem key={`hour_${hour}`} value={hour}>
              {hour}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default TimePicker;
