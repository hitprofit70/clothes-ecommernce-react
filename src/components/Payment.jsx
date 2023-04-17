import React from 'react'

const Payment = () => {
  return (
    <div className='container mt-5'>
    <h4 className="header text-center">Payment Method </h4>
  <div className="payment-display mt-3">
    <div className="payment-card">
      <div className="row mt-5">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT0zBM_8tPns_dXVEad4OmeLk6VRhbWa_4GIBPx27dClMcVyIvRofSSjMebgDDe5j4Y4o&usqp=CAU"
          alt=""
        />
        <div className="input-info text-center mt-5">
            <input type="text" placeholder="Name on card" />
            <input type="text" placeholder="Cardholder name" />
            <input type="number" placeholder="Card number" />
            <input type="number" placeholder="Cvv" />
            <input type="date" />
        </div>
        <div className="method-button mt-3">
          <button className="btn-payment">Pay With Card</button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Payment