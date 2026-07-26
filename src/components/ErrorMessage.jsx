import { useNavigate } from 'react-router-dom';
import '../styles/ErrorMessage.css';

const ErrorMessage = ({ message }) => {
  const navigate = useNavigate();
  
  return (
    <div className="error-container" role="alert" aria-live="assertive">
      <h2 className="error-heading">Oops! Something went wrong.</h2>
      <p className="error-text">{message}</p>
      <button 
        className="error-back-btn" 
        onClick={() => navigate('/shop')} 
        aria-label="Go back to the shop"
      >
        &larr; Back to Shop
      </button>
    </div>
  );
};

export default ErrorMessage;