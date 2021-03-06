import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { signOut } from '../Firebase';
import { UserContext } from '../../providers/UserProvider';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function NavBar() {
  const [value, setValue] = useState(0);
  let user = useContext(UserContext);
  let classes = useStyles();

  function handleClick(tab) {
    setValue(tab);
  }

  return (
    <>
      <AppBar position="static">
        <Grid container alignItems="center">
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            {/* <Tabs value={value} centered>
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
                to="/about"
                label="About"
              />
            </Tabs> */}
          </Grid>
          <Grid container align="end" xs={4} spacing={3}>
            <Grid item xs>
              {user.userProfile && (
                <Button
                  className={classes.button}
                  variant="contained"
                  onClick={() => signOut()}
                >
                  Log out
                </Button>
              )}
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
}
