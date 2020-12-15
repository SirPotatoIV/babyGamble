import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';

import UserProvider from './providers/UserProvider';
import GuessesProvider from './providers/GuessesProvider';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        {/* <GuessesProvider> */}
        <Routes />
        {/* </GuessesProvider> */}
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
