import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Guess from './pages/Guess';
import Home from './pages/Home';
import UserProfile from './components/UserProfile';

import UserProvider from './providers/UserProvider';
import GuessesProvider from './providers/GuessesProvider';
import Navbar from './components/Navbar';

import './App.scss';

function App() {
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
              <Guess />
            </Route>
            <Route exact path="/profile">
              <UserProfile />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </GuessesProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
