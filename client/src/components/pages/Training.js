import React, { useState, useEffect } from "react";
import GraphCard from "../modules/GraphCard";
import "./Training.css";
import Popup from "../modules/Popup";
import TrainingHint from "../modules/TrainingHint";
import TrainingNote from "../modules/TrainingNote";
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
    const [trainingStatus, setTrainingStatus] = useState("Keep trying! Graph ninjas never give up!");

    useEffect(() => {
        get("/api/levels").then((levelObjs) => {
          setLevels(levelObjs);
        }).then(() => {get("/api/getHighestLevel").then((levelObjs) => {
            console.log(JSON.stringify(levelObjs));
            setLevelNumber(levelObjs.highestLevel)
        })});
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
        setTrainingStatus={setTrainingStatus}
        /> : <div></div>;

    const resetParams = () => {
        setA("")
        setB("")
        setC("")
        setTrainingStatus("Keep trying! Graph ninjas never give up!")
        const elem  = document.getElementById("myFunction")
        if(elem !== null) elem.innerHTML = "";
        // document.getElementById("myFunction").innerHTML = "";
    }

    let hintsList;
    hintsList = levels.map((levelObj) => (
        <TrainingHint
        hint={levelObj.hint}
        />
    ));

    let notesList;
    notesList = levels.map((levelObj) => (
        <TrainingNote
        note={levelObj.note}
        />
    ));

    const handleLevel1 = (event) => {
        event.preventDefault();
        if (levelNumber !== 0) {
            setLevelNumber(0)
            resetParams()
        };
        post('/api/setHighestLevel', {level: 0, userId: props.userId});
        setButtonPopup(false);
      };
    const handleLevel2 = (event) => {
        event.preventDefault();
        if (levelNumber !== 1) {
        setLevelNumber(1)
        resetParams()
        }
        post('/api/setHighestLevel', {level: 1, userId: props.userId});
        setButtonPopup(false)
    };
    const handleLevel3 = (event) => {
        event.preventDefault();
        if (levelNumber !== 2) {
            setLevelNumber(2)
            resetParams()
        }
        post('/api/setHighestLevel', {level: 2, userId: props.userId});
        setButtonPopup(false)
    };
    const handleLevel4 = (event) => {
        event.preventDefault();
        if (levelNumber !== 3) {
            setLevelNumber(3)
            resetParams()
        }
        post('/api/setHighestLevel', {level: 3, userId: props.userId});
        setButtonPopup(false)
    };
    const handleLevel5 = (event) => {
        event.preventDefault();
        if (levelNumber !== 4) {
            setLevelNumber(4)
            resetParams()
        }
        post('/api/setHighestLevel', {level: 4, userId: props.userId});
        setButtonPopup(false)
    };

    const handleLevel6 = (event) => {
        event.preventDefault();
        if (levelNumber !== 5) {
            setLevelNumber(5)
            resetParams()
        }
        post('/api/setHighestLevel', {level: 5, userId: props.userId});
        setButtonPopup(false)
    };

    const handleLevel7 = (event) => {
        event.preventDefault();
        if (levelNumber !== 6) {
            setLevelNumber(6)
            resetParams()
        }
        post('/api/setHighestLevel', {level: 6, userId: props.userId});
        setButtonPopup(false)
    };

    const handleLevel8 = (event) => {
        event.preventDefault();
        if (levelNumber !== 7) {
            setLevelNumber(7)
            resetParams()
        }
        post('/api/setHighestLevel', {level: 7, userId: props.userId});
        setButtonPopup(false)
    };

    const handleLevel9 = (event) => {
        event.preventDefault();
        if (levelNumber !== 8) {
            setLevelNumber(8)
            resetParams()
        }
        post('/api/setHighestLevel', {level: 8, userId: props.userId});
        setButtonPopup(false)
    };

    const handleLevel10 = (event) => {
        event.preventDefault();
        if (levelNumber !== 9) {
            setLevelNumber(9)
            resetParams()
        }
        post('/api/setHighestLevel', {level: 9, userId: props.userId});
        setButtonPopup(false)
    };


    // const handleLevel10 = (event) => {
    //     event.preventDefault();
    //     if (levelNumber !== 9) {
    //         setLevelNumber(9)
    //         resetParams()
    //     }
    //     post('/api/setHighestLevel', {level: 9, userId: props.userId});
    //     setButtonPopup(false)
    // };


    return(
        <div>
            {props.isLoggedIn ? (
        
        <div className="Training-container"> 
            <div className="Training-text">
                <h1>
                    Training: Level {levelNumber+1} out of 10
                </h1>
                
                <button className = "Open-levels" onClick={()=> setButtonPopup(true)}>
                <span>Open levels</span>
                </button>
                <div className = "sensei-words">
                    Sensei: {hintsList[levelNumber]}
                </div>
                <div className = "note-words">
                    Note: {notesList[levelNumber]}
                </div>

                
            </div>
            
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <button className="Select-level" onClick = {handleLevel1}>1</button>
                <button className="Select-level" onClick = {handleLevel2}>2</button>
                <button className="Select-level" onClick = {handleLevel3}>3</button>
                <button className="Select-level" onClick = {handleLevel4}>4</button>
                <button className="Select-level" onClick = {handleLevel5}>5</button>
                <button className="Select-level" onClick = {handleLevel6}>6</button>
                <button className="Select-level" onClick = {handleLevel7}>7</button>
                <button className="Select-level" onClick = {handleLevel8}>8</button>
                <button className="Select-level" onClick = {handleLevel9}>9</button>
                <button className="Select-level" onClick = {handleLevel10}>10</button>
            </Popup>

            {levelsList}

            <div className = "training-status-status">Training status: {trainingStatus}</div>

        </div>
            ): (
                <div className="Profile-text">
                    <h1>Oops!</h1>
                    <div className="Profile-info">
                    <p>
                        This page is for ninja eyes only.
                    </p>
                    <p>
                        If you are already a ninja, please login to see this page. 
                    </p>
                    <p>
                        If you are not a ninja, please register to become a novice ninja.
                    </p>      
                    </div>              
                </div>
            )
            }


        </div>

    );
};

export default Training;