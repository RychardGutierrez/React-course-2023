import { useCart } from '../hooks/useCart';
import './Products.css';
import { AddToCartIcon, RemoveFromCartIcon } from './icons';

const Products = ({ products }) => {
  const { addToCart, cart, removeFromCart } = useCart();

  const isProductInCart = (product) =>
    cart.some((item) => item.id === product.id);

  return (
    <main className="products">
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  style={{
                    backgroundColor: isProductInCart(product) ? 'red' : '#09f',
                  }}
                  onClick={() =>
                    isProductInCart(product)
                      ? removeFromCart(product)
                      : addToCart(product)
                  }
                >
                  {isProductInCart(product) ? (
                    <RemoveFromCartIcon />
                  ) : (
                    <AddToCartIcon />
                  )}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Products;
