import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

// prettier-ignore
const days = ['1', '2', '3', '4', '5', '6', '7', '8', '9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'];
// prettier-ignore
const months = ['JAN', 'FEB', "MAR", 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const years = ['2020', '2021'];

const DatePicker = () => {
  <>
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
  </>;
};

export default DatePicker;
