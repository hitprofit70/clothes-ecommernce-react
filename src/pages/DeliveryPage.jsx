import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DeliveryForm from '../components/DeliveryForm'

const DeliveryPage = () => {
  return (
    <div>
       <Navbar/>
       <div className='mt-5'>
       <DeliveryForm/>
       </div>
       <Footer/>
    </div>
  )
}

export default DeliveryPage