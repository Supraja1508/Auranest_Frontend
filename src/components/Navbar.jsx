import { useContext } from 'react';
import { FaShoppingCart, FaBell, FaSearch, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <img
          src="https://github.com/ShivaHariny07/Auranest_Frontend/blob/main/pictures/logo.jpg?raw=true"
          alt="Auranest_Frontend Logo"
          className={styles.logoImage}
        />
        <span className={styles.logoText}>Auranest_Frontend</span>
      </div>

      <nav className={styles.navLinks}>
        <Link to="/Auranest_Frontend">Home</Link>
        <Link to="/Auranest_Frontend/shop">Shop</Link>
        <Link to="/Auranest_Frontend/contact">Contact</Link>
        <Link to="/Auranest_Frontend/blog">Blog</Link>
        <Link to="/Auranest_Frontend/about">About</Link>
      </nav>

      <div className={styles.actions}>

        <FaBell className={styles.icon} />
        <Link to="/Auranest_Frontend/cart" className={styles.cartIconWrapper}>
          <FaShoppingCart className={styles.icon} />
          {cartCount > 0 && <span className={styles.cartCount}>{cartCount}</span>}
        </Link>
        <Link to="/Auranest_Frontend/login" className={styles.cartIconWrapper}>
        <FaUser className={styles.icon} />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
