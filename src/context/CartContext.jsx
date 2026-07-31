import { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Load from localStorage if available
    const savedCart = localStorage.getItem('peyek_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('peyek_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, qty = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + qty } : item
        );
      }
      return [...prev, { ...product, qty }];
    });
    setIsCartOpen(true);
  };

  const updateQty = (id, amount) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.qty + amount;
        return { ...item, qty: newQty > 0 ? newQty : 1 };
      }
      return item;
    }));
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <CartContext.Provider value={{
      cartItems,
      isCartOpen,
      addToCart,
      updateQty,
      removeFromCart,
      clearCart,
      toggleCart,
      setIsCartOpen
    }}>
      {children}
    </CartContext.Provider>
  );
};
