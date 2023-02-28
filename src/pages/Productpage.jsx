import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Productsdata from '../Productsdata';


const Productpage = () => {
  const [products, setProducts] = useState(Productsdata);
  const [cartData, setCartData] = useState([]);


  const addToCart = (product) => {
    setCartData([...cartData, product]);
    console.log(products);
  }


  return (
    <div>
      <Navbar cartData={cartData}/>
      <div className="card">
        <img src={products.productsImg} alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">{products.title}</h5>
          <p className="card-discountPrice">{products.discountPrice}</p>
          <p className="card-price">R{products.amount}</p>
          <button className="btn btn-primary" onClick={addToCart}>AddtoCart</button>
        </div>
    </div>
      <Footer/>
    </div>
  )
}

export default Productpage