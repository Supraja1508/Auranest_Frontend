import React, { useState } from 'react';
import styles from '../styles/Auth.module.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'; // ✅ Use this hook

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate(); // ✅ Hook for navigation

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://day28.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Logged In!',
          text: `Welcome back, ${data.user}`,
          timer: 2000,
          showConfirmButton: false,
        });

        setTimeout(() => {
          navigate('/AuraNest'); // ✅ Redirect after sweet alert
        }, 2000); // Wait for sweet alert timeout

        setForm({ email: '', password: '' });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: data.message,
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'Something went wrong!',
      });
    }
  };

  return (
    <div className={styles.authPage}>
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <h2>Login</h2>
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
        <button type="submit" className={styles.authButton}>Log In</button>
        <p className={styles.authSwitch}>
          Don’t have an account? <a href="/AuraNest/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
