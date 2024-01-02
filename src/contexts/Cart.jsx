import { createContext } from "react";

const CartData = {
  isShow: false,
};

const CartContext = createContext(CartData);

export default CartContext;
