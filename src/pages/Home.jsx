import Navbar from "../components/Navbar";
import ProductsCard from "../components/ProductsCard";
import Productsdata from "../Productsdata";
import { useState } from "react";
import Footer from "../components/Footer";
import Frontshowside from "../components/Frontshowside";
import Showslide from "../components/Showslide";

const Home = () => {
  const [products, setProducts] = useState(Productsdata);

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <Frontshowside
          imgSrc1="//img.ltwebstatic.com/images3_ach/2023/03/03/1677823622431bd70fb9f58aaa7b1be19c6466e0a8.gif"
          imgSrc2="//img.ltwebstatic.com/images3_ach/2023/02/28/16775545274c7aa93fb798af6e3ff671b59466b5d9.gif"
        />
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
        <div className="show-slide mt-5">
        <Showslide imgSrc="//img.ltwebstatic.com/images3_ach/2023/02/28/1677554601b881bccf6b60db37976272793719b057_thumbnail_1920x.webp"/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
