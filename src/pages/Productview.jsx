import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Productsdata from "../Productsdata";
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
          <div className="card">
            <img src={products.productsImg} alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title">{products.title}</h5>
              <p className="card-price">R{products.amount}</p>
              <button className="btn btn-primary">AddtoCart</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Productview;
