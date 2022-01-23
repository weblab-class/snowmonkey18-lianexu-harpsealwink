import React, { useState, useEffect , useRef } from "react";
import functionPlot, { FunctionPlotOptions } from 'function-plot';

import "./GraphCard.css";
import { get , post } from "../../utilities";

const GraphCard = (props) => {
    const [func, setFunc] = useState("");
    // const [trainingStatus , setTrainingStatus] = useState("");


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
        handleTrainingStatusChange();
        // console.log(props._id);
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

    let handleTrainingStatusChange = () => {
        let userFunction = String(props.a+"(x+"+props.b+")^2+"+props.c);
        if (userFunction == props.function) {
        props.setTrainingStatus("Good work! You're ready for the next level!");
        // ----- this -----
        props.setPassedTraining("");
        console.log(props.userId)
        post('/api/setHighestLevel', {level: Number(props._id), userId: props.userId});
        } else{
            props.setTrainingStatus("Keep trying! Graph ninjas never give up!")
        };
    };


    let plot = () => {
        let userFunction = String(props.a+"(x+"+props.b+")^2+"+props.c);
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
        functionPlot(newParameters);

    };
    
   
    useEffect(() => {
        functionPlot(funcParameters)
    },[props.function]);

     
    return(
        <div className="GraphCard-container">
        <div className="layer">
            <p>a(x+b)<sup>2</sup>+c</p>
            <label>a: <input className = "input-number" type="number" value={props.a} onChange={handleAChange} />
            </label>
            {/* <p></p> */}
            <label >b: <input className = "input-number" type="number" value={props.b} onChange={handleBChange} />
            </label>
            {/* <p></p> */}
            <label>c: <input className = "input-number" type="number" value={props.c} onChange={handleCChange} />
            </label> 
            {/* <label> ax^2 + bx + c: 
            <input id="function" type="text" value={func} onChange={handleFuncChange}/>
            </label> */}
            {/* <p></p> */}
            <button onClick={handleClick}>Plot it!</button>
            {/* <p></p> */}
            {/* <p>Training status: {trainingStatus} </p> */}
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