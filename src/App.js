import React, { useEffect, useState } from 'react';
import { auth, createUserProfileDocument } from './components/Firebase';
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
    const unsubscribeFromAuth = auth.onAuthStateChanged(
      async (loggedInUser) => {
        // If profile already exists, then it returns the user profile
        const userProfile = createUserProfileDocument(loggedInUser.user);
        return setUser({
          initializing: false,
          user: userProfile,
        });
      }
    );
    // Clean up for when we no longer need to listen to changes to auth
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
