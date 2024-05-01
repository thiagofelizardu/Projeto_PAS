import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

const PrivateRoute = ({ element, ...rest }) => {
  const { isLoggedIn } = useAuth();

  return (
    <Route
      {...rest}
      element={isLoggedIn ? element : <Navigate to="/Page404" replace />}
    />
  );
};

export default PrivateRoute;
