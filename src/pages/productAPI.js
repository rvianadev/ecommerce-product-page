import { useParams } from "react-router-dom";

import Container from "../components/Container";
import Header from "../components/Header";

import CartModal from "../components/CartModal";
import { CartProvider } from "../contexts/Cart";
import api from "../api/api";

import "../globals.css";

function ProductAPI() {
  const { productId } = useParams();

  const getProduct = async () => {
    api.get();
  };

  return (
    <Container>
      <CartProvider>
        <Header />
        <CartModal />
      </CartProvider>
    </Container>
  );
}

export default ProductAPI;
