import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Register = () => {
  const registerForm = useRef();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const sendForm= (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_eu0h2qp",
      "template_sv49alw",
      registerForm.current,
      "bG3aZ20mZmPzd2AeI"
    );
  }
  
  return (
    <>
        <Navbar/>
        <div className='container mt-5'>
        <form ref={registerForm} className="register-form">
          <h1>Register</h1>
          <span className='brief-header mb-3'>Create </span>
          <div className='form-input'>
          <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" />
          <br></br><br></br>
          <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" />
          <br></br><br></br>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email Address" />
          <br></br><br></br>
          <input type="text" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
          <br></br><br></br>
          <input type="text" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirm password" />
          </div>
          <button className="registerBtn" onClick={sendForm}>Register</button>
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