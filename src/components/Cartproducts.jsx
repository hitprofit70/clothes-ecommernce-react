import React from 'react'

const Cartproducts = ({id, productsImg, title, discountPrice, amount, add}) => {
  return (
    <div className='container mt-5'>
      <div className="card">
        <img src={productsImg} alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-discountPrice">{discountPrice}</p>
          <p className="card-price">R{amount}</p>
          <button className="btn btn-primary" onClick={add}>View</button>
        </div>
    </div>
    </div>
  )
}

export default Cartproducts