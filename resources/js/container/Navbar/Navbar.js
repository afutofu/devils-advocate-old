import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <div className="navItem">
            <Link to="/">logo</Link>
          </div>
          <div className="navItem">
            <Link to="/fruits">fruits</Link>
          </div>
        </div>
        <div className="right">
          <div className="navItem">
            <Link to="/cart">cart</Link>
          </div>
          <div className="navItem">
            <Link to="/login">login</Link>
          </div>
          <div className="navItem">
            <Link to="/register">register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
