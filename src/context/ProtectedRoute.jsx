import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirect non-authenticated users to the login page safely
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;