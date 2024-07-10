import { createContext } from 'react';
import { useCartReducer } from '../hooks/useCartReducer';

// 1 create context
export const CartContext = createContext();

// 2 create provider
export function CartProvider({ children }) {
  const { addToCart, clearCart, removeFromCart, state } = useCartReducer();

  return (
    <CartContext.Provider
      value={{ cart: state, removeFromCart, addToCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
