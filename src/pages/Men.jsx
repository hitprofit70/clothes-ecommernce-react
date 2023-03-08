import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ProductsCard from "../components/ProductsCard";
import Footer from "../components/Footer";
import Mendata from "../pages/Mendata";
import Showslide from "../components/Showslide";

const Men = () => {
  const [productsmen, setProductsmen] = useState(Mendata);
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <Showslide/>
        <h2 className="title text-center mt-5">Men</h2>
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
