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
  // let isFound;



  const addtoCart = (products) => {
 
    // for (let i = 0; i < cartData.length; i++) {

    //     isFound = cartData.some(element => {
        
    //     if (element.id === products.id) {
    //       toast("Item added in the cart already");
    //     }
    //     return false;
    //   });

    // }
         setCartdata([...cartData, products]);
        toast("Item added in the cart");

  };

  const removeItem = (product) => {
    let products = cartData.filter((x) => x.id !== product.id);
    setCartdata(products);
    toast("Your product removed from the cart");
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
