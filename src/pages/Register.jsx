import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigator = useNavigate();

  const clearInputs = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const registerSend = () => {
    clearInputs();

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      toast.error("All the inputs are required.");
    }

    if (password !== confirmPassword) {
      toast.error("Password does not match.");
    }

    if (firstName && lastName && email && password && confirmPassword) {
      localStorage.setItem("FirstName", firstName);
      localStorage.setItem("LasttName", lastName);
      localStorage.setItem("Email", email);
      localStorage.setItem("Password", password);
      localStorage.setItem("ConfirmPassword", confirmPassword);
      toast.success("Registered successfully.");
      navigator("/login");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="register-form">
          <h1>Register</h1>
          <span className="brief-header mb-3">Create </span>
          <div className="form-input">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
            <br></br>
            <br></br>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />
            <br></br>
            <br></br>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />
            <br></br>
            <br></br>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <br></br>
            <br></br>
            <input
              type="text"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
            />
          </div>
          <button onClick={registerSend} className="registerBtn">
            Register
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
