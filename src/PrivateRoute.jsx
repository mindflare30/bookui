import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, authUser, ...rest }) => {
  return authUser ? <Component {...rest} /> : <Navigate to="/signup" />;
};

export default PrivateRoute;
