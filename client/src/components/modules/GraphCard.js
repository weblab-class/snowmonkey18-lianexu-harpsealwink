import React, { useState, useEffect , useRef } from "react";
import functionPlot, { FunctionPlotOptions } from 'function-plot';

import "./GraphCard.css";
import { get } from "../../utilities";

const GraphCard = () => {
    const [xMax, setXMax] = useState(10);
    const [xMin, setXMin] = useState(-10);
    const [yMax, setYMax] = useState(10);
    const [yMin, setYMin] = useState(-10);
    const [func, setFunc] = useState("");
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [c, setC] = useState("");
    

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
    const handleAChange = (event) => {
        setA(event.target.value);
    }
    const handleBChange = (event) => {
        setB(event.target.value);
    }
    const handleCChange = (event) => {
        setC(event.target.value);
    }

    /* let levels = [(0,1,2), (0,1,2)] */ 
/* store level schema. get/levels endpoint. Send get request to database*/ 

    let userParameters = {
        target: '#myFunction',
        data: [
            { fn: '', color: '#fce7c8' }, {fn: '2x^2+x+3', color: '#abcdef'} ,
        ],
        grid: true,
        yAxis: {domain: [-10, 10]},
        xAxis: {domain: [-10, 10]}
      };    
      
    let trueParameters = {
        target: '#myFunction',
        data: [
            { fn: '2x^2+x+3', color: '#abcdef' },
        ],
        grid: true,
        yAxis: {domain: [-10, 10]},
        xAxis: {domain: [-10, 10]}
    };

       
    /* userParameters.data[0].fn = func; */
    userParameters.xAxis.domain = [xMin, xMax];
    userParameters.yAxis.domain = [yMin, yMax];
    userParameters.data[0].fn = String(a+"x^2"+ "+" + b + "x" + "+" + c);

    let plot = () => {
        functionPlot(userParameters);
        console.log(userParameters);
    };
      
    useEffect(() => {
        functionPlot(trueParameters)
    }, []);
     
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
            <label >a: <input type="number" value={a} onChange={handleAChange} />
            </label>
            <p></p>
            <label >b: <input type="number" value={b} onChange={handleBChange} />
            </label>
            <p></p>
            <label>c: <input type="number" value={c} onChange={handleCChange} />
            </label> 
            <label> ax^2 + bx + c: 
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