import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Listdetails from "../components/Listdetails";
import Cartsummary from "../components/Cartsummary";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../context/AppContent";

const CartBag = () => {
  const { cartData } = useContext(AppContext);

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h4>Shopping Cart</h4>
        {cartData.length === 0 && (
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
        )}
        {cartData.map((product, index) => (
          <Listdetails
            key={index}
            productsImg={product.Img}
            title={product.title}
            amount={product.amount}
            product={product}
          />
        ))}
        <div className="back-to-home mt-5">
          <Link to="/">
          <button className="btn-primary">Back</button>
          </Link>
        </div>
      </div>
        <Cartsummary/>
      <Footer />
    </>
  );
};

export default CartBag;
