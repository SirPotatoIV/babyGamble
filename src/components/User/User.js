import React, { useContext } from 'react';
import { signOut } from '../Firebase';
import { UserContext } from '../../providers/UserProvider';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const User = () => {
  const { userProfile } = useContext(UserContext);
  console.log(userProfile);
  return (
    !!userProfile && (
      <Container>
        <div>user: {userProfile.displayName}</div>
        <div>email: {userProfile.email}</div>
        <Button onClick={() => signOut()}>Sign out</Button>
      </Container>
    )
  );
};

export default User;
