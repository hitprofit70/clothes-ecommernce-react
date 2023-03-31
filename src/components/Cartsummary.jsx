import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from "../context/AppContent";

const Cartsummary = () => {
 const {cartData} = useContext(AppContext)
  const [totalCost, setTotalCost] = useState(0);

  const calculateTotalPrice = () => {
    let total = 0;
    for (let i = 0; i < cartData.length; i++) {
      total += cartData[i].amount;
    }
    setTotalCost(total);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cartData]);

  return (
    <div className='container'>
         <div className="cart-summary mt-5">
        <div className="header text-center">
          <span>Cart Summary</span>
        </div>
        <div className="row cart-total mt-3">
          <span className="col">Total</span>
          <span className="col">R{totalCost}</span>
        </div>
        <div className="cart-checkout mt-3">
          <Link to="/checkpage">
          <button>Proceed to Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cartsummary