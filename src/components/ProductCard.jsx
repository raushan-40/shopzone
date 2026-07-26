import { useNavigate } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    // Navigate to product detail page when the card or button is clicked
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-card" onClick={handleNavigate}>
      <img src={product.thumbnail} alt={product.title} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button 
          className="view-details-btn" 
          onClick={(e) => {
            e.stopPropagation(); // Prevents firing the card's click event twice
            handleNavigate();
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;