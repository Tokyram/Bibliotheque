import { jwtDecode } from 'jwt-decode';
import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    // Rediriger vers la page de connexion si aucun token n'est trouvé
    return <Navigate to="/login" replace />;
  }
  try {
    const decodedToken: { exp: number } = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (decodedToken.exp < currentTime) {
      return <Navigate to="/login" replace />;
    }
  } catch (error) {
    console.error('Erreur lors du décodage du token', error);
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;