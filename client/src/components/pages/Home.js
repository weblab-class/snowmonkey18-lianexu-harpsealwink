import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import ninja_1 from "./ninja_pfps/1.png";
import ninja_2 from "./ninja_pfps/2.png";
import ninja_3 from "./ninja_pfps/3.png";
import ninja_4 from "./ninja_pfps/4.png";
import ninja_5 from "./ninja_pfps/5.png";
import ninja_6 from "./ninja_pfps/6.png";
import ninja_all from "./ninja_no_background.png";

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
                    <Link to="/training/" className="Home-button">
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
            <img src={ninja_all} className = "ninja_all"/>
        </div>

        

        </div>
    );
};

export default Home;