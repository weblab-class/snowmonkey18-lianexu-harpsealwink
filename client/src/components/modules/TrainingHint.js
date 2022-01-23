import React from 'react';
import "./TrainingHint.css";

const TrainingHint = (props) => {


    return(
        <div className='TrainingHint-text'>
            {props.hint}
        </div>


    );
};

export default TrainingHint;