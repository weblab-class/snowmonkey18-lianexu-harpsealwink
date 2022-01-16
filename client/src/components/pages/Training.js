import React, { useState, useEffect } from "react";
import GraphCard from "../modules/GraphCard";
import "./Training.css";
import functionPlot, { FunctionPlotOptions } from 'function-plot';

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
            <div className="Training-text">
                <h1>
                    Training: Level {levelNumber+1}
                </h1>
                <button
                type="submit"
                onClick={handleLevel1}
                >
                Level 1
                </button>
                <button
                type="submit"
                onClick={handleLevel2}
                >
                Level 2
                </button>
                <button
                type="submit"
                onClick={handleLevel3}
                >
                Level 3
                </button>
                <button
                type="submit"
                onClick={handleLevel4}
                >
                Level 4
                </button>
                <button
                type="submit"
                onClick={handleLevel5}
                >
                Level 5
                </button>
                <p className="Training-info">
                    Match the yellow graph as closely as you can!
                </p>
                <div>

                </div>
            </div>

            {levelsList[levelNumber]}

{/* 
            <div style="margin:5px">
                <p>
                    <label for="c1">
                        c1:
                    </label>
                    <input 
                        type="range" id="c1" style="border:0; color:#f6931f; font-weight:bold;" 
                        min="0" max="100" value="60" 
                        oninput="c1 = this.value*0.01; board.update();" 
                    />
                    <label for="f1">
                        f1:
                    </label>
                    <input 
                        type="range" id="f1" style="border:0; color:#f6931f; font-weight:bold;" 
                        min="1" max="100" value="7"
                        oninput="f1 = this.value; board.update();" 
                    />
                    <label for="c2">
                        c2:
                    </label>
                    <input 
                        type="range" id="c2" style="border:0; color:#f6931f; font-weight:bold;" 
                        min="0" max="100" value="0"
                        oninput="c2 = this.value*0.01; 
                                board.updateQuality = board.BOARD_QUALITY_HIGH;
                                board.update();" 
                    />
                    <label for="f2">
                        f2:
                    </label>
                    <input 
                        type="range" id="f2" style="border:0; color:#f6931f; font-weight:bold;" 
                        min="1" max="100" value="17"
                        oninput="f2 = this.value; board.update();" 
                    />
                </p>
            </div>

            <jsxgraph width="500" height="500" box="jxgbox">
                board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: ([-2.5,2.5,2.5,-2.5], keepaspectratio:true)});
                let c1 = 0.6;
                let c2 = 0.0; 
                let f1 = 7; 
                let f2 = 17;
                let c = board.create('curve', [
                    ((t) => { Math.cos(t)+ c1*Math.cos(f1*t)+ c2*Math.cos(f2*t) }),
                    ((t) => { Math.sin(t)+ c1*Math.sin(f1*t)+ c2*Math.sin(f2*t) }),
                    0,2.02*Math.PI], 
                    strokeWidth: 2);
            </jsxgraph>            
                             */}

        </div>
    );
};

export default Training;