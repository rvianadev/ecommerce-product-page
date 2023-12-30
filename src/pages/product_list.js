import { useState, useEffect } from "react";

import Container from "../components/Container";
import Header from "../components/Header";
import { ListContext } from "../contexts/List";
import ProductsListWrapper from "../components/ProductsListWrapper";
import ProductsListCard from "../components/ProductsListCard";
import SneakerCard from "../components/SneakerCard";

import "../globals.css";

import api from "../api/api";

function ProductList() {
  // ROTA GET EM: https://jsonplaceholder.typicode.com/photos
  // useEffect rodando um get com axios (EM UMA LINHA DE CODIGO)
  // setProductList(RESPOSTA DO AXIOS)

  const [productList, setProductList] = useState([]);

  const getProductList = async () => {
    await api.get("photos?_limit=14").then((response) => {
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
        <ProductsListWrapper>
          <SneakerCard />
          {productList.map((value, index) => {
            return (
              <ProductsListCard
                productId={index}
                thumbnailUrl={value.thumbnailUrl}
                url={value.url}
              />
            );
          })}
        </ProductsListWrapper>
      </Container>
    </ListContext.Provider>
  );
}

export default ProductList;
