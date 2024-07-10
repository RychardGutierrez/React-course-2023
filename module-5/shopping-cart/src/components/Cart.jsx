import { useId } from 'react';
import { CartIcon, ClearCartIcon } from './icons';

import './Cart.css';
import { useCart } from '../hooks/useCart';
import CartItem from './CartItem';

const Cart = () => {
  const cartCheckBoxId = useId();
  const { clearCart, cart, addToCart } = useCart();
  return (
    <>
      <label className="cart-button" htmlFor={cartCheckBoxId}>
        <CartIcon />
      </label>
      <input
        type="checkbox"
        id={cartCheckBoxId}
        className="cart-checkbox"
        hidden
      />
      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <CartItem
                thumbnailUrl={product.thumbnail}
                title={product.title}
                price={product.price}
                qty={product.quantity}
                addToCart={() => addToCart(product)}
              />
            </li>
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};

export default Cart;
