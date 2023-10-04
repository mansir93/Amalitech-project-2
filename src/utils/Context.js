import React, { createContext, useState, useEffect } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("Myshopcart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Myshopcart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item, qty = 1) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, qty: cartItem.qty + qty }
            : cartItem
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...item, qty: qty }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQty) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, qty: newQty } : item
      )
    );
  };

  const increaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Context.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
