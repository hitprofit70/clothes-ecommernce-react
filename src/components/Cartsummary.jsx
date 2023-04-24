import React, { useState, useEffect, useContext } from "react";
import AppContext from "../context/AppContent";
import { useNavigate } from "react-router-dom";
import { storage_exists, read_fromStorage } from "../helper";
import { CURRENT_USER } from "../constant";

const Cartsummary = () => {
  const { cartData } = useContext(AppContext);
  const [totalCost, setTotalCost] = useState(0);
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    if (storage_exists(CURRENT_USER)) {
      setUser(read_fromStorage(CURRENT_USER));
    }
  }, []);

  const checkOut = () => {
    if (user.email) {
      navigate("/checkpage");
      return;
    }

    alert("Please log in first");
    navigate("/login");
    return;
  };

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
    <div className="container">
      <div className="cart-summary mt-5">
        <div className="header text-center">
          <span>Cart Summary</span>
        </div>
        <div className="row cart-total mt-3">
          <span className="col">Total</span>
          <span className="col">R{totalCost}</span>
        </div>
        <div className="cart-checkout mt-3">
          <button onClick={checkOut}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cartsummary;
