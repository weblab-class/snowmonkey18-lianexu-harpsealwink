import React, { useState, useEffect , useRef } from "react";
import functionPlot, { FunctionPlotOptions } from 'function-plot';
import Plot from 'react-function-plot';

import "./GraphCard.css";
import { get } from "../../utilities";

const GraphCard = (props) => {
    const [func, setFunc] = useState("");
    const [trainingStatus , setTrainingStatus] = useState("");
    // const [funcParameters, setFuncParameters] = useState({

    const funcParameters = {
        target: '#myFunction',
        data: [
            { fn: props.function, color: 'yellow' },
        ],
        grid: true,
        yAxis: {domain: [-10, 10]},
        xAxis: {domain: [-10, 10]}
    };

    // const [levels, setLevels] = useState([]);
    // const [levelNumber, setLevelNumber] = useState(0);

    const handleFuncChange = (event) => {
        setFunc(event.target.value);
    };
    const handleClick = () => {
        plot();
    };
    const handleAChange = (event) => {
        props.setA(event.target.value);
    }
    const handleBChange = (event) => {
        props.setB(event.target.value);
    }
    const handleCChange = (event) => {
        props.setC(event.target.value);
    }


    /* let levels = [(0,1,2), (0,1,2)] */ 
/* store level schema. get/levels endpoint. Send get request to database*/ 

// called when the "Feed" component "mounts", i.e.
// when it shows up on screen


       
    /* userParameters.data[0].fn = func; */

    let plot = () => {
        // if (len(trueParameters.data) == 1){
        //     trueParameters.data.pop();
        // }

        //clearPlot();
        let userFunction = String(props.a+"x^2"+ "+" + props.b + "x" + "+" + props.c);
        let newParameters = {
            target: '#myFunction',
            data: [
                { fn: props.function, color: 'yellow' },
                { fn: userFunction, color: 'red' }
            ],
            grid: true,
            yAxis: {domain: [-10, 10]},
            xAxis: {domain: [-10, 10]}
        }
        // funcParameters.data.push({ fn: userFunction, color: 'red' });
        // setFuncParameters(newParameters);
        if (userFunction == props.function) {
            setTrainingStatus("Yay!")
        } else {
            setTrainingStatus("Keep trying!")
        }
        functionPlot(newParameters);
        //console.log(funcParameters);
    };
    
   
    useEffect(() => {
        functionPlot(funcParameters)
    },[props.function]);

     
    return(
        <div className="GraphCard-container">
        <div className="layer">
            <p>ax^2+bx+c</p>
            <label >a: <input type="number" value={props.a} onChange={handleAChange} />
            </label>
            <p></p>
            <label >b: <input type="number" value={props.b} onChange={handleBChange} />
            </label>
            <p></p>
            <label>c: <input type="number" value={props.c} onChange={handleCChange} />
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
        {/* <Plot
  className='myPlot'
  fn={(x) => x}
  thickness={4}
/> */}

        </div>
    );
};

export default GraphCard;