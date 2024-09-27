import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate} from 'react-router-dom';

const Auth = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    return isAuthenticated ? children : <Navigate to="/" />;
}

export default Auth;
