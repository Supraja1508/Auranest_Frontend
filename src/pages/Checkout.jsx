import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import styles from '../styles/Checkout.module.css';
import Swal from 'sweetalert2';
import { useNavigate, useLocation } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();

  const buyNowProduct = location.state?.product || null;
  const [buyNowQty, setBuyNowQty] = useState(1);

  const activeCart = buyNowProduct
    ? [{ ...buyNowProduct, quantity: buyNowQty }]
    : cartItems;

  const subtotal = activeCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [customer, setCustomer] = useState({
    name: '', email: '', phone: '',
    door: '', street: '', city: '', state: '', country: '', pincode: '',
    payment: 'card',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setCustomer(prev => ({ ...prev, [name]: value }));
  };

  const generateOrderId = () => `ORD-${Date.now()}`;

  const handleSubmit = e => {
    e.preventDefault();

    Swal.fire({
      title: 'Confirm Order?',
      text: 'Do you want to place this order?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, place it!',
    }).then(result => {
      if (result.isConfirmed) {
        const orderId = generateOrderId();

        if (!buyNowProduct) {
          setCartItems([]);
          localStorage.removeItem('auranest_cart');
        }

        setCustomer({
          name: '', email: '', phone: '',
          door: '', street: '', city: '', state: '', country: '', pincode: '',
          payment: 'card',
        });

        Swal.fire({
          title: 'Order Confirmed!',
          html: `Your order has been placed successfully.<br><strong>Order ID: ${orderId}</strong>`,
          icon: 'success',
          confirmButtonText: 'Continue Shopping',
        }).then(() => {
          navigate('/');
        });
      }
    });
  };

  return (
    <div className={styles.checkoutPage}>
      <h1>Checkout</h1>
      <div className={styles.container}>
        {/* Product Summary */}
        <section className={styles.summary}>
          <h2>Review Your Order</h2>
          {activeCart.length === 0 ? (
            <p>No items in your cart.</p>
          ) : (
            <>
              {activeCart.map(item => (
                <div key={item.id} className={styles.item}>
                  <img src={item.image} alt={item.name} />
                  <div className={styles.info}>
                    <p>{item.name}</p>
                    {buyNowProduct ? (
                      <div className={styles.quantity}>
                        <button onClick={() => setBuyNowQty(q => Math.max(1, q - 1))}>-</button>
                        <span>{buyNowQty}</span>
                        <button onClick={() => setBuyNowQty(q => q + 1)}>+</button>
                      </div>
                    ) : (
                      <p>Quantity: {item.quantity}</p>
                    )}
                    <p>₹{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
              <div className={styles.total}>Total: ₹{subtotal.toFixed(2)}</div>
            </>
          )}
        </section>

        {/* Customer & Address Form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Customer Information</h2>
          <input name="name" placeholder="Full Name" value={customer.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={customer.email} onChange={handleChange} required />
          <input name="phone" placeholder="Phone Number" value={customer.phone} onChange={handleChange} required />

          <h2>Shipping Address</h2>
          <input name="door" placeholder="Door No" value={customer.door} onChange={handleChange} required />
          <input name="street" placeholder="Street" value={customer.street} onChange={handleChange} required />
          <input name="city" placeholder="City" value={customer.city} onChange={handleChange} required />
          <input name="state" placeholder="State" value={customer.state} onChange={handleChange} required />
          <input name="country" placeholder="Country" value={customer.country} onChange={handleChange} required />
          <input name="pincode" placeholder="Pin Code" value={customer.pincode} onChange={handleChange} required />

          <h2>Payment Method</h2>
          <div className={styles.paymentOptions}>
            <label>
              <input type="radio" name="payment" value="card" checked={customer.payment === 'card'} onChange={handleChange} />
              💳 Credit/Debit Card
            </label>
            <label>
              <input type="radio" name="payment" value="upi" checked={customer.payment === 'upi'} onChange={handleChange} />
              📱 UPI
            </label>
            <label>
              <input type="radio" name="payment" value="cod" checked={customer.payment === 'cod'} onChange={handleChange} />
              🤝 Cash on Delivery
            </label>
          </div>

          <button type="submit" className={styles.confirm}>Confirm Order</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
