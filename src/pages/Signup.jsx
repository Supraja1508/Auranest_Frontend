import React, { useState } from 'react';
import styles from '../styles/Auth.module.css'; // Importing as CSS module
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch('https://day28.onrender.com/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Account Created!',
        text: data.message,
        showConfirmButton: false,
        timer: 2000,
      });
      setForm({ name: '', email: '', password: '' });
      setTimeout(() => {
          navigate('/AuraNest/login'); // ✅ Redirect after sweet alert
        }, 2000); // Wait for sweet alert timeout
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: data.message,
      });
    }
  } catch (error) {
    console.error('Signup error:', error);
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: 'Something went wrong. Please try again.',
    });
  }
};


  return (
    <div className={styles.authPage}>
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label>Name</label>
        <input
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          name="password"
          type="password"
          required
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit" className={styles.authButton}>Create Account</button>
        <p className={styles.authSwitch}>
          Already have an account? <a href="/login">Log in</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
