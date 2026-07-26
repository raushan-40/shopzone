export const initialState = {
  cartItems: []
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex >= 0) {
        // Item already exists, increase quantity
        const updatedItems = [...state.cartItems];
        updatedItems[existingItemIndex].quantity += action.payload.quantity || 1;
        
        return {
          ...state,
          cartItems: updatedItems
        };
      } else {
        // Item does not exist, add it
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            { ...action.payload, quantity: action.payload.quantity || 1 }
          ]
        };
      }
    }
    case 'REMOVE_FROM_CART': {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload)
      };
    }
    case 'UPDATE_QUANTITY': {
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
    }
    case 'CLEAR_CART': {
      return {
        ...state,
        cartItems: []
      };
    }
    default:
      return state;
  }
};

export default cartReducer;