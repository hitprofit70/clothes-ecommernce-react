import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ProductsCard from '../components/ProductsCard';
import Footer from '../components/Footer';
import Presaledata from '../APIdata/Presaledata';

const Presale = () => {
  const [saleproduct, setSaleproduct] = useState(Presaledata);
  return (
    <div>
      <Navbar/>
      <div className='container'>
      <div className='products-card'>
      {saleproduct.map((product, index) => (
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
      <Footer/>
    </div>
  )
}

export default Presale