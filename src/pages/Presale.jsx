import React from 'react';
import Navbar from '../components/Navbar';
import Cartproducts from '../components/Cartproducts';
import Footer from '../components/Footer';

const Presale = () => {
  return (
    <div>
      <Navbar/>
      <div className='container'>
      <div className='products-card'>
      <Cartproducts/>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Presale