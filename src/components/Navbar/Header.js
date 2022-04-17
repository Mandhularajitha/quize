import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <>
      <div className="main-container">
        <header>
          <nav className="navigation-bar">
            <Link to="/Home" className="title">
              Quize App
            </Link>
            <input className="search-bar" type="text" placeholder="search" />
            <ul className="side-nav-section">
              <li>
                <Link to="/login">
                  <button className="login-btn">login</button>
                </Link>
              </li>

              <li>
                <Link to="/WishList" className="wishlist-btn btn">
                  <i className="fa fa-heart-o"></i>
                  <span className="badge-wishlist"></span>
                </Link>
              </li>

              <li>
                <Link to="/cart" className="add-cart-btn btn">
                  <i className="fa fa-shopping-cart"></i>
                  <span className="badge-wishlist"></span>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export  default Header;
