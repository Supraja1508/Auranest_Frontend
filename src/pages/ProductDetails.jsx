import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../styles/ProductDetails.module.css';
import { CartContext } from '../context/CartContext';
import products from '../data/products';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  const handleAddToCart = () => addToCart(product);
  const handleBuyNow = () => navigate('/checkout', { state: { product: { ...product, quantity: 1 } } });

  return (
    <div className={styles.details}>
      <img src={product.image} alt={product.name} />
      <div className={styles.info}>
        <h1>{product.name}</h1>
        <p className={styles.price}>₹{product.price.toFixed(2)}</p>
        <p className={styles.description}>
          This is a top-quality product known for its excellence and customer satisfaction.
        </p>
        <div className={styles.actions}>
          <button onClick={handleAddToCart}>Add to Cart</button>
          <button className={styles.buyNowBtn} onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
