import React, { useState, useEffect } from "react";
import GraphCard from "../modules/GraphCard";
import "./Training.css";
import functionPlot, { FunctionPlotOptions } from 'function-plot';
import Popup from "../modules/Popup";
import TrainingHint from "../modules/TrainingHint";

import { get, post } from "../../utilities";


/**
 * Training page will consist of predetermined levels created by us
 *
 * Proptypes
 * @param {string} _id of the level
 * @param {string} sidebar (what's shown on the SideCard for users to interact with)
 * @param {string} graph_content (what's shown on the GraphCard)
 */

const Training = (props) => {
    const [levels, setLevels] = useState([]);
    const [levelNumber, setLevelNumber] = useState(0);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [c, setC] = useState("");


    useEffect(() => {
        get("/api/levels").then((levelObjs) => {
          setLevels(levelObjs);
        });

        get("/api/user", {userId: props.userId}).then(user => {
            if(user.level === undefined){
                setLevelNumber(0);
            }
            else{
                 
            setLevelNumber(user.level);
            }
        }
        
        )
      }, []); 
      
    let levelsList;
    let levelObj = levels[levelNumber];
    levelsList = levels.length !== 0 ? <GraphCard
        _id={levelObj._id}
        function={levelObj.function}
        a={a}
        b={b}
        c={c}
        setA={setA}
        setB={setB}
        setC={setC}
        /> : <div></div>;

    const resetParams = () => {
        setA("")
        setB("")
        setC("")
        document.getElementById("myFunction").innerHTML = "";
    }

    let hintsList;
    hintsList = levels.map((levelObj) => (
        <TrainingHint
        hint={levelObj.hint}
        />
    ));

    // const handleLevel = (event, i) => {
    //     event.preventDefault();
    //     post('/api/updateLevel', {level: i, userId: props.userId}).then(res => {
    //         console.log(res);
    //         if (levelNumber !== i) {
    //             setLevelNumber(i)
    //             resetParams()
    //         };
    //         setButtonPopup(false);
    //     }
    // )
        
    // }

    // const handleLevel1 = (event) => {
    //     event.preventDefault();
    //     if (levelNumber !== 0) {
    //         setLevelNumber(0)
    //         resetParams()
    //     };
    //     setButtonPopup(false);
    //   };
    // const handleLevel2 = (event) => {
    //     event.preventDefault();
    //     if (levelNumber !== 1) {
    //     setLevelNumber(1)
    //     resetParams()
    //     }
    //     setButtonPopup(false)
    // };
    // const handleLevel3 = (event) => {
    //     event.preventDefault();
    //     if (levelNumber !== 2) {
    //         setLevelNumber(2)
    //         resetParams()
    //     }
    //     setButtonPopup(false)
    // };
    // const handleLevel4 = (event) => {
    //     event.preventDefault();
    //     if (levelNumber !== 3) {
    //         setLevelNumber(3)
    //         resetParams()
    //     }
    //     setButtonPopup(false)
    // };
    // const handleLevel5 = (event) => {
    //     event.preventDefault();
    //     if (levelNumber !== 4) {
    //         setLevelNumber(4)
    //         resetParams()
    //     }
    //     setButtonPopup(false)
    // };

    const handleLevel1 = (event) => {
        event.preventDefault();
        post('/api/updateLevel', {level: 0, userId: props.userId}).then(res => {
            console.log(res);
            if (levelNumber !== 0) {
                setLevelNumber(0)
                resetParams()
            };
        setButtonPopup(false);
      });
    };
    const handleLevel2 = (event) => {
        event.preventDefault();
        post('/api/updateLevel', {level: 1, userId: props.userId}).then(res => {
            console.log(res);
            if (levelNumber !== 1) {
                setLevelNumber(1)
                resetParams()
            };
        setButtonPopup(false);
      });
    };
    const handleLevel3 = (event) => {
        event.preventDefault();
        post('/api/updateLevel', {level: 2, userId: props.userId}).then(res => {
            console.log(res);
            if (levelNumber !== 2) {
                setLevelNumber(2)
                resetParams()
            };
        setButtonPopup(false);
      });
    };
    const handleLevel4 = (event) => {
        event.preventDefault();
        post('/api/updateLevel', {level: 3, userId: props.userId}).then(res => {
            console.log(res);
            if (levelNumber !== 3) {
                setLevelNumber(3)
                resetParams()
            };
        setButtonPopup(false);
      });
    };
    const handleLevel5 = (event) => {
        event.preventDefault();
        post('/api/updateLevel', {level: 4, userId: props.userId}).then(res => {
            console.log(res);
            if (levelNumber !== 4) {
                setLevelNumber(4)
                resetParams()
            };
        setButtonPopup(false);
      });
    };

    return(
        <div className="Training-container"> 
            <div className="Training-text">
                <h1>
                    Training: Level {levelNumber+1} out of 5
                </h1>
                
                <button className = "Open-levels" onClick={()=> setButtonPopup(true)}>
                <span>Open levels</span>
                </button>
                <div className = "hint">
                    {hintsList[levelNumber]}
                </div>

                
            </div>
            
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                {/* <button className="Select-level" onClick = {(e) => handleLevel(e, 0)}>1</button>
                <button className="Select-level" onClick = {(e) => handleLevel(e, 1)}>2</button>
                <button className="Select-level" onClick = {(e) => handleLevel(e, 2)}>3</button>
                <button className="Select-level" onClick = {(e) => handleLevel(e, 3)}>4</button>
                <button className="Select-level" onClick = {(e) => handleLevel(e, 4)}>5</button> */}
                <button className="Select-level" onClick = {handleLevel1}>1</button>
                <button className="Select-level" onClick = {handleLevel2}>2</button>
                <button className="Select-level" onClick = {handleLevel3}>3</button>
                <button className="Select-level" onClick = {handleLevel4}>4</button>
                <button className="Select-level" onClick = {handleLevel5}>5</button>
            </Popup>

            {levelsList}

        </div>
    );
};

export default Training;