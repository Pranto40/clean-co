import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import auth from '../Firebase/firebase.init';

const PrivateRoute = () => {
  let location = useLocation();
  const [user, loading, error] = useAuthState(auth);

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;