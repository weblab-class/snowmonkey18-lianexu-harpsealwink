import React from 'react';
import "./TrainingHint.css";

const TrainingHint = (props) => {


    return(
        <div className="TrainingHint-container">
            {props.hint}
        </div>


    );
};

export default TrainingHint;