import Navbar from "../components/Navbar";
import Frontshowside from "../components/Frontshowside";
import ProductsCard from "../components/ProductsCard";
import Footer from "../components/Footer";
import { useContext } from "react";
import AppContext from "../context/AppContent";

const Women = () => {
  const {productswomen} = useContext(AppContext);

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <Frontshowside
          slidesrcOne="//img.ltwebstatic.com/images3_ach/2023/03/03/1677823622431bd70fb9f58aaa7b1be19c6466e0a8.gif"
          slidesrcTwo="//img.ltwebstatic.com/images3_ach/2023/02/28/16775545274c7aa93fb798af6e3ff671b59466b5d9.gif"
        />
        <h2 className="title text-center mt-5">Women</h2>
        <div className="row row-cols-4">
          {productswomen.map((product, index) => (
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

export default Women;
