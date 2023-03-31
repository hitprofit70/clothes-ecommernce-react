import React from 'react';
import {Link} from "react-router-dom";

const ProductsCard = ({id, productsImg, title, discountPrice, amount}) => {
  return (
    <div className='container mt-5'>
      <div className='row-cols-4'>
      <div className="card" style={{width: 300, height: 400}}>
        <img src={productsImg} alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-discountPrice">{discountPrice}</p>
          <p className="card-price">R{amount}</p>
          <Link to={`/productview/${id}`} className="btn btn-primary">View</Link>
        </div>
    </div></div>    </div>
  )
}

export default ProductsCard