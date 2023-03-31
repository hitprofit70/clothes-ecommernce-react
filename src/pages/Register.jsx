import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useState } from "react";

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const Register = () => {
setFirstName(console.log(firstName));

  }
  return (
    <>
        <Navbar/>
        <div className='container mt-5'>
        <form className="register-form">
          <h1>Register</h1>
          <span>
            <svg
              xmlns=""
              width="60"
              height="60"
              fillRule="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </span>
          <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" />
          <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" />
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email Address" />
          <input type="text" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
          <input type="text" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirm password" />
          <button className="register-btn" onClick={Register}>Register</button>
        </form>

        <div className='display-3'>Your details</div>
        <div className='row'>
        <h4>{firstName}</h4>
          <h4>{lastName}</h4>
          <h4>{email}</h4>
          <h4>{password}</h4>
          <h4>{confirmPassword}</h4>
        </div>
        </div>
        <Footer/>
    </>
  )
}

export default Register