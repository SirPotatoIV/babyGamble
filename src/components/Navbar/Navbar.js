import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

export default function NavBar() {
  const [value, setValue] = useState(0);

  function handleClick(tab) {
    setValue(tab);
  }

  return (
    <>
      <AppBar position="static">
        <Tabs value={value} centered>
          <Tab
            onClick={() => handleClick(0)}
            value={0}
            component={Link}
            to="/"
            label="Home"
          />
          <Tab
            onClick={() => handleClick(1)}
            value={1}
            component={Link}
            to="/guess"
            label="Guess"
          />
          <Tab
            onClick={() => handleClick(2)}
            value={2}
            component={Link}
            to="/about"
            label="About"
          />
          <Tab
            onClick={() => handleClick(3)}
            value={3}
            component={Link}
            to="/profile"
            label="Profile"
          />
        </Tabs>
      </AppBar>
    </>
  );
}
