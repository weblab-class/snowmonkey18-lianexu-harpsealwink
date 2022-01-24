import React from "react";
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "./NavBar.css";


const GOOGLE_CLIENT_ID = "580988859886-5erda5h8q54ha0knsjql9ha87vi7bcll.apps.googleusercontent.com";


/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const NavBar = (props) => {
  return (
    <nav className="Navbar-container">
      <div className="Navbar-title">
        <Link to="/" className="Navbar-title">
          Graph Ninja
        </Link>
      </div>
      <div className="Navbar-link-container">
        {props.isLoggedIn && (
          <Link to={`/profile/${props.userId}`} className="Navbar-link">
            profile
          </Link>
          
        )}
          
        {props.isLoggedIn && (
        <div className="dropdown">
          <button className="dropbtn">
            dojo ▼
          </button>
          <div className="dropdown-content">
            <Link to="/training/" className="Navbar-link dropdown-padding">train</Link>
            <Link to="/freestyle/" className="Navbar-link dropdown-padding">freestyle</Link>
          </div>
        </div>
        )}
        <Link to="/about/" className="Navbar-link">
            about
        </Link>
        {props.isLoggedIn ? (
          <GoogleLogout
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Logout"
            render={renderProps => (
              <button onClick={renderProps.onClick} className="Navbar-button-google">
                logout
              </button>
            )}
            onLogoutSuccess={props.handleLogout}
            onFailure={(err) => console.log(err)}
          />
        ) : (
          <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Login"
            render={renderProps => (
              <button onClick={renderProps.onClick} className="Navbar-button-google">
                login
              </button>
            )}
            onSuccess={props.handleLogin}
            onFailure={(err) => console.log(err)}
          />
        )}
      </div>
      <div className=""></div>
    </nav>
  );
};

export default NavBar;