const CartItem = ({ thumbnailUrl, title, price, qty, addToCart }) => {
  return (
    <>
      <img src={thumbnailUrl} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small>Qty: {qty}</small>
        <button onClick={addToCart}> + </button>
      </footer>
    </>
  );
};

export default CartItem;
