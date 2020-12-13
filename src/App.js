import React, { useContext } from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import About from './routes/About';
import Guess from './routes/Guess';
import Home from './routes/Home';

import UserProvider, { UserContext } from './providers/UserProvider';
import GuessesProvider from './providers/GuessesProvider';
import Navbar from './components/Navbar';

import './App.scss';

function App() {
  let user = useContext(UserContext);
  console.log(user);
  return (
    <BrowserRouter>
      <UserProvider>
        <GuessesProvider>
          <Navbar />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/guess">
              {user ? <Guess /> : <Redirect to="/" />}
            </Route>
            <Route path="/">{user ? <Redirect to="/guess" /> : <Home />}</Route>
          </Switch>
        </GuessesProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
