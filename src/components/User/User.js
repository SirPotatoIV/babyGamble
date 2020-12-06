import React, { useEffect, useState } from 'react';
import { auth } from '../Firebase';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const User = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    // Auth unsubscribe taken from Ben McMahen's article: https://dev.to/bmcmahen/using-firebase-with-react-hooks-21ap
    const unsubscribeFromAuth = auth.onAuthStateChanged((newUser) => {
      console.log('state changed');
      return setUser({
        initializing: false,
        user: newUser,
      });
    });

    return () => unsubscribeFromAuth();
  }, []);

  return (
    !!user?.user && (
      <Container>
        <div>user: {user.user.displayName}</div>
        <div>email: {user.user.email}</div>
        <Button onClick={() => auth.signOut()}>Sign out</Button>
      </Container>
    )
  );
};

export default User;
