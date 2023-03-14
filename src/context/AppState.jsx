import React, { useState } from 'react';
import AppContext from './AppContent';
import productData from '../APIdata/Productsdata';
import Presaledata from '../APIdata/Presaledata';
import Mendata from '../APIdata/Mendata';
import Womendata from '../APIdata/Womendata'

const AppState = ({children}) => {

    const [products, setProducts] = useState(productData);
    const [saleproducts, setSaleproducts] = useState(Presaledata);
    const [productsmen, setProductsmen] = useState(Mendata);
    const [productswomen, setProductswomen] = useState(Womendata);

    const [cartData, setCartdata] = useState([]);

    function addtoCart(products) {
     setCartdata([...cartData, products]);
    }

  return (
    <AppContext.Provider value={{products, saleproducts, productsmen, productswomen, cartData, addtoCart}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppState