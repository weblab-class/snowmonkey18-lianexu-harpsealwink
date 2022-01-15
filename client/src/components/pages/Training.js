import React, { useState, useEffect } from "react";
import GraphCard2 from "../modules/GraphCard2";

import "./Training.css";



/**
 * Training page will consist of predetermined levels created by us
 *
 * Proptypes
 * @param {string} _id of the level
 * @param {string} sidebar (what's shown on the SideCard for users to interact with)
 * @param {string} graph_content (what's shown on the GraphCard)
 */

const Training = (props) => {
    return(
        <div className="Training-container"> 
            <div className="Training-text">
                <h1>
                    Training: Level {/* level goes here */}
                </h1>
                <p className="Training-info">
                    Match the red graph as closely as you can!
                </p>
                <div>

                </div>
            </div>
            <GraphCard2/>
            
        </div>
    );
};

export default Training;