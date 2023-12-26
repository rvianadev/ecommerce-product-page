import { useState } from "react";

import Container from "../components/Container";
import Header from "../components/Header";
import ProductSection from "../components/ProductSection";
import CartModal from "../components/CartModal";
import { CartContext } from "../contexts/Cart";

import "../globals.css";
/* import { useParams } from "react-router-dom"; */

function Product() {
  /*   const { id: product_id } = useParams(); */

  return (
    <Container>
      <CartContext.Provider value={false}>
        <Header />
        <CartModal />
      </CartContext.Provider>
      <ProductSection />
    </Container>
  );
}

export default Product;
