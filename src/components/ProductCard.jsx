import { useNavigate } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div 
      className="product-card" 
      onClick={handleNavigate}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${product.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleNavigate();
        }
      }}
    >
      <img 
        src={product.thumbnail} 
        alt={product.title} 
        className="product-image" 
        loading="lazy" 
      />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button 
          className="view-details-btn" 
          aria-label={`View full details of ${product.title}`}
          tabIndex={-1} // Handled by outer card accessible wrapper safely
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;