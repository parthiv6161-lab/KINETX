"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "kinetix-cart-v1";
const WISHLIST_KEY = "kinetix-wishlist-v1";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch {
      setItems([]);
    }
    try {
      const raw = window.localStorage.getItem(WISHLIST_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setWishlist(parsed);
      }
    } catch {
      setWishlist([]);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // storage unavailable
    }
  }, [items, ready]);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
    } catch {
      // storage unavailable
    }
  }, [wishlist, ready]);

  const addItem = (product, size = "43", quantity = 1) => {
    const key = `${product.id}::${size}`;
    setItems((current) => {
      const existing = current.find((item) => item.key === key);
      if (existing) {
        return current.map((item) =>
          item.key === key
            ? { ...item, qty: Math.min(9, item.qty + quantity) }
            : item
        );
      }
      return [
        ...current,
        {
          key,
          productId: product.id,
          title: product.title,
          serial: product.serial,
          price: product.price,
          size,
          qty: Math.min(9, Math.max(1, quantity)),
          gift: false,
          img: product.img,
          alt: product.alt,
          category: product.category,
        },
      ];
    });
  };

  const updateQuantity = (key, delta) => {
    setItems((current) =>
      current.map((item) =>
        item.key === key
          ? { ...item, qty: Math.min(9, Math.max(1, item.qty + delta)) }
          : item
      )
    );
  };

  const removeItem = (key) => {
    setItems((current) => current.filter((item) => item.key !== key));
  };

  const toggleGift = (key, gift) => {
    setItems((current) =>
      current.map((item) => (item.key === key ? { ...item, gift } : item))
    );
  };

  const clearCart = () => setItems([]);

  const toggleWishlist = (productId) => {
    setWishlist((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]
    );
  };

  const isWishlisted = (productId) => wishlist.includes(productId);

  const value = useMemo(() => {
    const count = items.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
    return {
      items,
      count,
      subtotal,
      wishlist,
      wishlistCount: wishlist.length,
      addItem,
      updateQuantity,
      removeItem,
      toggleGift,
      clearCart,
      toggleWishlist,
      isWishlisted,
    };
  }, [items, wishlist]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
