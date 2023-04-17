import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DeliveryAddress from '../components/DeliveryAddress'

const DeliveryPage = () => {
  return (
    <div>
       <Navbar/>
       <div className='mt-5'>
       <DeliveryAddress/>
       </div>
       <Footer/>
    </div>
  )
}

export default DeliveryPage