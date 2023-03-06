import React from 'react';
import Navbar from '../components/Navbar';
import ProductsCard from '../components/ProductsCard';
import Footer from '../components/Footer';

const Presale = () => {
  return (
    <div>
      <Navbar/>
      <div className='container'>
      <div className='products-card'>
      <ProductsCard/>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Presale