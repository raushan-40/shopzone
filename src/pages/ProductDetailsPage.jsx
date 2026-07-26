import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import { fetchProductById } from '../services/productService';
import { useCart } from '../context/CartContext';
import '../styles/ProductDetailsPage.css';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        
        if (!id) {
          throw new Error('Invalid product ID');
        }
        
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (err) {
        setError('Failed to load product details. Please make sure the product exists.');
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch({ type: 'ADD_TO_CART', payload: product });
    }
  };

  if (loading) return <Loader />;

  if (error) return <ErrorMessage message={error} />;

  if (!product) return null;

  return (
    <div className="product-details-container" role="main" aria-label={`Details for ${product.title}`}>
      <button 
        className="back-btn" 
        onClick={() => navigate('/shop')}
        aria-label="Navigate back to shop page"
      >
        &larr; Back to Shop
      </button>
      
      <div className="product-details-content">
        <div className="product-details-image">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        
        <div className="product-details-info">
          <h1 className="details-title">{product.title}</h1>
          <p className="details-brand"><strong>Brand:</strong> {product.brand || 'No brand specified'}</p>
          <p className="details-category"><strong>Category:</strong> {product.category}</p>
          
          <p className="details-description">{product.description}</p>
          <p className="details-price">${product.price.toFixed(2)}</p>
          
          <div className="details-stats">
            <span className="details-rating" aria-label={`Rating ${product.rating} out of 5`}>
              ⭐ {product.rating} / 5
            </span>
            <span className="details-stock" aria-label={`${product.stock} items remaining in stock`}>
              📦 Stock: {product.stock} left
            </span>
          </div>

          <button 
            className="add-to-cart-btn" 
            onClick={handleAddToCart}
            aria-label={`Add ${product.title} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;