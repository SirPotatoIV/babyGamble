import React, { useEffect, useState, createContext } from 'react';
import { auth, createUserProfileDocument } from '../components/Firebase';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ user: null });

  useEffect(() => {
    // Auth unsubscribe taken from Ben McMahen's article: https://dev.to/bmcmahen/using-firebase-with-react-hooks-21ap
    const unsubscribeFromAuth = auth.onAuthStateChanged(
      async (loggedInUser) => {
        // If profile already exists, then it returns the user profile
        console.log(user);
        const userProfile = await createUserProfileDocument(loggedInUser);
        setUser({ userProfile });
      },
      (error) => {
        console.log(error);
      }
    );
    // Clean up for when we no longer need to listen to changes to auth
    return () => unsubscribeFromAuth();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
