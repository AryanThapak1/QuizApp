import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';

const AuthProtectedRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = sessionStorage.getItem("token");

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Route {...rest} element={<Element />} />;
};

export default AuthProtectedRoute;
