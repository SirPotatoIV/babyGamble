import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';

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
          <Routes />
        </GuessesProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
