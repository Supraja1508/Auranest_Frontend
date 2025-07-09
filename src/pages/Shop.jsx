import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Shop.module.css';
import { CartContext } from '../context/CartContext';
import products from '../data/products';

const Shop = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products based on search input (case-insensitive)
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBuyNow = (product) => {
    navigate('/checkout', {
      state: { product: { ...product, quantity: 1 } },
    });
  };

  return (
    <div className={styles.shop}>
      <header className={styles.header}>
        <h1>Shop All Products</h1>
        <input
          type="text"
          placeholder="Search products..."
          className={styles.search}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      <section className={styles.grid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className={styles.productCard}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>₹{product.price.toFixed(2)}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
                className={styles.addToCartBtn}
              >
                Add to Cart
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleBuyNow(product);
                }}
                className={styles.buyNowBtn}
              >
                Buy Now
              </button>
            </div>
          ))
        ) : (
          <p className={styles.noResults}>No products match "{searchTerm}"</p>
        )}
      </section>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} AuraNest. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Shop;
