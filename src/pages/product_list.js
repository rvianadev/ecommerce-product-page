import { useState, useEffect } from "react";

import Container from "../components/Container";
import Header from "../components/Header";
import { ListContext } from "../contexts/List";
import ProductListWrapper from "../components/ProductListWrapper";

import "../globals.css";

import api from "../api/api";

function ProductList() {
  // ROTA GET EM: https://jsonplaceholder.typicode.com/photos
  // useEffect rodando um get com axios (EM UMA LINHA DE CODIGO)
  // setProductList(RESPOSTA DO AXIOS)

  const [productList, setProductList] = useState([]);

  const getProductList = async () => {
    await api.get().then((response) => {
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
        <ProductListWrapper>
          {productList.map((value, index) => {
            return (
              <div key={index}>
                <h2>{value.title}</h2>
                <a src={value.url} key={index}>
                  Clique aqui
                </a>
                <img src={value.thumbnailUrl} />
              </div>
            );
          })}
        </ProductListWrapper>
      </Container>
    </ListContext.Provider>
  );
}

export default ProductList;
