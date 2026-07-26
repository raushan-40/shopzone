import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/CartPage.css';

const CartPage = () => {
  const { cartState, dispatch } = useCart();
  const navigate = useNavigate();
  const { cartItems } = cartState;

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleIncrease = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: quantity + 1 } });
  };

  const handleDecrease = (id, quantity) => {
    if (quantity > 1) {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: quantity - 1 } });
    }
  };

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty-container" role="main" aria-live="polite">
        <div className="cart-empty-illustration" aria-hidden="true">🛒</div>
        <h2>Your cart is currently empty</h2>
        <p className="cart-empty-msg">Looks like you haven't added anything to your cart yet.</p>
        <button 
          className="continue-shopping-btn" 
          onClick={() => navigate('/shop')}
          aria-label="Continue shopping button"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-page-container" role="main" aria-label="Shopping Cart">
      <h1 className="cart-heading">Shopping Cart</h1>
      
      <div className="cart-layout">
        <div className="cart-items-list" aria-label="List of cart items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.thumbnail} alt={`Image of ${item.title}`} className="cart-item-image" />
              
              <div className="cart-item-details">
                <h3 className="cart-item-title">{item.title}</h3>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
              </div>

              <div className="cart-item-actions">
                <div className="quantity-controls" aria-label={`Adjust quantity for ${item.title}`}>
                  <button 
                    onClick={() => handleDecrease(item.id, item.quantity)}
                    disabled={item.quantity <= 1}
                    aria-label="Decrease quantity by 1"
                  >
                    -
                  </button>
                  <span className="item-quantity" aria-label={`Current quantity: ${item.quantity}`}>
                    {item.quantity}
                  </span>
                  <button 
                    onClick={() => handleIncrease(item.id, item.quantity)}
                    aria-label="Increase quantity by 1"
                  >
                    +
                  </button>
                </div>
                
                <p className="cart-item-subtotal">
                  Subtotal: ${(item.price * item.quantity).toFixed(2)}
                </p>
                
                <button 
                  className="remove-item-btn" 
                  onClick={() => handleRemove(item.id)}
                  aria-label={`Remove ${item.title} from cart completely`}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary" aria-label="Cart order summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Total Items:</span>
            <span>{totalItems}</span>
          </div>
          <div className="summary-row total-row">
            <span>Total Price:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button 
            className="checkout-placeholder-btn"
            onClick={() => navigate('/checkout')}
            aria-label="Proceed securely to checkout process"
          >
            Proceed to Checkout
          </button>
          <button 
            className="continue-shopping-btn" 
            onClick={() => navigate('/shop')}
            aria-label="Go back to shop page to continue shopping"
            style={{ width: '100%', marginTop: '1rem', background: '#e9ecef', color: '#495057' }}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;