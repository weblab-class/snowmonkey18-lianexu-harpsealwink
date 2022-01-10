import React, { useState, useEffect } from "react";

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
                <div> Login to Train or Battle </div>
                <div> </div>
                <div> Register a Novice Ninja </div>
            </div>
        </div>
    );
};

export default Home;