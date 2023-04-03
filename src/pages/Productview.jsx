import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Productsdata from "../APIdata/Productsdata";
import Presaledata from "../APIdata/Presaledata";
import Mendata from "../APIdata/Mendata";
import Womendata from "../APIdata/Womendata";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../context/AppContent";

const Productview = () => {
  
  const [products, setProducts] = useState(null);
  const [saleproducts, setSaleproducts] = useState(null);
  const [productsmen, setProductsmen] = useState(null);
  const [productswomen, setProductswomen] = useState(null); 
  const { addtoCart } = useContext(AppContext);
  const { cartData } = useContext(AppContext);
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

  useEffect(() => {
    setProductsmen(() => {
      return Mendata.find((p) => p.id === Number(id));
    });
  }, [id]);

  useEffect(() => {
    setProductswomen(() => {
      return Womendata.find((p) => p.id === Number(id));
    });
  }, [id]);

  return (
    <>
      <Navbar cartData={cartData} />
      <div className="container mt-5">
        <div className="products-view">
          <div className="product-view-card">
            {products && (
              <div className="view-cart">
                <img src={products.Img} alt="" className="cart-card" />
              </div>
            )}
            {saleproducts && (
              <div className="view-cart">
                <img src={saleproducts.Img} alt="" className="cart-card" />
              </div>
            )}
            {productsmen && (
              <div className="view-cart">
                <img src={productsmen.Img} alt="" className="cart-card" />
              </div>
            )}
            {productswomen && (
              <div className="view-cart">
                <img src={productswomen.Img} alt="" className="cart-card" />
              </div>
            )}
          </div>
          <div className="product-view-card">
            {products && (
              <div className="col mt-5">
                <h5 className="cart-name">{products.title}</h5>
                <span className="cart-amount">R{products.amount}</span>
                <span className="cart-delivery">Free Delivery</span>
                <button
                  className="btn-addtocart"
                  onClick={() => addtoCart(products)}
                >
                  Add to Cart
                </button>
              </div> 
            )}
           {saleproducts && (
              <div className="col mt-5">
                <h5 className="cart-name">{saleproducts.title}</h5>
                <span className="cart-amount">R{saleproducts.amount}</span>
                <span className="cart-delivery">Free Delivery</span>
                <button
                  className="btn-addtocart"
                  onClick={() => addtoCart(saleproducts)}
                >
                  Add to Cart
                </button>
              </div> 
            )}
            {productsmen && (
              <div className="col mt-5">
               <h5 className="cart-name">{productsmen.title}</h5>
                <span className="cart-amount">R{productsmen.amount}</span>
                <span className="cart-delivery">Free Delivery</span>
                <button
                  className="btn-addtocart"
                  onClick={() => addtoCart(productsmen)}
                >
                  Add to Cart
                </button>
              </div> 
            )}
            {productswomen && (
              <div className="col mt-5">
                <h5 className="cart-name">{productswomen.title}</h5>
                <span className="cart-amount">R{productswomen.amount}</span>
                <span className="cart-delivery">Free Delivery</span>
                <button
                  className="btn-addtocart"
                  onClick={() => addtoCart(productswomen)}
                >
                  Add to Cart
                </button>
              </div> 
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Productview;
