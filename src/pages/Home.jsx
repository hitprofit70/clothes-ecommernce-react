import Navbar from "../components/Navbar";
import ProductsCard from "../components/ProductsCard";
import Productsdata from "../Productsdata";
import { useState } from "react";
import Footer from "../components/Footer";
import Frontshowside from "../components/Frontshowside";

const Home = () => {
  const [products, setProducts] = useState(Productsdata);

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <Frontshowside imgSrc1="//img.ltwebstatic.com/images3_ach/2023/02/28/1677554601b881bccf6b60db37976272793719b057_thumbnail_1920x.webp"/>
        <h2 className="title text-center mt-5">Our Products</h2>
        <div className="products-card">
          {products.map((product, index) => (
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

export default Home;
