import React, { useState} from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link,  useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigate();

  const clearInputs = () => {
    setEmail('')
    setPassword('')
  }

  const handleSubmit = () => {
    clearInputs();

    const localEmail = localStorage.getItem('Email');
    const localPassword = localStorage.getItem('Password');

    if (!email || !password) {
      toast.error('All the inputs are required');
    }

  

    if (email === localEmail && password === localPassword) {
      toast.success('Login successfully');
      navigator('/deliverypage')
    } else {
    toast.error("Invalid email or password");
  }

  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <form onSubmit={handleSubmit} className="login-form">
          <h1>Login</h1>
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
          <div className="form-input">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <br></br><br></br>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <button className="loginBtn">
            Login In
          </button>
          <span className="forget-password">Forget password?</span>
          <Link to="/register" className="create-account">
            Don't have an account? Register here.
          </Link>
        </form>

        {/* <div className="display-3 mt-5">Your details</div>
        <div className="row">
        {localStorage.getItem('Email') && (
            <div>
              Email: <p>{localStorage.getItem('Name')}</p>
            </div>
          )}
          {localStorage.getItem('Password') && (
            <div>
              Password: <p>{localStorage.getItem('Password')}</p>
            </div>
          )}
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Login;
