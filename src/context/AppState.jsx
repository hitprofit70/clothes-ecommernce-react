import React, { useState } from 'react';
import AppContext from './AppContent';
import productData from '../APIdata/Productsdata';
import Presaledata from '../APIdata/Presaledata';

const AppState = ({children}) => {

    const [products, setProducts] = useState(productData);
    const [saleproducts, setSaleproducts] = useState(Presaledata);

    const [cartData, setCartdata] = useState([]);

    function addtoCart() {
     setCartdata([...cartData, products]);
     setCartdata([...cartData, saleproducts]);
    }

  return (
    <AppContext.Provider value={{products, saleproducts, cartData, addtoCart}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppState