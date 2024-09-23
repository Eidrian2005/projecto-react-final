import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// Componente de Ruta Protegida usando children
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('Autenticado') !== null;

  return isAuthenticated ? children : <Navigate to="/Login" />;
};

export default ProtectedRoute;

