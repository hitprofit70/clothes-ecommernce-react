import Navbar from '../components/Navbar';
import ProductsCard from '../components/ProductsCard';
import Footer from '../components/Footer';
import { useContext } from "react";
import AppContext from "../context/AppContent";

const Presale = () => {
  const {saleproducts} = useContext(AppContext);

  return (
    <>
      <Navbar/>
      <div className='container mt-5'>
      <h2 className="title text-center mt-5">Sale</h2>
      <div className='products-card'>
      {saleproducts.map((product, index) => (
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
      <Footer/>
    </>
  )
}

export default Presale