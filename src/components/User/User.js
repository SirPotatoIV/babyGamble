import React, { useContext } from 'react';
import { signOut } from '../Firebase';
import { UserContext } from '../../providers/UserProvider';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const User = () => {
  const user = useContext(UserContext);

  return (
    !!user?.user && (
      <Container>
        <div>user: {user.user.displayName}</div>
        <div>email: {user.user.email}</div>
        <Button onClick={() => signOut()}>Sign out</Button>
      </Container>
    )
  );
};

export default User;
