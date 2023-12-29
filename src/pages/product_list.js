import Container from "../components/Container";
import Header from "../components/Header";
import { ListContext } from "../contexts/List";
import "../globals.css";
import { useState, useEffect } from "react";

import api from "../api/api";

function ProductList() {
  const [productList, setProductList] = useState([]);

  // ROTA GET EM: https://jsonplaceholder.typicode.com/photos
  // useEffect rodando um get com axios (EM UMA LINHA DE CODIGO)
  // setProductList(RESPOSTA DO AXIOS)

  const getProductList = async () => {
    await api.get("/photos").then((response) => {
      setProductList(response.data);
    });
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <ListContext.Provider value={{ productList, setProductList }}>
      <Container>
        <Header />
      </Container>
    </ListContext.Provider>
  );
}

export default ProductList;
