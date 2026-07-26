import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import { fetchProducts } from '../services/productService';
import '../styles/ShopPage.css';

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError('Failed to load products. Please check your connection and try again.');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="shop-container" role="main" aria-label="Shop Page">
      <h1>Our Shop</h1>
      <p className="shop-subtitle">Browse through our collection of premium quality items.</p>
      
      {loading && <Loader />}
      
      {error && <ErrorMessage message={error} />}
      
      {!loading && !error && products.length > 0 && (
        <div className="products-grid" aria-label="Product list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopPage;