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
    // We use a unique cartId that combines product id and selected weight
    const cartId = `${product.id}-${product.selectedWeight}`;
    
    setCartItems(prev => {
      const existing = prev.find(item => item.cartId === cartId);
      if (existing) {
        return prev.map(item =>
          item.cartId === cartId ? { ...item, qty: item.qty + qty } : item
        );
      }
      return [...prev, { ...product, cartId, qty }];
    });
    setIsCartOpen(true);
  };

  const updateQty = (cartId, amount) => {
    setCartItems(prev => prev.map(item => {
      if (item.cartId === cartId) {
        const newQty = item.qty + amount;
        return { ...item, qty: newQty > 0 ? newQty : 1 };
      }
      return item;
    }));
  };

  const removeFromCart = (cartId) => {
    setCartItems(prev => prev.filter(item => item.cartId !== cartId));
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
