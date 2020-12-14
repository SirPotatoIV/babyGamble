import React, { useContext } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import About from './About';
import Guess from './Guess';
import Home from './Home';
import Result from './Result';
import { UserContext } from '../providers/UserProvider';

const Routes = () => {
  let user = useContext(UserContext);
  console.log(user);

  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/guess">
        {user.userProfile ? <Guess /> : <Redirect to="/" />}
      </Route>
      <Route path="/result">
        {user.userProfile?.hasGuessed ? <Result /> : <Redirect to="/" />}
      </Route>
      <Route path="/">
        {user.userProfile ? <Redirect to="/guess" /> : <Home />}
      </Route>
    </Switch>
  );
};
export default Routes;
