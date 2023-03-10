import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Productsdata from "../APIdata/Productsdata";
import { useParams } from "react-router-dom";

const Productview = () => {
  const [products, setProducts] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    setProducts(() => {
      return Productsdata.find((p) => p.id === Number(id));
    });
  }, [id]);
  return (
    <div>
      <Navbar/>
      <div className="container mt-5">
        <div className="product-cart">
          {products && (
            <div className="view-cart">
              <div className="col mt-5">
                <img src={products.productsImg} alt="" className="cart-card" />
              </div>
            </div>
          )}
          {products && (
            <div className="view-amount-details">
              <div className="col mt-5">
                <h5 className="cart-amount">R{products.amount}</h5>
                <p className="cart-delivery">Free Delivery</p>
                <h5 className="cart-text">{products.title}</h5>
                <button className="btn-addtocart">AddtoCart</button>
                <button className="btn-checkout">Checkout</button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Productview;
