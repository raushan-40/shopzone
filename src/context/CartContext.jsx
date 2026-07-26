import { createContext, useContext, useReducer, useEffect } from 'react';
import cartReducer, { initialState } from './CartReducer';

const CartContext = createContext();

// Lazy initialization function to safely load from localStorage
const initializeState = (defaultState) => {
  try {
    const storedState = localStorage.getItem('shopzone_cart_state');
    return storedState ? JSON.parse(storedState) : defaultState;
  } catch (error) {
    console.error('Failed to parse cart state from localStorage. Restoring default.', error);
    return defaultState;
  }
};

export const CartProvider = ({ children }) => {
  // Pass initializeState as the third argument to useReducer for initial load
  const [state, dispatch] = useReducer(cartReducer, initialState, initializeState);

  // Sync state to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('shopzone_cart_state', JSON.stringify(state));
    } catch (error) {
      console.error('Failed to save cart state to localStorage.', error);
    }
  }, [state]);

  return (
    <CartContext.Provider value={{ cartState: state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};