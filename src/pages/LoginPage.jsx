import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    // Redirect straight to cart per requirements
    navigate('/cart');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login</h1>
        <p>Proceed with a guest account to continue checkout.</p>
        <button className="login-btn" onClick={handleLogin}>
          Login as Guest
        </button>
      </div>
    </div>
  );
};

export default LoginPage;