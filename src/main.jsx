import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Product_APIProvider from "./Components/Product_Contex.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Product_APIProvider>
      <App />
    </Product_APIProvider>
  </BrowserRouter>
);
