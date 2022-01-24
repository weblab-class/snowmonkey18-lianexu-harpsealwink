import React from "react";
import "./Oops.css";

const Oops = () => {
    return (
        <div className="NotFound-container">
        <div className="NotFound-title">Oops!</div>
        <div className="NotFound-info">
            <div className="NotFound-text">
            <p>
                This page is for ninja eyes only.
            </p>
            <p>
                If you are already a ninja, please login to see this page. 
            </p>
            <p>
                If you are not a ninja, please register to become a novice ninja.
            </p>
            </div>
            <div className="NotFound-text">
            Have some fun ninja images for now:
            </div>
            <div className="NotFound-image"/>
        </div>
        </div>
    );
};

export default Oops;