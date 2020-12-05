import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Guess from './pages/Guess';
import Home from './pages/Home';

// import Navbar from './components/Navbar';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
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
