import React from "react";
import { Link } from "@reach/router";
import "./Dojo.css";
import Oops from "./Oops.js";

const Dojo = (props) => {
    return(
        <>
            {props.isLoggedIn ? (
        <div className = "Dojo-text">
            <div className="Dojo-title">Dojo</div>

            <div className="Dojo-container">
                <Link to="/training/" className="Dojo-link">training</Link>
                <Link to="/freestyle/" className="Dojo-link">freestyle</Link>
            </div>
        </div>
                    ) : <Oops />
                }
        </>
    );
};       

export default Dojo;