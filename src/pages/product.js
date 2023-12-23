import Container from "../components/Container";
import Header from "../components/Header";
import ProductSection from "../components/ProductSection";
import "../globals.css";
/* import { useParams } from "react-router-dom"; */

function Product() {
  /*   const { id: product_id } = useParams(); */

  return (
    <Container>
      <Header />
      <ProductSection />
    </Container>
  );
}

export default Product;
