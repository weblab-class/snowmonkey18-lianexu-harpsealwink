import React from "react";
import { Link } from "@reach/router";

import "./NavBar.css";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const NavBar = () => {
  return (
    <nav className="Navbar-container">
      <div className="Navbar-title">
        <Link to="/" className="Navbar-title">
          Graph Ninja
        </Link>
      </div>
      <div className="Navbar-link-container">
        <Link to="/about/" className="Navbar-link">
          about
        </Link>
        <Link to="/profile/" className="Navbar-link">
          profile
        </Link>
        <div className="dropdown">
          <button className="dropbtn">
            dojo ▼
          </button>
          <div className="dropdown-content">
            <Link to="/training/" className="Navbar-link dropdown-padding">train</Link>
            <Link to="/battle/" className="Navbar-link dropdown-padding">battle</Link>
          </div>
        </div>
      </div>
      <div className=""></div>
    </nav>
  );
};

export default NavBar;