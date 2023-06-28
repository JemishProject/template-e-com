import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductProvider } from "./Contexts/ProductContext";
import { CartProvider } from "./Contexts/CartContext";
import { FeatuedProvider } from "./Contexts/FeatuedContext";
import { ArrivalProductProvider } from "./Contexts/ArrivalProductContex";
import { BlogsProvider } from "./Contexts/BlogsContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <ArrivalProductProvider>
      <BlogsProvider>
        <FeatuedProvider>
          <ProductProvider>
            <React.StrictMode>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </React.StrictMode>
          </ProductProvider>
        </FeatuedProvider>
      </BlogsProvider>
    </ArrivalProductProvider>
  </CartProvider>
);
