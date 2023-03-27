import React, { useState } from "react";
import AppContext from "./AppContent";
import productData from "../APIdata/Productsdata";
import Presaledata from "../APIdata/Presaledata";
import Mendata from "../APIdata/Mendata";
import Womendata from "../APIdata/Womendata";

const AppState = ({ children }) => {
  const [products, setProducts] = useState(productData);
  const [saleproducts, setSaleproducts] = useState(Presaledata);
  const [productsmen, setProductsmen] = useState(Mendata);
  const [productswomen, setProductswomen] = useState(Womendata);
  const [qtyCount, setQtyCount] = useState(0);
  const [cartData, setCartdata] = useState([]);
  const [total, setTotal] = useState(0);


  const addtoCart = (products) => {
    setCartdata([...cartData, products]);
  }

  const qtyUp = () => {
    setQtyCount(qtyCount + 1);
  }

  const qtyDown = () => {
    if(qtyCount > 1)
    setQtyCount(qtyCount - 1);
  }

  const removeItem = (product) => {
    let products = cartData.filter((x) => x.id !== product.id);
    setCartdata(products);
  };
 
  const calcuateTotal = () => {
    let total = 0;

  for (let i = 0; i < cartData.length; i++) {
    total += cartData[i].amount;
  }
    setTotal(total)
  };

  return (
    <AppContext.Provider
      value={{
        products,
        saleproducts,
        productsmen,
        productswomen,
        cartData,
        total,
        addtoCart,
        calcuateTotal,
        qtyCount,
        qtyUp,
        qtyDown,
        removeItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
