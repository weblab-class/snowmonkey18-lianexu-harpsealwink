import React from 'react';
import './popup.css';

const Popup = (props) => {


    return(props.trigger) ? (
        <div className = "popup">
            <div className = "popup-inner">
                <button className = "close-btn" onClick = {() => props.setTrigger(false)}>
                    <span>close</span>
                </button>
                <div className = "popup-header">Roadmap</div>
                <div className="level-buttons">
                    {props.children}
                </div>
            </div>
        </div>


    ):"";
};

export default Popup;