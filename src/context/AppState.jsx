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
    const [qtyCount, setQtyCount] = useState(0);
    const [cartData, setCartdata] = useState([]);
    const [total, setTotal] = useState(0);
    const [amount, setAmount] = useState(0);


    function addtoCart(products) {
     setCartdata([...cartData, products]);
    }

    function qtyUp(products) {
       setQtyCount(qtyCount + 1);
    }

    function qtyDown(products ) {
      setQtyCount(qtyCount - 1);
   }

    function remove() {
      setCartdata([cartData.splice(1)])

      console.log(cartData);
    }

    function calcuateTotal() {
     setTotal(total += amount)
    }

  return (
    <AppContext.Provider value={{products, saleproducts, productsmen, productswomen, cartData, total, addtoCart, calcuateTotal, qtyCount, qtyUp, qtyDown, remove}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppState