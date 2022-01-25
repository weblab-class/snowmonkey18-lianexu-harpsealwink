import React, { useState, useEffect , useRef } from "react";
import functionPlot, { FunctionPlotOptions } from 'function-plot';

import "./GraphCard.css";
import { get , post } from "../../utilities";
import quadratic_banner_ninja from "../pages/quadratic_banner_ninja.png";
import stretch_ninja from "./ninjas/stretch_ninja.png";
import sidestep_ninja from "./ninjas/sidestep_ninja.png";
import levitate_ninja from "./ninjas/levitate_ninja.png";
import plot_ninja from "./ninjas/plot_ninja.png";

const GraphCard = (props) => {
    const [func, setFunc] = useState("");
    // const [trainingStatus , setTrainingStatus] = useState("");

    const funcParameters = {
        target: '#myFunction',
        data: [
            { fn: props.function, color: "#face7f"},

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
        } else {
            props.setTrainingStatus("Keep trying! Graph ninjas never give up!")
        };
    };

    let plot = () => {
        let userFunction = String(props.a+"(x+"+props.b+")^2+"+props.c);
        let newParameters = {
            target: '#myFunction',
            data: [
                { fn: props.function, color: '#face7f' },
                { fn: userFunction, color: "white" }
            ],
            grid: true,
            yAxis: {domain: [-10, 10]},
            xAxis: {domain: [-10, 10]}
        }
        functionPlot(newParameters);
    };
    
    useEffect(() => {
        functionPlot(funcParameters);
    }, [props.function]);

    return(
        <div className="GraphCard-container">
            {/* <div className = "ninja-column">
                <img src={stretch_ninja} className = "ninja"/>
                <img src={sidestep_ninja} className = "ninja"/>
                <img src={levitate_ninja} className = "ninja"/>
            </div> */}
            <div className="layer">

                {/* <img src={quadratic_banner_ninja}/> */}
                {/* <div>a(x+b)<sup>2</sup>+c</div> */}

                <div className = "ninja-textbox-layer">
                    <div className = "function-prompt">
                        Form: <span className="function-equ">y=a(x+b)<sup>2</sup>+c</span>
                    </div>
                    <div className = "ninja-textbox-pair">
                        <img src={stretch_ninja} className = "ninja-small"/>
                        <label className="function-prompt">
                            a: <input className = "input-number" type="number" value={props.a} onChange={handleAChange} />
                        </label>
                    </div>
                    <div className = "ninja-textbox-pair">
                        <img src={sidestep_ninja} className = "ninja-small"/>
                        <label className="function-prompt">
                            b: <input className = "input-number" type="number" value={props.b} onChange={handleBChange} />
                        </label>
                    </div>

                    <div className = "ninja-textbox-pair">
                        <img src={levitate_ninja} className = "ninja-small"/>
                        <label className="function-prompt">
                            c: <input className = "input-number" type="number" value={props.c} onChange={handleCChange} />
                        </label>
                    </div>
                </div>
                {/* <p></p> */}
                {/* <p>Training status: {trainingStatus} </p> */}
                {/* <label> ax^2 + bx + c: 
                <input id="function" type="text" value={func} onChange={handleFuncChange}/>
                </label> */}
            </div>
            {/* <button className = "plot-button" onClick={handleClick}><img className = "plot-ninja" src = {plot_ninja}/>Plot it!</button> */}
            <button className = "plot-button" onClick={handleClick}>Plot it!</button>
            {/* <button className = "plot-button" onClick={handleClick}>Plot it!</button> */}
            {/* <img src={quadratic_banner_ninja}/> */}
            <div className="GraphCard-graphContainer">
                <div className="GraphCard-graph">
                    <div id="myFunction" />
                </div>
            </div>
            {/* <Plot className='myPlot' fn={(x) => x} thickness={4} /> */}
        </div>
    );
};

export default GraphCard;