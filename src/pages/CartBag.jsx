import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ProductsCard from "../components/ProductsCard";

const CartBag = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h4>Shopping Cart</h4>
        <div className="shopping-card">
          <div className="shopping-img">
            <img
              src="https://th.bing.com/th/id/OIP.Axz-vFaD-7hHlbO7r6ZGkQHaIu?pid=ImgDet&rs=1"
              width="100"
              height="100"
              alt=""
            />
          </div>
          <div className="shopping-cart">
            <span className="shopping-text">Your shopping cart is empty</span>
            <br></br>
            <Link to="/">
              <button className="shopping-btn">Continue Shopping</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartBag;
