import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import Guess from './Guess';
import Result from './Result';

const User = ({ user }) => {
  let { path, url } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={`${path}`}>
          {user.hasGuessed ? <Result /> : <Guess />}
        </Route>
        <Route exact path={`${path}/result`}>
          {user.hasGuessed ? <Result /> : <Redirect to={`${url}`} />}
        </Route>
      </Switch>
    </>
  );
};
export default User;
