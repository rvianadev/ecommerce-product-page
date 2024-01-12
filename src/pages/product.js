import Container from "../components/Container";
import Header from "../components/Header";
import ProductSection from "../components/ProductSection";
import CartModal from "../components/CartModal";

import "../globals.css";

function Product() {
  return (
    <Container>
      <Header />
      <CartModal />
      <ProductSection />
    </Container>
  );
}

export default Product;
