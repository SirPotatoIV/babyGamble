import React, { useContext } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
// import About from './About';

import Home from './Home';
import User from './User';
import { UserContext } from '../providers/UserProvider';

const Routes = () => {
  let user = useContext(UserContext);

  return (
    <Switch>
      {/* <Route path="/about">
        <About />
      </Route> */}
      <Route path="/user">
        {user.userProfile ? (
          <User user={user.userProfile} />
        ) : (
          <Redirect to="/" />
        )}
      </Route>
      <Route path="/">
        {user.userProfile ? <Redirect to="/user" /> : <Home />}
      </Route>
    </Switch>
  );
};
export default Routes;
