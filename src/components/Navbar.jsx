import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const { cartState } = useCart();
  
  // Calculate total items quantity directly from context state
  const totalQuantity = cartState.cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/">ShopZone</NavLink>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/shop" 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/cart" 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Cart ({totalQuantity})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;