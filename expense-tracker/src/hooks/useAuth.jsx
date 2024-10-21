
import { useEffect, useState } from 'react';

import { auth , app } from '../../firebase';

export const useAuthStatus = () => {
  // assume user to be logged out
  const [loggedIn, setLoggedIn] = useState(false);

  // keep track to display a spinner while auth status is being checked
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    // auth listener to keep track of user signing in and out
    console.log("checking user login")
    auth.onAuthStateChanged((user) => {
      console.log("before user")

      if (user) {
        setLoggedIn(true);
        console.log("inside if")

      }

      setCheckingStatus(false);
    });
  }, []);

  return { loggedIn, checkingStatus };
};
