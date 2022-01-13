import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./SignUp.css";


const GOOGLE_CLIENT_ID = "580988859886-5erda5h8q54ha0knsjql9ha87vi7bcll.apps.googleusercontent.com";


const SignUp = (props) => {
    return (
        <>
        <div className="SignUp-button">
        {props.userId ? (
          <GoogleLogout
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={props.handleLogout}
            onFailure={(err) => console.log(err)}
            className="NavBar-link NavBar-login"
          />
        ) : (
          <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={props.handleLogin}
            onFailure={(err) => console.log(err)}
            className="NavBar-link NavBar-login"
          />
        )}
        </div>
        </> 
        );
    };

    export default SignUp;
