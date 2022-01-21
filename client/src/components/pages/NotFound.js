import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="NotFound-container">
      <div className="NotFound-title">404 Not Found</div>
      <div className="NotFound-info">
        <div className="NotFound-text">
          Uh oh! The page you requested couldn't be found. 
        </div>
        <div className="NotFound-text">
          Have some fun ninja images instead:
        </div>
        <div className="NotFound-image"/>
      </div>
    </div>
  );
};

export default NotFound;
