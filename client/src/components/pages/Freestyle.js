import React, { useState, useEffect } from "react";
import GraphCardFreestyle from "../modules/GraphCardFreestyle.js";
import Oops from "./Oops.js";
import "./Training.css";

import { get, post } from "../../utilities";
import training_ninja_header from "./training_ninja_header.png";
import sensei from "./sensei.png";

const Freestyle = (props) => {

    useEffect(() => {
        document.title = "Graph Ninja - Freestyle";
    }, []); 

    return(
        <div>
            {props.isLoggedIn ? (
                <div className="Training-container"> 
                    <div className = "Training-header">
                        {/* <img src={training_ninja_header} /> */}
                        <div className = "Training-top">
                            <h1>
                                Freestyle
                            </h1>
                        </div>
                        <div className = "sensei-adjacent">
                            <div className = "sensei-box">
                                <div className = "sensei-stuff">
                                    <img src={sensei} className = "sensei-image" />
                                    <span className = "sensei-words">
                                        The key to mastery is practice... * I am a motivational sensei * I wonder what sin(x) and cos(x) do... The rest is for you to discover yourself!
                                    </span>
                                </div>
                            </div>
                        </div>    
                    </div>    
                    <GraphCardFreestyle userId={props.userId} />
                </div>
            ) : (
                <div className="Profile-text">
                    <Oops />          
                </div>
            )}
        </div>
    );
};

export default Freestyle;