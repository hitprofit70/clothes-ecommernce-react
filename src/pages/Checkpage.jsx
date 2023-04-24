import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DeliveryForm from "../components/DeliveryForm";
import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContent";

const Checkpage = () => {
  const { cartData } = useContext(AppContext);
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
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="deliver-method">
          <div className="cart-summary mt-5">
            <div className="header text-center">
              <span>Cart Summary</span>
            </div>
            <div className="row cart-total mt-3">
              <span className="col">Total</span>
              <span className="col">R{totalCost}</span>
            </div>
            <div className="cart-checkout mt-3">
              <button>Secured Checkout</button>
            </div>
          </div>
          <DeliveryForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkpage;
