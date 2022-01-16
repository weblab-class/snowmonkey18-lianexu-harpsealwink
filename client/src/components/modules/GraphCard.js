import React, { useState, useEffect , useRef } from "react";
import functionPlot, { FunctionPlotOptions } from 'function-plot';

import "./GraphCard.css";
import { get } from "../../utilities";

const GraphCard = (props) => {
    const [func, setFunc] = useState("");
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [c, setC] = useState("");
    const [trainingStatus , setTrainingStatus] = useState("");

    // const [levels, setLevels] = useState([]);
    // const [levelNumber, setLevelNumber] = useState(0);

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

// called when the "Feed" component "mounts", i.e.
// when it shows up on screen

    let funcParameters = {
        target: '#myFunction',
        data: [
            { fn: props.function, color: 'yellow' },
        ],
        grid: true,
        yAxis: {domain: [-10, 10]},
        xAxis: {domain: [-10, 10]}
    };

       
    /* userParameters.data[0].fn = func; */

    let plot = () => {
        // if (len(trueParameters.data) == 1){
        //     trueParameters.data.pop();
        // }

        let userFunction = String(a+"x^2"+ "+" + b + "x" + "+" + c);
        funcParameters.data.push({ fn: userFunction, color: 'red' });
        if (userFunction == props.function) {
            setTrainingStatus("Yay!")
        } else {
            setTrainingStatus("Keep trying!")
        }
        functionPlot(funcParameters);
        //console.log(funcParameters);
    };
    
    let clearPlot = () => {
        if(len(funcParameters.data) > 1){
            trueParameters.data.pop();
        }
        functionPlot(funcParameters);
    }

      
    useEffect(() => {
        let userFunction = String("");
        functionPlot(funcParameters)
    });

     
    return(
        <div className="GraphCard-container">
        <div className="layer">
            <p>ax^2+bx+c</p>
            <label >a: <input type="number" value={a} onChange={handleAChange} />
            </label>
            <p></p>
            <label >b: <input type="number" value={b} onChange={handleBChange} />
            </label>
            <p></p>
            <label>c: <input type="number" value={c} onChange={handleCChange} />
            </label> 
            {/* <label> ax^2 + bx + c: 
            <input id="function" type="text" value={func} onChange={handleFuncChange}/>
            </label> */}
            <p></p>
            <button onClick={handleClick}>Plot it!</button>
            <p></p>
            <p>Training status: {trainingStatus} </p>
        </div>


        <div className="GraphCard-graph">
            <div id="myFunction"></div>
        </div>

        </div>
    );
};

export default GraphCard;