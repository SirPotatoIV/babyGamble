import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

export default function GuessForm() {
  return (
    <Box alignContent="center">
      <form>
        <div>
          <TextField
            id="firstName"
            label="First Name"
            type="text"
            variant="outlined"
          />
          <TextField
            id="lastName"
            label="Last Name"
            type="text"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            id="firstName"
            label="First Name"
            type="text"
            variant="outlined"
          />
          <TextField
            id="lastName"
            label="Last Name"
            type="text"
            variant="outlined"
          />
        </div>
      </form>
    </Box>
  );
}
