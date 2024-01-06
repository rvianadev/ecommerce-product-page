import { createContext, useState } from "react";

const CartContextData = {
  isOpen: false,
  toggleCart: () => {},
};

export const CartContext = createContext(CartContextData);

export function CartProvider({ children }) {
  const [isOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!isOpen);
  };

  return (
    <CartContext.Provider value={{ isOpen, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
}
