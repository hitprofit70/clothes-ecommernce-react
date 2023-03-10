import React, { useState } from 'react';
import AppContext from './AppContent';
import productData from '../APIdata/Productsdata';

const AppState = ({children}) => {

    const [products, setProducts] = useState(productData);
    const [cartData, setCartdata] = useState([]);

    function addtoCart() {
     setCartdata([...cartData, products])
     console.log(cartData)
    }

  return (
    <AppContext.Provider value={{products, cartData, addtoCart}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppState