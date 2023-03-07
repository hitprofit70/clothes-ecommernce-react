import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const CartBag = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h4>Shopping Cart</h4>
        <div className="cart-card mt-4">
          <div className="cart-logo text-center">
            <img
              src="https://th.bing.com/th/id/OIP.Axz-vFaD-7hHlbO7r6ZGkQHaIu?pid=ImgDet&rs=1"
              width="130"
              height="130"
              alt=""
              className=""
            />
          </div>
          <span className="shopping text-center">
            Your shopping cart is empty
          </span>
          <Link to="/" className="btn btn-dark">
            Continue Shopping
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartBag;
