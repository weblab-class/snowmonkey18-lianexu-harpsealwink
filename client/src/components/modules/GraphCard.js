import React, { useState, useEffect } from "react";
import functionPlot from 'function-plot';

import "./GraphCard.css";
import { get } from "../../utilities";

const GraphCard = () => {
    const [xMax, setXMax] = useState(10);
    const [xMin, setXMin] = useState(-10);
    const [yMax, setYMax] = useState(10);
    const [yMin, setYMin] = useState(-10);
    const [func, setFunc] = useState("");

    const handleXMaxChange = (event) => {
        setXMax(event.target.value);
    };
    const handleXMinChange = (event) => {
        setXMin(event.target.value);
    };
    const handleYMaxChange = (event) => {
        setYMax(event.target.value);
    };
    const handleYMinChange = (event) => {
        setYMin(event.target.value);
    };
    const handleFuncChange = (event) => {
        setFunc(event.target.value);
    };
    const handleClick = () => {
        plot();
    };

    let userParameters = {
        target: '#myFunction',
        data: [
            { fn: '', color: '#fce7c8' },
        ],
        grid: true,
        yAxis: {domain: [-10, 10]},
        xAxis: {domain: [-10, 10]}
      };    
      
    let trueParameters = {
        target: '#myFunction',
        data: [
            { fn: 'x^2', color: '#abcdef' },
        ],
        grid: true,
        yAxis: {domain: [-10, 10]},
        xAxis: {domain: [-10, 10]}
    };
       
    userParameters.data[0].fn = func;
    userParameters.xAxis.domain = [xMin, xMax];
    userParameters.yAxis.domain = [yMin, yMax];

    let plot = () => {
        functionPlot(userParameters);
        console.log(userParameters);
    };
      
    useEffect(() => {
        functionPlot(trueParameters)
    });
     
    return(
        <div className="GraphCard-container">
        <div className="layer">
            <label >xMin:  value: <input type="number" value={xMin} onChange={handleXMinChange} />
            </label>
            <p></p>
            <label >xMax: value: <input type="number" value={xMax} onChange={handleXMaxChange} />
            </label>
            <p></p>
            <label>yMin: value: <input type="number" value={yMin} onChange={handleYMinChange} />
            </label> 
            <p></p>
            <label >yMax: value: <input type="number" value={yMax} onChange={handleYMaxChange} />
            </label>
            <p></p>
            <label >Function to plot: 
            <input id="function" type="text" value={func} onChange={handleFuncChange}/>
            </label>
            <p></p>
            <button onClick={handleClick}>Plot it!</button>
        </div>


        <div className="GraphCard-graph">
            <div id="myFunction"></div>
        </div>

        </div>
    );
};

export default GraphCard;