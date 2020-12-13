import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { DATE_DAYS } from './date_constants';

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

const DatePicker = ({ date, setDate }) => {
  const classes = useStyles();

  const handleDateChange = (key, newValue) => {
    setDate({ ...date, [key]: newValue });
  };
  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel id="dayLabel">Day</InputLabel>
        <Select
          labelId="dayLabel"
          id="day"
          value={date.day}
          onChange={(event) =>
            handleDateChange(event.target.id, event.target.value)
          }
        >
          {DATE_DAYS.map((day) => (
            <MenuItem value={day}>{day}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default DatePicker;
