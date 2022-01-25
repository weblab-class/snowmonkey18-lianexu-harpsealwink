import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "./Home.css";

import { get } from "../../utilities";

const GOOGLE_CLIENT_ID = "580988859886-5erda5h8q54ha0knsjql9ha87vi7bcll.apps.googleusercontent.com";

const Home = (props) => {

    useEffect(() => {
        document.title = "Graph Ninja";
    }, []);

    return(
        <div className = "Home-page">
        <div className="Home-center">
            <div className="Home-title">
                <div className = "Home-title-text">
                Graph Ninja
                </div>
            </div>          
            <div className="Home-text">
                {props.userId ? (
                    <Link to="/dojo/" className="Home-button">
                        let's get started!
                    </Link>
                ) : (
                <GoogleLogin
                    clientId={GOOGLE_CLIENT_ID}
                    buttonText="Login"
                    render={renderProps => (
                        <button onClick={renderProps.onClick} className="Home-button">
                            login to enter dojo
                        </button>
                    )}
                    onSuccess={props.handleLogin}
                    onFailure={(err) => console.log(err)}
                />
                )}
            </div>

            
            {/* <img src="./notFound.png"></img> */}
            <div className = "Ninja-image"/>
        </div>
        </div>
    );
};

export default Home;