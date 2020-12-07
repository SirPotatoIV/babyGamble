import React, { useContext } from 'react';
import { UserContext } from '../../providers/UserProvider';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const UserProfile = () => {
  const { userProfile } = useContext(UserContext);
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          Display Name: {userProfile.displayName}
        </Grid>
        <Grid item xs={12}>
          Email: {userProfile.email}
        </Grid>
        <Grid item xs={12}>
          <Button>Reset Password</Button>
        </Grid>
        <Grid item xs={12}>
          Added form to allow users to change their email.
        </Grid>
        <Grid item xs={12}>
          Add feature for user to delete their account.
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserProfile;
