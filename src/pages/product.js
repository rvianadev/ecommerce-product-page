import Container from "../components/Container";
import Header from "../components/Header";
import ProductSection from "../components/ProductSection";
import CartModal from "../components/CartModal";
import { CartProvider } from "../contexts/Cart";

import { useContext, useEffect } from "react";

import { CartContext } from "../contexts/Cart";

import "../globals.css";
/* import { useParams } from "react-router-dom"; */

function Product() {
  /*   const { id: product_id } = useParams(); */

  const { isOpen } = useContext(CartContext);

  // useEffect(() => {
  //   console.log(isOpen);
  // }, [isOpen]);

  return (
    <Container>
      <CartProvider>
        <Header />
        <CartModal />
      </CartProvider>
      <ProductSection />
    </Container>
  );
}

export default Product;
