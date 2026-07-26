import { useNavigate } from 'react-router-dom';
import '../styles/NotFoundPage.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container" role="main" aria-label="Page not found">
      <h1 className="not-found-code">404</h1>
      <h2 className="not-found-heading">Page Not Found</h2>
      <p className="not-found-text">The page you are looking for doesn't exist or has been moved.</p>
      <button 
        className="not-found-btn" 
        onClick={() => navigate('/')}
        aria-label="Return to home page"
      >
        Return Home
      </button>
    </div>
  );
};

export default NotFoundPage;