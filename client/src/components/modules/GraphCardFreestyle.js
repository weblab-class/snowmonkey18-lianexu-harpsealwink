import React, { useState, useEffect , useRef } from "react";
import functionPlot, { FunctionPlotOptions } from 'function-plot';

import "./GraphCard.css";
import { get , post } from "../../utilities";

const GraphCardFreestyle = (props) => {
    const [func, setFunc] = useState("");
    const noParameters = {
        target: '#myFunction',
        data: [],
        grid: true,
        yAxis: {domain: [-10, 10]},
        xAxis: {domain: [-10, 10]}
    };
    const handleFuncChange = (event) => {
        setFunc(event.target.value);
    };
    const handleClick = () => {
        plot();
    };
    const handleStar = () => {
        console.log("starrr");
        post('/api/addStarFuncs', {func: func, userId: props.userId});
    };

    let plot = () => {
        let parameters = {
            target: '#myFunction',
            data: [
                { fn: func, color: 'blue' },
            ],
            grid: true,
            yAxis: {domain: [-10, 10]},
            xAxis: {domain: [-10, 10]},
        }
        functionPlot(parameters);
    };
    
    useEffect(() => {
        functionPlot(noParameters)
    }, []);
     
    return(
        <div className="GraphCard-container">

        <div className="layer">
            
            <div className = "ninja-textbox-pair">
                <label>
                    function: 
                    <input className = "input-number" value={func} onChange={handleFuncChange} />
                </label>
            </div>
        </div>
            <button className = "plot-button" onClick={handleClick}>Plot it!</button>
            <button onClick={handleStar}>Star</button>
            <div className="GraphCard-graphContainer">
                <div className="GraphCard-graph">
                    <div id="myFunction" />
                </div>
            </div>
        </div>
    );
};

export default GraphCardFreestyle;