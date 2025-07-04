import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://t3.ftcdn.net/jpg/02/41/30/72/240_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"
      ></img>
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li className="nav-link">Home</li>
          </Link>
          <Link to="/about">
            <li className="nav-link"> About us</li>
          </Link>
          <Link to="/contact">
            <li className="nav-link">Contact us</li>
          </Link>

          <li>
            <button className="cart" onClick={() => alert("Cart clicked!")}>
              <img
                className="cart-icon"
                src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
                alt="Cart Icon"
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
