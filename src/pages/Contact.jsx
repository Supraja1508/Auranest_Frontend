import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const [faqState, setFaqState] = useState({});

  const toggleFAQ = (index) => {
    setFaqState((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const contactInfo = [
    {
      title: 'Visit Our Store',
      text: '123 Beauty Street, Fashion District\nMumbai, Maharashtra 400001\nIndia',
    },
    {
      title: 'Call Us',
      text: 'Phone: +91 12345 67890\nToll Free: 1800-123-4567\nMon-Sat: 9:00 AM - 8:00 PM',
    },
    {
      title: 'Email Us',
      text: 'General: info@auranest.shop\nSupport: support@auranest.shop\nBusiness: business@auranest.shop',
    },
    {
      title: 'Business Hours',
      text: 'Monday - Friday: 9:00 AM - 8:00 PM\nSaturday: 10:00 AM - 6:00 PM\nSunday: 11:00 AM - 5:00 PM',
    },
  ];

  const faqs = [
    ['How long does shipping take?', 'Standard shipping takes 3-5 business days. Express: 1-2 days.'],
    ['What is your return policy?', '30-day return policy for unused items in original packaging.'],
    ['Do you offer product samples?', 'Yes! We include free samples with every order.'],
  ];

  return (
    <div className={styles.contactPage}>
      <header className={styles.contactHeader}>
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </header>

      <div className={styles.contactGrid}>
        <div className={styles.formContainer}>
          <h2>Send us a Message</h2>
          <form className={styles.form}>
            <div className={styles.contactRow}>
              <div>
                <label>First Name</label>
                <input type="text" required />
              </div>
              <div>
                <label>Last Name</label>
                <input type="text" required />
              </div>
            </div>
            <label>Email Address</label>
            <input type="email" required />

            <label>Phone Number</label>
            <input type="tel" />

            <label>Subject</label>
            <select required>
              <option value="">Select a subject</option>
              <option>General Inquiry</option>
              <option>Product Question</option>
              <option>Order Support</option>
              <option>Partnership</option>
              <option>Other</option>
            </select>

            <label>Message</label>
            <textarea rows="5" placeholder="Tell us how we can help you..." required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className={styles.infoCards}>
          {contactInfo.map((item, idx) => (
            <div key={idx} className={styles.infoCard}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <section className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>
        {faqs.map(([question, answer], index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${faqState[index] ? styles.open : ''}`}
          >
            <button onClick={() => toggleFAQ(index)}>
              {question}
              <span>{faqState[index] ? '-' : '+'}</span>
            </button>
            <div className={styles.faqAnswer}>
              {faqState[index] && <p>{answer}</p>}
            </div>
          </div>
        ))}
      </section>

<footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerBrand}>
          <h2>AuraNest</h2>
          <p>Your beauty, our passion. Explore premium cosmetics curated just for you.</p>
        </div>

        <div className={styles.footerLinks}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/blog">Beauty Blog</a></li>
            <li><a href="/contact">Contact</a></li>
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

export default Contact;
