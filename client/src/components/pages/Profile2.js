import React, { useState, useEffect } from "react";
import Oops from "./Oops.js";
import ProfileCard from "../modules/ProfileCard.js";
import { NewInfo } from "../modules/NewInfo.js";
import "./Profile.css";

import { get } from "../../utilities";
import { post } from "../../utilities";

const Profile2 = (props) => {
    const[highestLevel, setHighestLevel] = useState(2);
    const[favoriteFunction, setFavoriteFunction] = useState("");
    const[ninjaPower, setNinjaPower] = useState("");
    const[ninjaPower2, setNinjaPower2] = useState("");


    let handleNinjaPower2Change = (event) => {
        setNinjaPower2(event.target.value);
    }

    let handleClick = () => {
        post('/api/setNinjaPower', {ninjaPower: String(ninjaPower2), userId: props.userId}).then(() => {
            get("/api/getNinjaPower").then((obj) => {
                setNinjaPower(obj.ninjaPower)
        });
    });
        
        
    };

    
    useEffect(() => {
        document.title = "Profile";
        console.log("made it this far");
        get("/api/getHighestLevel").then((obj) => {
            setHighestLevel(obj.highestLevel)
        });
        get("/api/getFavoriteFunction").then((obj) => {
            setFavoriteFunction(obj.favoriteFunction)
        });
        get("/api/getNinjaPower").then((obj) => {
            setNinjaPower(obj.ninjaPower)
        });
      }, []); 


    //post('/api/setHighestLevel', {level: Number(props._id), userId: props.userId});
    //post('/api/setFavoriteFunction', {favoriteFunction: String(favoriteFunction), userId: props.userId});

    return (
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
                Favorite function: {favoriteFunction}
            </div>
            <div>
                Ninja power: {ninjaPower}
            </div>

            <input type = "text" value={ninjaPower2} onChange = {handleNinjaPower2Change}></input>
            <button onClick = {handleClick}>Edit ninja power</button>

        </div>

    );
  };
  
  export default Profile2;
  