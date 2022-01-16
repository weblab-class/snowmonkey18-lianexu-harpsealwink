import React, { useState, useEffect, useRef } from "react";
import GraphCard from "../modules/GraphCard";
import "./Training.css";
import functionPlot, { FunctionPlotOptions } from 'function-plot';
// import React, { useRef } from "react";
import "../modules/Dropdown.css";
import Dropdown from "../modules/Dropdown";

import { get } from "../../utilities";


/**
 * Training page will consist of predetermined levels created by us
 *
 * Proptypes
 * @param {string} _id of the level
 * @param {string} sidebar (what's shown on the SideCard for users to interact with)
 * @param {string} graph_content (what's shown on the GraphCard)
 */

const Training = (props) => {
    const [levels, setLevels] = useState([]);
    const [levelNumber, setLevelNumber] = useState(0);

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = Dropdown(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);

    useEffect(() => {
        get("/api/levels").then((levelObjs) => {
          setLevels(levelObjs);
        });
      }, []); 
      
    let levelsList;
    levelsList = levels.map((levelObj) => (
        <GraphCard
        _id={levelObj._id}
        function={levelObj.function}
        />
    ));

    const handleLevel1 = (event) => {
        event.preventDefault();
        setLevelNumber(0)
      };
    const handleLevel2 = (event) => {
        event.preventDefault();
        // functionPlot(levelParameters);
        setLevelNumber(1)
    };
    const handleLevel3 = (event) => {
        event.preventDefault();
        setLevelNumber(2)
    };
    const handleLevel4 = (event) => {
        event.preventDefault();
        setLevelNumber(3)
    };
    const handleLevel5 = (event) => {
        event.preventDefault();
        setLevelNumber(4)
    };


    return(
        <div className="Training-container"> 
            <div>
                <div className = "Training-header">

                    <div className="container">
                        <div className="menu-container">
                            <h1>Training: </h1>
                            <button onClick={onClick} className="menu-trigger">
                                <span>Level {levelNumber+1} out of 5 ▸</span>
                            </button>
                            <nav ref={dropdownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
                                <ul>
                                    <li>
                                    <a href="#" onClick={handleLevel1}>Level 1</a>
                                    </li>
                                    <li>
                                    <a href="#" onClick={handleLevel2}>Level 2</a>
                                    </li>
                                    <li>
                                    <a href="# " onClick={handleLevel3}>Level 3</a>
                                    </li>
                                    <li>
                                    <a href="# " onClick={handleLevel4}>Level 4</a>
                                    </li>
                                    <li>
                                    <a href="# " onClick={handleLevel5}>Level 5</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <p className="Training-info">
                    Match the yellow graph as closely as you can!
                    </p>
                    <p>Note: Ugly background colors are for testing purposes.</p>
                </div>
            </div>
            {levelsList[levelNumber]}
        </div>
        
    );
};

export default Training;