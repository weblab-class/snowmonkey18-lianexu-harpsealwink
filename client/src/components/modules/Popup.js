import React from 'react';
import './popup.css';

const Popup = (props) => {
    // const [levels, setLevels] = useState([]);
    // const [levelNumber, setLevelNumber] = useState(0);
    // const [trigger]

    return(props.trigger) ? (
        <div className = "popup">
            <div className = "popup-inner">
                <button className = "close-btn" onClick = {() => props.setTrigger(false)}>
                    close
                </button>
                <div className="level-buttons">
                    {props.children}
                </div>
            </div>
        </div>


    ):"";
};

export default Popup;