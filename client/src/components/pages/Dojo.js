import React from "react";
import { Link } from "@reach/router";
import "./Dojo.css";

const Dojo = () => {
    return(
        <div className = "Dojo-text">
            <div className="Dojo-title">Dojo</div>

            <div className="Dojo-container">
                <Link to="/training/" className="Dojo-link">training</Link>
                <Link to="/freestyle/" className="Dojo-link">freestyle</Link>
            </div>
        </div>
    );
};       

export default Dojo;