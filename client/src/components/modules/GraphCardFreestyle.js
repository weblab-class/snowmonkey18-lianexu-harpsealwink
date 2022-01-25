import React, { useState, useEffect , useRef } from "react";
import functionPlot, { FunctionPlotOptions } from 'function-plot';

import "./GraphCard.css";
import "./GraphCardFreestyle.css"
import { get , post } from "../../utilities";

const GraphCardFreestyle = (props) => {
    const [func, setFunc] = useState("");
    const [starFuncs, setStarFuncs] = useState([]);

    const noParameters = {
        target: '#myFunction',
        data: [],
        grid: true,
        yAxis: {domain: [-10, 10]},
        xAxis: {domain: [-10, 10]}
    };  

    const plot = (func) => {
        const parameters = {
            target: '#myFunction',
            data: [
                { fn: func, color: '#face7f' },
            ],
            grid: true,
            yAxis: {domain: [-10, 10]},
            xAxis: {domain: [-10, 10]},
        }
        functionPlot(parameters);
    };

    const handleFuncChange = (event) => {
        setFunc(event.target.value);
    };
    const handlePlot = () => {
        plot(func);
    };
    const handleStar = () => {
        post('/api/addStarFuncs', {func: func, userId: props.userId}).then(() => {
            get("/api/getStarFuncs").then((obj) => {
                setStarFuncs(obj.starFuncs);
            });
        });  
    };
    const handleUnstar = () => {
        post('/api/delStarFuncs', {func: func, userId: props.userId}).then(() => {
            get("/api/getStarFuncs").then((obj) => {
                setStarFuncs(obj.starFuncs);
            });
        });
    };

    useEffect(() => {
        document.title = "Graph Ninja - Freestyle";
        get("/api/getStarFuncs").then((obj) => {
            setStarFuncs(obj.starFuncs);
        });
        functionPlot(noParameters)
    }, []);

    const mapFuncs = () => {
        return starFuncs.map(func => <li>{func}</li>);
    }

     
    return(
        <div className="GraphCard-container">
            <div className="Func-container">
                <div className = "ninja-textbox-pair">
                    <label>
                        function: 
                        <input className = "input-func" value={func} onChange={handleFuncChange} />
                    </label>
                </div>
                <div className = "Star-container">
                    <div className = "Star-button-container">
                        <button className = "star-button" onClick={handleStar}>Star</button>
                        <button className = "star-button" onClick={handleUnstar}>Unstar</button>
                    </div>
                    <div className = "Star-funcs-container">
                        My Starred Functions: 
                        <ul className = "test">
                            {mapFuncs()}
                        </ul>
                    </div>
                </div>
            </div>
            <button className = "plot-button" onClick={handlePlot}>Plot it!</button>

            <div className="GraphCard-graphContainer">
                <div className="GraphCard-graph">
                    <div id="myFunction" />
                </div>
            </div>
        </div>
    );
};

export default GraphCardFreestyle;