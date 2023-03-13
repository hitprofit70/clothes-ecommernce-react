import Navbar from "../components/Navbar";
import ProductsCard from "../components/ProductsCard";
import Footer from "../components/Footer";
import Frontshowside from "../components/Frontshowside";
import Showslide from "../components/Showslide";
import { useContext } from "react";
import AppContext from "../context/AppContent";

const Home = () => {
  const {products} = useContext(AppContext);
  
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
              productsImg={product.Img}
              title={product.title}
              amount={product.amount}
            />
          ))}
        </div>
        <div className="show-slide mt-5">
          <Showslide imgSrc="//img.ltwebstatic.com/images3_ach/2023/02/14/1676355682f7c7cf31758a326ba59d26a115bb8057_thumbnail_1920x.webp"/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
