import React,{ useState, useRef} from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const loginForm = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendForm = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eu0h2qp', 'template_sv49alw', loginForm.current, 'bG3aZ20mZmPzd2AeI')
    setEmail(email, password)
    console.log(email, password)
      // .then((result) => {
      //   console.log(result.test);
      // }, (error) => {
      //     console.log(error.text);
      // });
    toast("Your email was sent successfully");
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <form ref={loginForm} className="login-form">
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
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Username or email"
          />
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button className="loginBtn" onClick={sendForm}>
            Login In
          </button>
          <span className="forget-password">Forget password?</span>
          <Link to="/register" className="create-account">
            Don't have an account? Create account
          </Link>
        </form>

        <div className="display-3 mt-5">Your details</div>
        <div className="row">
          <h4>{email}</h4>
          <h4>{password}</h4>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
