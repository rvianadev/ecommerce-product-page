import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Product from "./pages/product";
import ProductAPI from "./pages/productAPI";
import ProductList from "./pages/product_list";
import { CartProvider } from "./contexts/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <CartProvider>
            <ProductList />
          </CartProvider>
        }
      />
      <Route
        path="product/sneaker"
        element={
          <CartProvider>
            <Product />
          </CartProvider>
        }
      />
      <Route
        path="product/:id"
        element={
          <CartProvider>
            <ProductAPI />
          </CartProvider>
        }
      />
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
