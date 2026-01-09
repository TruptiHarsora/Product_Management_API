import axios from "axios";
import React from "react";
import { useContext } from "react";
import { ProductContext } from "./Product_Contex";
import { useNavigate } from "react-router-dom";

const Product_List = () => {
  const { storeData } = useContext(ProductContext);
  const Nav = useNavigate();
  console.log(storeData);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        border: "3px solid black",
      }}
    >
      {storeData.map((val) => (
        <div
          style={{
            height: "400px",
            width: "300px",
            backgroundColor: "lightgray",
            overflow: "hidden",
            borderRadius: "8px",
            margin: "5px 5px",
            padding: "15px 15px",
          }}
          key={val.id}
        >
          <img
            src={val.image}
            style={{
              height: "50%",
              width: "100%",
              objectFit: "contain",
              backgroundPosition: "center",
            }}
          />

          <h4>Title:{val.title}</h4>
          <h4>Price:{val.price}</h4>
          <button
            style={{ padding: "3px 5px" }}
            onClick={() => Nav(`/products_details/${val.id}`)}
          >
            Add
          </button>
           <button
            style={{ padding: "3px 5px" }}
            onClick={() => Nav(`/products_details/Edit/${val.id}`)}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product_List;
