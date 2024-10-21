import React from 'react';
import { useAuthStatus } from "../hooks/useAuth";
import { Outlet } from 'react-router-dom';


const ProtectedRoute = () => {
  // a custom hook to keep track of user's auth status
  const { loggedIn, checkingStatus } = useAuthStatus();

  return (
    <>
      {
        // display a spinner while auth status being checked
        checkingStatus
          ? <h1>loading...</h1>
          : loggedIn
            // if user is logged in, grant the access to the route
            // note: in this example component is Bar
            ? <Outlet/>
            // else render an unauthorised component
            // stating the reason why it cannot access the route
            : <h1>not authorised</h1>
      }
    </>
  );
};

export default ProtectedRoute;