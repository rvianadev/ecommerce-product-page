/* eslint-disable react-hooks/rules-of-hooks */
import { useParams } from "react-router-dom";
import { useState } from "react";

import Container from "../components/Container";
import Header from "../components/Header";

import CartModal from "../components/CartModal";
import api from "../api/api";

import "../globals.css";

function ProductAPI() {
  const productId = useParams();

  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    await api.get(`photos?id=${productId}`).then((response) => {
      setProduct(response.data);
    });
  };

  return (
    <Container>
      <Header />
      <CartModal />
    </Container>
  );
}

export default ProductAPI;
