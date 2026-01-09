import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "./Product_Contex";

const Edit_Product = () => {
  const { id } = useParams();
  const { storeData, updateProduct } = useContext(ProductContext);
  const Nav = useNavigate();
  const [text, setText] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  console.log(id);

  const item = storeData.find((val) => val.id === Number(id));
  console.log(item);

  if (!item) {
    return <h1> Loading Item...</h1>;
  }

  const update = () => {
    if (item) {
      
      console.log(item.title);
      
      const updateItem = {
        title: text,
        price: price,
        description: desc,
      };

      updateProduct(item.id, updateItem);
      console.log(updateItem);
      //  console.log(newItem);
      console.log(item.title);
      Nav(`/`);
    }
  };
  return (
    <div
      style={{
        height: "auto",
        width: "500px",
        border: "2px solid black",
        margin: "auto auto",
        padding: "15px",
        backgroundColor: "lightsteelblue",
      }}
    >
      <div
        style={{
          height: "250px",
          width: "250px",
          margin: "auto auto",
          // border: "3px solid black",

          padding: "15px",
          overflow: "hidden",
        }}
      >
        <img
          src={item.image}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
            backgroundPosition: "center",
          }}
          alt=""
        />
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        ></form>
        <h3>Title:{item.title}</h3>
        <input
          type="text"
          value={text}
          style={{ width: "100%", height: "30px" }}
          onChange={(e) => setText(e.target.value)}
        />
        <h4>Category :{item.category}</h4>
        <h4>Price:{item.price}</h4>
        <input
          type="number"
          value={price}
          style={{ width: "100%", height: "30px" }}
          onChange={(e) => setPrice(e.target.value)}
        />
        <h4>Rating :{item.rating.rate}</h4>
        <p>
          <b>Description:</b>
          <input
            type="text"
            value={desc}
            style={{ width: "100%", height: "30px" }}
            onChange={(e) => setDesc(e.target.value)}
          />
          {item.description}
        </p>
        <button style={{ padding: "3px 5px" }} onClick={() => update()}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Edit_Product;
