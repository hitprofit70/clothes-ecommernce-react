import Navbar from "../components/Navbar";
import ProductsCard from "../components/ProductsCard";
import Footer from "../components/Footer";
import Showslide from "../components/Showslide";
import { useContext } from "react";
import AppContext from "../context/AppContent";

const Men = () => {
  const {productsmen} = useContext(AppContext);
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <Showslide imgSrc="//img.ltwebstatic.com/images3_ach/2023/02/27/167749785594a4f66955874d4b4e04fc2a6a4043d2.webp" />
        <h2 className="title text-center mt-5">Men</h2>
        <div className="products-card">
          {productsmen.map((product, index) => (
            <ProductsCard
              key={index}
              id={product.id}
              productsImg={product.Img}
              title={product.title}
              amount={product.amount}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Men;
