import React, { useContext } from "react";
import { ProductContext } from "./Product_Contex";
import { width } from "@fortawesome/free-brands-svg-icons/fa11ty";

const Cart = () => {
  const { cart, total, AddProducts, DecrementQty, RemoveProducts } =
    useContext(ProductContext);
  console.log(cart);
  return (
    <div>
      <div>
        {cart.map((val) => (
          <div
            key={val.id}
            style={{
              display: "flex",
              margin: "10px auto",
              width: "80%",
              border: "1px solid black",
            }}
          >
            <div style={{ margin: "13px", width: "200px" }}>
              <img
                src={val.image}
                style={{
                  height: "200px",
                  width: "100%",
                  objectFit: "contain",
                  backgroundPosition: "center",
                }}
              />
            </div>
            <div style={{ margin: "13px" }}>
              <h3>Title: {val.title}</h3>
              <h4>Price: $ {val.price}</h4>
              <div style={{ display: "flex", margin: "10px" }}>
                <button
                  style={{
                    padding: "5px 12px",
                    fontWeight: "bolder",
                    fontSize: "20px",
                  }}
                  onClick={() => AddProducts(val)}
                >
                  +
                </button>
                <div
                  style={{
                    padding: "5px 12px",
                    fontWeight: "bolder",
                    fontSize: "20px",
                  }}
                >
                  {val.Qty}
                </div>
                <button
                  style={{
                    padding: "5px 12px",
                    fontWeight: "bolder",
                    fontSize: "20px",
                  }}
                  onClick={() => DecrementQty(val.id)}
                >
                  -
                </button>
              </div>
              <button
                style={{ margin: "10px" }}
                onClick={() => RemoveProducts(val.id)}
              >
                Remove Product
              </button>
            </div>
          </div>
        ))}
        <div></div>
      </div>
      <div
        style={{
          display: "block",
          width: "80%",
          margin: "auto",
          borderTop: "2px solid black",
          textAlign: "right",
        }}
      >
        <h2>SubTotal: $ {total.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Cart;
