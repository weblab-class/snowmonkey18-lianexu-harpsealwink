import React, { useState, useEffect } from "react";
import Oops from "./Oops.js";
import ProfileCard from "../modules/ProfileCard.js";
import Popup from "../modules/Popup.js";
import { NewInfo } from "../modules/NewInfo.js";
import "./Profile.css";
import "../modules/popup.css";
import ninja_1 from "./ninja_pfps/1.png"
import ninja_2 from "./ninja_pfps/2.png"
import ninja_3 from "./ninja_pfps/3.png"
import ninja_4 from "./ninja_pfps/4.png"
import ninja_5 from "./ninja_pfps/5.png"
import ninja_6 from "./ninja_pfps/6.png"

import { get, post } from "../../utilities";

const Profile = (props) => {
    const[highestLevel, setHighestLevel] = useState(2);
    const[starFuncs, setStarFuncs] = useState([]);
    const[ninjaPower, setNinjaPower] = useState("");
    const[ninjaPower2, setNinjaPower2] = useState("");
    const[pfp, setPfp] = useState(0);
    const [buttonPopup, setButtonPopup] = useState(false);

    const handleNinjaPower2Change = (event) => {
        setNinjaPower2(event.target.value);
    };

    const handleClick = () => {
        if (ninjaPower2.length !== 0) {
        post('/api/setNinjaPower', {ninjaPower: String(ninjaPower2), userId: props.userId})
            .then(() => {
                get("/api/getNinjaPower").then((obj) => {
                    setNinjaPower(obj.ninjaPower)
                });
            });
        };
    };

    useEffect(() => {
        document.title = "Profile";
        console.log("made it this far");
        get("/api/getHighestLevel").then((obj) => {
            setHighestLevel(obj.highestLevel);
        });
        get("/api/getStarFuncs").then((obj) => {
            setStarFuncs(obj.starFuncs);
        });
        get("/api/getNinjaPower").then((obj) => {
            setNinjaPower(obj.ninjaPower);
        });
    }, []); 
    // useEffect(() => {
    //     starFuncs.forEach((func,idx) => {
    //         console.log(func, idx);
    //     });
    // }, [starFuncs]);

    const mapFuncs = () => {
        return starFuncs.map(func => <li>{func}</li>);
    }
    
    //post('/api/setHighestLevel', {level: Number(props._id), userId: props.userId});
    //post('/api/setFavoriteFunction', {favoriteFunction: String(favoriteFunction), userId: props.userId});

    return (
        <div>
            {props.isLoggedIn ? (
                <div>
                    <div>
                        UserId: {props.userId}
                    </div>
                    <div>
                        userName: {props.userName}
                    </div>
                    <div>
                        Highest level: {highestLevel}
                    </div>
                    <div>
                        Starred functions: 
                        <div>
                            {mapFuncs()}
                        </div>
                    </div>
                    <div>
                        Ninja power: {ninjaPower}
                    </div>
    
                    <input type = "text" value={ninjaPower2} onChange = {handleNinjaPower2Change}></input>
                    <button onClick = {handleClick}>Edit ninja power</button>
        
                </div>
            ) : <Oops />
            }
        </div>
    );
};

export default Profile;
  