import React, { useState, useEffect } from "react";
import Desmos from "desmos";

import "./GraphCard.css";

import { get } from "../../utilities";



const GraphCard = () => {
    const elt = document.createElement('div');
    elt.style.width = '600px';
    elt.style.height = '400px';
    elt.style.position = 'relative';
    const calculator = Desmos.GraphingCalculator(elt);
    calculator.setExpression({ id: 'graph1', latex: 'y=x^2' });
     
    return(
        
        <div className="">
            {document.body.append(elt)}
        </div>
    );
};

export default GraphCard;