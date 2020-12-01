import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function LinkTab(props) {
  return <Tab component="a" {...props} />;
}

export default function Navbar() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="navbar">
          <LinkTab label="Home" href="/" {...a11yProps(0)} />
          <LinkTab label="Guess" href="/guess" {...a11yProps(1)} />
          <LinkTab label="About" href="/about" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
    </div>
  );
}
