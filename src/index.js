import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Product from "./pages/product";
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
        path="product/:id"
        element={
          <CartProvider>
            <Product />
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
