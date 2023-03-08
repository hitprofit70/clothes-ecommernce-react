import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ProductsCard from "../components/ProductsCard";
import Footer from "../components/Footer";
import Showslide from "../components/Showslide";
import Mendata from "../APIdata/Mendata"

const Men = () => {
  const [productsmen, setProductsmen] = useState(Mendata);
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <Showslide imgSrc="//img.ltwebstatic.com/images3_ach/2023/02/27/167749785594a4f66955874d4b4e04fc2a6a4043d2.webp" />
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
