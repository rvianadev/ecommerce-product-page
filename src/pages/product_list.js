import { useState, useEffect } from "react";

import Container from "../components/Container";
import Header from "../components/Header";
import { ListContext } from "../contexts/List";
import ProductsListWrapper from "../components/ProductsListWrapper";
import ProductsListCard from "../components/ProductsListCard";
import SneakerCard from "../components/SneakerCard";
import CartModal from "../components/CartModal";

import "../globals.css";

import api from "../api/api";

function ProductList() {
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
                key={index}
                productId={index}
                thumbnailUrl={value.thumbnailUrl}
                url={value.url}
              />
            );
          })}
        </ProductsListWrapper>
        <CartModal />
      </Container>
    </ListContext.Provider>
  );
}

export default ProductList;
