import React, { useState, useEffect , useRef } from "react";
import functionPlot, { FunctionPlotOptions } from 'function-plot';

import "./GraphCard.css";
import { get } from "../../utilities";

const GraphCard2 = (props) => {



     
    return(props.userInput) ? (
        <div className="GraphCard-graph">
            <div id="myFunction"></div>
        </div>

    ): "";
};

export default GraphCard2;