import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

export default function NavBar() {
  return (
    <div>
      <AppBar position="static">
        <Button component={Link} to="/guess" variant="text">
          Guess
        </Button>
        <Button component={Link} to="/">
          Home
        </Button>
      </AppBar>
    </div>
  );
}
