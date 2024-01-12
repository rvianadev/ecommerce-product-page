import { useEffect, useState } from "react";
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

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUrl = await productURL();
      setUrl(fetchedUrl);
    };

    fetchData();
  }, [productId]);

  return (
    <Container>
      <Header />
      <CartModal />
      {url && <img src={url} alt="Imagem do produto" />}
    </Container>
  );
}

export default ProductAPI;
