import React, { useContext } from 'react';
import styles from '../styles/Cart.module.css';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className={styles.cartPage}>
      <h1 className={styles.title}>Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className={styles.emptyState}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="Empty Cart"
            className={styles.emptyImage}
          />
          <h2>Your cart is empty</h2>
          <p>Looks like you haven’t added anything yet.</p>
          <Link to="/shop">
            <button className={styles.shopBtn}>Start Shopping</button>
          </Link>
        </div>
      ) : (
        <div className={styles.cartGrid}>
          {/* Cart Items */}
          <div className={styles.cartItems}>
            {cartItems.map(item => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.image} alt={item.name} />
                <div className={styles.details}>
                  <h3>{item.name}</h3>
                  <p>₹{item.price.toFixed(2)}</p>
                  <div className={styles.quantity}>
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
                <div className={styles.total}>
                  <p>₹{(item.price * item.quantity).toFixed(2)}</p>
                  <button onClick={() => removeFromCart(item.id)} className={styles.remove}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className={styles.summary}>
            <h2>Order Summary</h2>
            <div className={styles.summaryItem}>
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className={styles.summaryItem}>
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <hr />
            <div className={styles.summaryItem}>
              <strong>Total</strong>
              <strong>₹{subtotal.toFixed(2)}</strong>
            </div>
            <Link to="/checkout">
              <button className={styles.checkout}>Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
