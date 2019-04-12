import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper purple darken-4 z-depth-5">
      <div className="container">
        <Link to="/" className="brand-logo left">
          <div>
            <i className="fab fa-product-hunt">OST BOX</i>
          </div>
        </Link>
        <ul className="right">
          <li>
            <Link to="/post">Create Post</Link>
          </li>
          <li>
            <Link to="/">View Post</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
