import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";

import "./Home.css";

import { get } from "../../utilities";


const Home = () => {
    return(
        <div className="Home-center">
            <div className="Home-title">
                Graph Ninja
            </div>
            <div className="Home-slogan">
                [insert slogan]
            </div>
            <div className="Home-text">
                <Link to="/signup/" className="Home-link">
                Login to Train or Battle
                </Link>
                <div> </div>
                <Link to="/signup/" className="Home-link">
                Register a Novice Ninja
                </Link>
            </div>
        </div>
    );
};

export default Home;