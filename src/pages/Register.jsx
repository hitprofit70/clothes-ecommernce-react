import React, { useState } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import {
  storage_exists,
  read_fromStorage,
  save_toLocalStorage,
  check_emailInStorage,
} from "../helper";
import { USER_TABLE } from '../constant';

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const clearInputs = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const registerSend = () => {
    
    const user = {firstName, lastName, email, password}

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      toast.error("All the inputs are required.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Password does not match.");
      return;
    }

    if (!storage_exists(USER_TABLE)) {
      let userData = [user];
      save_toLocalStorage(USER_TABLE, userData);
      toast.success(`${firstName} registered succesfully`)
      setTimeout(navigate("/login"), 2000);
      return;
    }

    if (check_emailInStorage(email)) {
      toast.error(`${email} already exist`);
      return;
    }

    let userTable = read_fromStorage(USER_TABLE);

    userTable = [...userTable, user];

    save_toLocalStorage(USER_TABLE, userTable);

    setTimeout(navigate("/"), 2000);
    clearInputs();
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
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <br></br>
            <br></br>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
            />
          </div>
          <button onClick={registerSend} className="registerBtn">
            Register
          </button>
          <div className="login">
            <Link to="/login">
            <span>Already login? Create register</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
