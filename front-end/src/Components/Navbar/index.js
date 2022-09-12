import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-left-container">
        <NavLink to={"/"} className="brand-name fn-1hx cursor-pointer">
          E-M<i className="fa fa-amazon"></i>LL
        </NavLink>
      </div>
      <div className="nav-middle-container">
        <div className="search-bar">
          <input type="search"  className="search-bar"/>
        </div>
      </div>
      <div className="nav-right-container">
        <button className="btn-primary p-1hx">Login</button>
        <i
          className="fa fa-cart-arrow-down icon-over-count fn-1hx"
          data-count="2"
        ></i>
        <i className="fa fa-heart fn-1hx icon-over-count" data-count="1"></i>
        <i className="fa fa-user fn-1hx"></i>
      </div>
    </nav>
  );
};

export default Navbar;
