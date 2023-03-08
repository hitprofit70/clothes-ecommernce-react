import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ProductsCard from "../components/ProductsCard";
import Footer from "../components/Footer";
import Mendata from '../pages/Mendata'

const Men = () => {
  const [productsmen, setProductsmen] = useState(Mendata);
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
      <div className="products-card">
      {productsmen.map((product, index) => (
            <ProductsCard
              key={index} 
              id={product.id}
              productsImg={product.productsImg}
              title={product.title}
              amount={product.amount}
            />
          ))}
          </div>
          </div>
      <Footer />
    </div>
  );
};

export default Men;
