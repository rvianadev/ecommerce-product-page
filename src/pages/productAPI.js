import Container from "../components/Container";
import Header from "../components/Header";

import CartModal from "../components/CartModal";
import { CartProvider } from "../contexts/Cart";

import "../globals.css";

function ProductAPI() {
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
