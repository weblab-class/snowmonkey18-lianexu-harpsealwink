import React from "react";
import { Link } from "@reach/router";

import "./NavBar.css";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const NavBar = () => {
  return (
    <nav className="Navbar-container">
      <div className="Navbar-title">Graph Ninja</div>
      <div className="">
        <Link to="/" className="Navbar-link">
            home
        </Link>
        <Link to="/about/" className="Navbar-link">
            about
        </Link>
        <div className="dropdown">
          <button class="dropbtn">dojo ▼
          </button>
          <div className="dropdown-content">
            <Link to="/training/" className="Navbar-link dropdown-padding">train</Link>
            <Link to="/battle/" className="Navbar-link dropdown-padding">battle</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;