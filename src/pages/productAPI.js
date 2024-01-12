/* eslint-disable react-hooks/rules-of-hooks */
import { useParams } from "react-router-dom";

import Container from "../components/Container";
import Header from "../components/Header";

import CartModal from "../components/CartModal";

import "../globals.css";

function ProductAPI() {
  return (
    <Container>
      <Header />
      <CartModal />
    </Container>
  );
}

export default ProductAPI;
