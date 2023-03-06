import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Myaccount = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <form className="login-form">
          <h1>Login</h1>
          <span>
            <svg
              xmlns=""
              width="60"
              height="60"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </span>
          <input type="text" id="usernames" placeholder="Username or email" />

          <input type="text" id="passwords" placeholder="Password" />

          <button className="loginBtn">Login In</button>

          <a href="#">Forget password?</a>

          <a href="#">Don't have an account? Create account</a>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Myaccount;
