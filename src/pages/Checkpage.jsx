import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Deliverymethod from '../components/Deliverymethod';

const Checkpage = () => {
  return (
    <>
        <Navbar/>
        <div className='container mt-5'>
          <div className='deliver-method'>
          <Deliverymethod/>
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default Checkpage