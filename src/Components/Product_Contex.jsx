import axios from "axios";
import { useState, useEffect, createContext } from "react";

const ProductContext = createContext();

function Product_APIProvider({ children }) {
  const [storeData, setStoreData] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function FatchProduct() {
      const res = await axios.get("https://fakestoreapi.com/products");
      console.log(res.data);
      setStoreData(res.data);
    }
    FatchProduct();
  }, []);

  const AddProducts = (item) => {
    setCart((prev) => {
      const exist = prev.find((val) => val.id === item.id);
      if (exist) {
        return prev.map((val) =>
          val.id === item.id ? { ...val, Qty: val.Qty + 1 } : val
        );
      }

      return [...prev, { ...item, Qty: 1 }];
    });
  };

  const DecrementQty = (id) => {
    setCart((prev) =>
      prev
        .map((val) => (val.id === id ? { ...val, Qty: val.Qty - 1 } : val))
        .filter((val) => val.Qty > 0)
    );
  };

  const RemoveProducts = (id) => {
    setCart(cart.filter((val) => val.id !== Number(id)));
  };

  const updateProduct = (id, newItem) => {
    setStoreData(
      storeData.map((val) =>
        val.id === id
          ? {
              ...val,
              title: newItem.title,
              price: newItem.price,
              description: newItem.description,
            }
          : val
      )
    );
  };

  useEffect(() => {
    const subTotal = cart.reduce(
      (sum, item) => sum + Number(item.price) * Number(item.Qty),
      0
    );
    setTotal(subTotal);
  }, [cart]);

  return (
    <>
      <ProductContext.Provider
        value={{
          storeData,
          cart,
          total,
          AddProducts,
          DecrementQty,
          RemoveProducts,
          updateProduct,
        }}
      >
        {children}
        {/* {console.log(storeData)} */}
      </ProductContext.Provider>
    </>
  );
}

export { ProductContext };
export default Product_APIProvider;
