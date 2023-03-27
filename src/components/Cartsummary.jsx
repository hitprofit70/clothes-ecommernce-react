import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../context/AppContent';

const Cartsummary = () => {
    const { total } = useContext(AppContext);
  return (
    <div className='container'>
         <div className="cart-summary mt-5">
        <div className="header">
          <span>Cart Summary</span>
        </div>
        <div className="row cart-total mt-3">
          <span className="col">Total</span>
          <span className="col">R{total}</span>
        </div>
        <div className="cart-remove mt-3">
          <Link to="/login">
          <button>Proceed to Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cartsummary