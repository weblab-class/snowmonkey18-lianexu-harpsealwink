import React, { useState, useEffect } from "react";
import Oops from "./Oops.js";
import ProfileCard from "../modules/ProfileCard.js";
import Popup from "../modules/Popup.js";
import { NewInfo } from "../modules/NewInfo.js";
import "./Profile.css";
import "../modules/popup.css";
import ninja_1 from "./ninja_pfps/1.png";
import ninja_2 from "./ninja_pfps/2.png";
import ninja_3 from "./ninja_pfps/3.png";
import ninja_4 from "./ninja_pfps/4.png";
import ninja_5 from "./ninja_pfps/5.png";
import ninja_6 from "./ninja_pfps/6.png";
import corner_frame from "./corner_frame.png";

import { get, post } from "../../utilities";

const Profile = (props) => {
    //props.userName is like "Liane Xu"
    //props.userId is like "23dsff35", which is what we want to use when pulling up info

    const[highestLevel, setHighestLevel] = useState(2);
    const[starFuncs, setStarFuncs] = useState([]);
    const[ninjaPower, setNinjaPower] = useState("");
    const[ninjaPower2, setNinjaPower2] = useState("");
    const[pfp, setPfp] = useState(0);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [ninjaType, setNinjaType] = useState("");

    const ninja_pfps = [ninja_1, ninja_2, ninja_3, ninja_4, ninja_5, ninja_6];
    const ninja_types = ["Pass training levels to level up!", "Novice", "Trainee", "Seasoned dojo-goer", "A true graph ninja!"]

    const handleNinjaPower2Change = (event) => {
        setNinjaPower2(event.target.value);
    };

    const changePicture = () => {
        let num = Math.floor(Math.random() * 6);
        while(num === pfp){
            num = Math.floor(Math.random() * 6);
        }
        post('/api/setPfp', {pfp: num, userId: props.userId});
        setPfp(num);
    }

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
        document.title = "Graph Ninja - Profile";
        // console.log("made it this far");
        get("/api/getHighestLevel").then((obj) => {
            setHighestLevel(obj.highestLevel);
            if (obj.highestLevel+1 === 0){
                setNinjaType(ninja_types[0]);
            } else if(obj.highestLevel+1 >= 1 && obj.highestLevel+1 <= 3) {
                setNinjaType(ninja_types[1]);
            } else if(obj.highestLevel+1 >= 4 && obj.highestLevel+1 <= 6) {
                setNinjaType(ninja_types[2]);
            }else if(obj.highestLevel+1 >= 7 && obj.highestLevel+1 <= 9) {
                setNinjaType(ninja_types[3]);
            }else if(obj.highestLevel+1 === 10) {
                setNinjaType(ninja_types[4]);
            }

        });
        get("/api/getStarFuncs").then((obj) => {
            setStarFuncs(obj.starFuncs);
        });
        get("/api/getNinjaPower").then((obj) => {
            setNinjaPower(obj.ninjaPower);
        });

        get("/api/getPfp").then((obj) => {
            setPfp(obj.pfp);
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
                <div className = "Profile-page">
                    <div className = "Profile-title">{props.userName}'s Ninja Profile</div>
                    <div className = "Highest-level">
                        Highest Training Level: {highestLevel+1} ({ninjaType})
                    </div>
                    <div className="profile-format">
                    <div>
                        <div className = "pfp-img-frame">
                            <img src = {ninja_pfps[pfp]} className = "pfp"/>
                            <img src={corner_frame} className = "corner-pic-topleft"/>
                            <img src={corner_frame} className = "corner-pic-bottomleft"/>
                            <img src={corner_frame} className = "corner-pic-topright"/>
                            <img src={corner_frame} className = "corner-pic-bottomright"/>
                        </div>
                            <button onClick = {changePicture} className = "pfp-btn">Give me a different look!</button>
                    </div>
                    <div className = "Star-funcs">
                        My Starred Functions: 
                        <ul className = "test">
                            {mapFuncs()}
                        </ul>
                    </div>
                </div>

                    {/* <div>
                        Ninja power: {ninjaPower}
                    </div> */}
    
                    {/* <input type = "text" value={ninjaPower2} onChange = {handleNinjaPower2Change}></input>
                    <button onClick = {handleClick}>Edit ninja power</button> */}
        
                </div>
            ) : <Oops />
            }
        </div>
    );
};

export default Profile;
  