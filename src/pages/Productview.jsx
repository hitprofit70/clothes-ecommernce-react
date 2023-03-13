import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Productsdata from "../APIdata/Productsdata";
import Presaledata from "../APIdata/Presaledata"
import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../context/AppContent";

const Productview = () => {
  const [products, setProducts] = useState(null);
  const [saleproducts, setSaleproducts] = useState(null);
  const {addtoCart} = useContext(AppContext);
  const {cartData} = useContext(AppContext);

  const { id } = useParams();

  useEffect(() => {
    setProducts(() => {
      return Productsdata.find((p) => p.id === Number(id));
    });
  }, [id]);

  useEffect(() => {
    setSaleproducts(() => {
      return Presaledata.find((p) => p.id === Number(id));
    });
  }, [id]);

  return (
    <div>
      <Navbar cartData={cartData}/>
      <div className="container mt-5">
        <div className="products-view">
        <div className="product-view-card">
          {products && (
            <div className="view-cart">
                <img src={products.Img} alt="" className="cart-card" />
                <h5 className="product-text">{products.title}</h5>
              </div>
          )}
               {saleproducts && (
            <div className="view-cart">
                <img src={saleproducts.Img} alt="" className="cart-card" />
                <h5 className="product-text">{saleproducts.title}</h5>
              </div>
          )}
          </div>

            <div className="product-details">
            {products && (
              <div className="col mt-5">
                <h5 className="cart-amount">R{products.amount}</h5>
                <p className="cart-delivery">Free Delivery</p>
                <button className="btn-addtocart" onClick={addtoCart}>Add to Cart</button>
                <Link to='/checkpage'>
                <button className="btn-checkout">Go to Cart</button>
                </Link>
              </div>
              )}
            </div>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default Productview;
