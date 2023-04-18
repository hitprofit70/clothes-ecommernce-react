import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Payment = () => {

  const [nameOnCard, setNameonCard] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [date, setDate] = useState("");
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
            <input type="text" value={nameOnCard} onChange={(e) => setNameonCard(e.target.value)} placeholder="Name on card" />
            <input type="text" value={cardHolder} onChange={(e) => setCardHolder(e.target.value)} placeholder="Cardholder name" />
            <input type="number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} placeholder="Card number" />
            <input type="number" value={cvv} onChange={(e) => setCvv(e.target.value)} placeholder="Cvv" />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className='text-center'>
        <Link to="/deliverypage">
          <button className="btn btn-primary mt-5">Back</button>
          </Link>
          <button className="btn btn-primary mt-5">Pay With Card</button>
        </div>
      </div>
    </div>
  </div>
  <div className='display'>
    <h2>Your bank on details</h2>
      <h4>{nameOnCard}</h4>
      <h4>{cardHolder}</h4>
      <h4>{cardNumber}</h4>
    </div>
</div>
  )
}

export default Payment