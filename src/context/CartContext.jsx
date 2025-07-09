import React, { createContext, useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('auranest_cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Save cart to localStorage on every update
  useEffect(() => {
    localStorage.setItem('auranest_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Add product to cart
  const addToCart = (product) => {
    setCartItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      const updatedCart = exists
        ? prev.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prev, { ...product, quantity: 1 }];

      Swal.fire({
        title: 'Added to Cart!',
        text: `"${product.name}" has been added to your cart.`,
        icon: 'success',
        timer: 2000,
        showConfirmButton: false,
      });

      return updatedCart;
    });
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Update quantity
  const updateQuantity = (id, amount) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + amount, 1) }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        setCartItems // ✅ Exposed for Checkout reset
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
