import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { DATE_DAYS, DATE_MONTHS, DATE_YEARS } from './form_constants';

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
          onChange={(event) => {
            handleDateChange('day', event.target.value);
          }}
        >
          {DATE_DAYS.map((day) => (
            <MenuItem key={`day_${day}`} value={day}>
              {day}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="monthLabel">Month</InputLabel>
        <Select
          labelId="monthLabel"
          id="month"
          value={date.month}
          onChange={(event) => {
            handleDateChange('month', event.target.value);
          }}
        >
          {DATE_MONTHS.map((month) => (
            <MenuItem key={`month_${month}`} value={month}>
              {month}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="yearLabel">Year</InputLabel>
        <Select
          labelId="yearLabel"
          id="year"
          value={date.year}
          onChange={(event) => {
            handleDateChange('year', event.target.value);
          }}
        >
          {DATE_YEARS.map((year) => (
            <MenuItem key={`year_${year}`} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default DatePicker;
