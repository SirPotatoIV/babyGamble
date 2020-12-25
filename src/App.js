import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import Navbar from './components/Navbar';
import UserProvider from './providers/UserProvider';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Navbar />
        <Routes />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
