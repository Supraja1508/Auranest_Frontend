import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-creative';
import styles from '../styles/Home.module.css';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import products from '../data/products';


const Home = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleBuyNow = (product) => {
    navigate('/checkout', {
      state: { product: { ...product, quantity: 1 } }
    });
  };

  return (
    <div className={styles.home}>
      

      {/* Hero Slider */}
      <section className={styles.slider}>
        <Swiper
          modules={[EffectCreative, Autoplay]}
          effect="creative"
          autoplay={{ delay: 3500 }}
          loop
          grabCursor
          creativeEffect={{
            prev: { shadow: true, translate: [0, 0, -400] },
            next: { translate: ['100%', 0, 0] },
          }}
          className={styles.swiper}
        >
          <SwiperSlide>
            <img src="https://raw.githubusercontent.com/ShivaHariny07/auranest/main/pictures/hero-1.jpg" alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://raw.githubusercontent.com/ShivaHariny07/auranest/main/pictures/hero-1.jpg" alt="Slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://raw.githubusercontent.com/ShivaHariny07/auranest/main/pictures/hero-1.jpg" alt="Slide 3" />
          </SwiperSlide>
        </Swiper>

        <div className={styles.sliderText}>
          <h1>Welcome to <span>AuraNest</span></h1>
          <p>Your skin deserves the best. Shop natural, cruelty-free beauty essentials.</p>
        </div>
      </section>

      {/* Product Grid */}
      <section id="products" className={styles.products}>
        <h2>Best Sellers</h2>
        <div className={styles.productGrid}>
          {products.map((p) => (
  <div key={p.id} onClick={() => navigate(`/AuraNest/product/${p.id}`)} className={styles.productCard}>
    <img src={p.image} alt={p.name} />
    <h3>{p.name}</h3>
    <p>₹{p.price.toFixed(2)}</p>
    <button onClick={(e) => { e.stopPropagation(); addToCart(p); }}>Add to Cart</button>
    <button onClick={(e) => { e.stopPropagation(); handleBuyNow(p); }} className={styles.buyNowBtn}>Buy Now</button>
  </div>
))}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerBrand}>
            <h2>AuraNest</h2>
            <p>Your beauty, our passion. Explore premium cosmetics curated just for you.</p>
          </div>

          <div className={styles.footerLinks}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/AuraNest/shop">Shop</a></li>
              <li><a href="/AuraNest/about">About Us</a></li>
              <li><a href="/AuraNest/blog">Beauty Blog</a></li>
              <li><a href="/AuraNest/contact">Contact</a></li>
            </ul>
          </div>

          <div className={styles.footerSupport}>
            <h4>Customer Service</h4>
            <ul>
              <li><a href="/faq">FAQs</a></li>
              <li><a href="/shipping">Shipping & Returns</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className={styles.footerSocial}>
            <h4>Follow Us</h4>
            <div className={styles.socialIcons}>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} AuraNest. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
