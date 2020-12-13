import React, { useContext } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import About from './About';
import Guess from './Guess';
import Home from './Home';
import { UserContext } from '../providers/UserProvider';

const Routes = () => {
  let user = useContext(UserContext);

  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/guess">{user ? <Guess /> : <Redirect to="/" />}</Route>
      <Route path="/">{user ? <Redirect to="/guess" /> : <Home />}</Route>
    </Switch>
  );
};
export default Routes;
