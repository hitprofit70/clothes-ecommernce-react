import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-white" href="#">SBUDA JEANS</Link>
          <button className="navbar-toggler">
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/presale" className="nav-link text-white active" aria-current="page" href="#">Presale</Link>
              </li>
              <li className="nav-item">
                <Link to="/men" className="nav-link text-white active" aria-current="page" href="#">Men</Link>
              </li>
              <li className="nav-item">
                <Link to="/women" className="nav-link text-white active" aria-current="page" href="#">Women</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link text-white active" aria-current="page" href="#">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link text-white active" aria-current="page" href="#">Register</Link>
              </li>
            </ul>
            <Link to='/cartbag' className='checkout'>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="blue" className="bi bi-bag-check" viewBox="0 0 16 16">
                <path  fillRule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
              <span className='cartCount' style={{ color: "white" }}>0</span>
            </Link>
            <form className="d-flex" role="search">
              <Link to="/myaccount" className="btn btn-outline-primary" type="submit">My Account</Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar