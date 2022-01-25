import React, { useEffect } from "react";
import { Link } from "@reach/router";
import "./Dojo.css";
import Oops from "./Oops.js";
import ninjas from "./ninja_no_background.png";

const Dojo = (props) => {

    useEffect(() => {
        document.title = "Graph Ninja - Dojo";
    }, []); 

    return(
        <>
            {props.isLoggedIn ? (
        <div className = "Dojo-text">
            <div className="Dojo-title">Dojo</div>

            <div className="Dojo-container">
                <Link to="/training/" className="Dojo-link">training</Link>
                <Link to="/freestyle/" className="Dojo-link">freestyle</Link>
            </div>
            <img className = "ninjas" src = {ninjas}/>
        </div>
                    ) : <Oops />
                }
        </>
    );
};       

export default Dojo;