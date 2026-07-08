import { Link } from "react-router-dom";

function Cart({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart
}) {
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <section className="section page cart-page">
        <div className="section-heading">
          <span className="tag">Your Cart</span>
          <h2>Your cart is empty</h2>
          <p>Add products to your cart and they will appear here.</p>
        </div>

        <Link to="/products" className="btn primary-btn">
          Shop Products
        </Link>
      </section>
    );
  }

  return (
    <section className="section page cart-page">
      <div className="section-heading">
        <span className="tag">Your Cart</span>
        <h2>Shopping Cart</h2>
        <p>Review your selected products before checkout.</p>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-info">
                <span className="category">{item.category}</span>
                <h3>{item.name}</h3>
                <p>₹{item.price.toLocaleString("en-IN")}</p>
              </div>

              <div className="quantity-box">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>

              <div className="cart-subtotal">
                ₹{(item.price * item.quantity).toLocaleString("en-IN")}
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <aside className="cart-summary">
          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>Items</span>
            <strong>{cartItems.length}</strong>
          </div>

          <div className="summary-row">
            <span>Total Quantity</span>
            <strong>
              {cartItems.reduce((total, item) => total + item.quantity, 0)}
            </strong>
          </div>

          <div className="summary-row total-row">
            <span>Total Amount</span>
            <strong>₹{totalAmount.toLocaleString("en-IN")}</strong>
          </div>

          <button className="btn primary-btn checkout-btn">
            Checkout
          </button>

          <button className="clear-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </aside>
      </div>
    </section>
  );
}

export default Cart;