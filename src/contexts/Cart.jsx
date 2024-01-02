import { createContext, useState } from "react";

const CartData = {
  isOpen: false,
};

const CartContextData = {
  cart: false,
  toggleCart: (CartData) => {},
};

export const CartContext = createContext(CartContextData);

export function CartProvider({ children }) {
  const [cartActive, setCartActive] = useState(CartData);

  const toggleCart = () => {
    setCartActive(!cartActive.isOpen);
  };

  return (
    <CartContext.Provider value={{ cartActive, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
}
