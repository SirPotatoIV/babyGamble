import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Guess from './Guess';
import Result from './Result';

const User = ({ user }) => {
  let { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={`${path}/result`}>
          <Result />
        </Route>
        <Route exact path={`${path}`}>
          {user.hasGuessed ? <Result /> : <Guess />}
        </Route>
      </Switch>
    </>
  );
};
export default User;
