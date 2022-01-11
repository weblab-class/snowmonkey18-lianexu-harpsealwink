import React, { useState, useEffect } from "react";

import "./GraphCard.css";
import { get } from "../../utilities";



const GraphCard = () => {
     
    return(
        
        <div className="GraphCard-container">
            <iframe src="https://www.desmos.com/calculator/g7izucn6nn" className="GraphCard-graph"></iframe>
        </div>
    );
};

export default GraphCard;