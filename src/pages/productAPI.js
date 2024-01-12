import { useState } from "react";
import { useParams } from "react-router-dom";

import Container from "../components/Container";
import Header from "../components/Header";

import CartModal from "../components/CartModal";
import api from "../api/api";

import "../globals.css";

function ProductAPI() {
  const { productId } = useParams();
  const [url, setUrl] = useState(null);

  const productURL = async () => {
    try {
      const response = await api.get(`photos?id=${productId}`);
      return response.data[0].url;
    } catch (error) {
      console.error("Erro ao obter URL do produto:", error);
      return null;
    }
  };

  const fetchData = async () => {
    const fetchedUrl = await productURL();
    setUrl(fetchedUrl);
  };

  fetchData();

  return (
    <Container>
      <Header />
      <CartModal />

      {url && (
        <div
          style={{
            paddingTop: "5.62rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 style={{ marginBottom: "2rem" }}>Product {productId}</h1>
          <img
            src={url}
            alt="Imagem do produto"
            style={{ borderRadius: "0.9375rem" }}
          />
        </div>
      )}
    </Container>
  );
}

export default ProductAPI;
