import React from 'react';
import Navbar from '../components/Navbar';
import Cartproducts from '../components/Cartproducts';

const Presale = () => {
  return (
    <div>
      <Navbar/>
      <div className='container'>
      <div className='products-card'>
      <Cartproducts/>
      <Cartproducts/>
      </div>
      </div>
    </div>
  )
}

export default Presale