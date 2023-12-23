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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<ProductList />} />
      <Route path="product/:id" element={<Product />} />
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
