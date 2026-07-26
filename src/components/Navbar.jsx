import { NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const { cartState } = useCart();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  
  const totalQuantity = cartState.cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="navbar-brand">
        <NavLink to="/" aria-label="ShopZone Home">ShopZone</NavLink>
      </div>
      <ul className="navbar-links" role="menu">
        <li role="none">
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            aria-label="Go to Home Page"
            role="menuitem"
          >
            Home
          </NavLink>
        </li>
        <li role="none">
          <NavLink 
            to="/shop" 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            aria-label="Browse Shop"
            role="menuitem"
          >
            Shop
          </NavLink>
        </li>
        <li role="none">
          <NavLink 
            to="/contact" 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            aria-label="Contact Us"
            role="menuitem"
          >
            Contact
          </NavLink>
        </li>
        <li role="none">
          <NavLink 
            to="/cart" 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            aria-label={`View Cart, containing ${totalQuantity} items`}
            role="menuitem"
          >
            Cart ({totalQuantity})
          </NavLink>
        </li>
        <li role="none">
          {!isAuthenticated ? (
            <NavLink 
              to="/login" 
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              aria-label="Login as Guest"
              role="menuitem"
            >
              Login
            </NavLink>
          ) : (
            <button 
              className="logout-btn" 
              onClick={handleLogout}
              aria-label="Logout securely"
              role="menuitem"
            >
              Logout
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;