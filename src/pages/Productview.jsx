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
      <Navbar />
      <div className="container mt-5">
        {products && (
          <div class="row">
            <div class="col mt-5">
              <img src={products.productsImg} alt="" className="cart-card" />
            </div>
            <div class="col mt-5">
              <h5>{products.title}</h5>
              <h5>R{products.amount}</h5>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Productview;
