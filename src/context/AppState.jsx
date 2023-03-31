import React, { useState } from "react";
import AppContext from "./AppContent";
import productData from "../APIdata/Productsdata";
import Presaledata from "../APIdata/Presaledata";
import Mendata from "../APIdata/Mendata";
import Womendata from "../APIdata/Womendata";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppState = ({ children }) => {
  const [products, setProducts] = useState(productData);
  const [saleproducts, setSaleproducts] = useState(Presaledata);
  const [productsmen, setProductsmen] = useState(Mendata);
  const [productswomen, setProductswomen] = useState(Womendata);
  const [cartData, setCartdata] = useState([]);

  const addtoCart = (products) => {
    toast("Item added in the cart");
    setCartdata([...cartData, products]);
  };

  const removeItem = (product) => {
    toast("Your product removed from the cart");
    let products = cartData.filter((x) => x.id !== product.id);
    setCartdata(products);
  };



  return (
    <AppContext.Provider
      value={{
        products,
        saleproducts,
        productsmen,
        productswomen,
        cartData,
        addtoCart,
        removeItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
