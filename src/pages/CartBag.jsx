import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const CartBag = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h4>Shopping Cart</h4>
        <div className="shopping-card">
          <div className="shopping-img">
            <img
              src="https://th.bing.com/th/id/OIP.Axz-vFaD-7hHlbO7r6ZGkQHaIu?pid=ImgDet&rs=1"
              width="100"
              height="100"
              alt=""
            />
          </div>
          <div className="shopping-cart">
            <span className="shopping-text">Your shopping cart is empty</span>
            <br></br>
            <Link to="/">
              <button className="shopping-btn">Continue Shopping</button>
            </Link>
          </div>
        </div>
        <div className="list-cart mt-5">
          <div className="img-src mt-5">
            <img
              src="https://img.ltwebstatic.com/images3_pi/2021/08/31/16303411089d4e3013a266790258f64456ffae143a_thumbnail_900x.webp"
              alt=""
              className=""
            />
          </div>
          <div className="order-summary">
            <span className="item-text">Duck Baseball Cap</span>
            <span className="item-amount">R199.99</span>
          </div>
          <div className="list-text text-center">
            <div className="qty">
              <button>-</button>
              <h5>0</h5>
              <button>+</button>
            </div>
          </div>
          <div className="btn-remove">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash3"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
            </svg>{" "}
            Remove
          </div>
        </div>

        <div className="list-cart mt-5">
          <div className="img-src mt-5">
            <img
              src="https://img.ltwebstatic.com/images3_pi/2021/08/31/16303411089d4e3013a266790258f64456ffae143a_thumbnail_900x.webp"
              alt=""
              className=""
            />
          </div>
          <div className="order-summary">
            <span className="item-text">Duck Baseball Cap</span>
            <span className="item-amount">R199.99</span>
          </div>
          <div className="list-text text-center">
            <div className="qty">
              <button>-</button>
              <h5>0</h5>
              <button>+</button>
            </div>
          </div>
          <div className="btn-remove">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash3"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
            </svg>{" "}
            Remove
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartBag;
