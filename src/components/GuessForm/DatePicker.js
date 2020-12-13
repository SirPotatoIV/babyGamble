import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

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
