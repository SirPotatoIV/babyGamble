import React, { useEffect, useState } from 'react';
import { auth } from './components/Firebase';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Guess from './pages/Guess';
import Home from './pages/Home';

import Navbar from './components/Navbar';

import './App.scss';

function App() {
  const [user, setUser] = useState();
  console.log(user);

  useEffect(() => {
    // Auth unsubscribe taken from Ben McMahen's article: https://dev.to/bmcmahen/using-firebase-with-react-hooks-21ap
    const unsubscribeFromAuth = auth.onAuthStateChanged(() =>
      setUser({
        initializing: false,
        user,
      })
    );

    return () => unsubscribeFromAuth();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/guess">
          <Guess />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
