import React from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Product_List from "./Components/Product_List";
import Product_Details from "./Components/Product_Details";
import Add_Product from "./Components/Add_Product";
import Edit_Product from "./Components/Edit_Product";
import Cart from "./Components/Cart";

const App = () => {
  const Nav = useNavigate();
  return (
    <div>
      {/* <h1>App</h1> */}
      <div style={{ padding: "15px", margin: "15px" }}>
        <Link
          to="/product_list"
          style={{ border: "2px solid black", padding: "15px", margin: "15px" }}
        >
          Product_List
        </Link>
        <Link
          to="/Cart/id"
          style={{ border: "2px solid black", padding: "15px", margin: "15px" }}
        >
          Cart
        </Link>
          {/* <Link
          to="/products_details/Edit/id"
          style={{ border: "2px solid black", padding: "15px", margin: "15px" }}
        >
          Edit Products
        </Link> */}
      </div>

      {/* <div style={{ padding: "15px", margin: "15px" }}>
        <button style={{ padding: "8px" }} onClick={() => Nav(-1)}>
          Back
        </button>
        <button style={{ padding: "8px" }} onClick={() => Nav(+1)}>
          Forward
        </button>
      </div> */}

      <Routes>
        {/* <Route path="/" element={"Hello User"} /> */}
        <Route path="/" element={<Product_List />} />
        <Route path="/product_list" element={<Product_List />} />
        <Route path="/products_details/:id" element={<Product_Details />} />
        <Route path="/products_details/Add" element={<Add_Product />} />
        <Route path="/products_details/Edit/:id" element={<Edit_Product />} />
        <Route path="/cart/:id" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
