import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
