import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "./Product_Contex";

const Product_Details = () => {
  const { id } = useParams();
  const { storeData } = useContext(ProductContext);
  console.log(id);

  const item = storeData.find((val) => val.id === Number(id));

  if (!item) {
    return <h1> Loading Item...</h1>;
  }
  return (
    <div
      style={{
        height: "600px",
        width: "500px",
        border: "2px solid black",
        margin: "auto auto",
        padding: "15px",
      }}
    >
      <div
        style={{
          height: "250px",
          width: "250px",
          margin: "auto auto",
          border: "3px solid black",
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
        <h3>Title:{item.title}</h3>
        <h4>Category :{item.category}</h4>
        <h4>Price:{item.price}</h4>
        <h4>Rating :{item.rating.rate}</h4>
        <p><b>Description:</b>{item.description}</p>
        <button style={{padding:"3px 5px"}} onClick={()=> Nav(`/products_details/${val.id}`)}>Add to cart</button>
      </div>
    </div>
  );
};

export default Product_Details;
