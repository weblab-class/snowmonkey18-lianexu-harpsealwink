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

import { get } from "../../utilities";
import { post } from "../../utilities";

const Profile = (props) => {
    const[highestLevel, setHighestLevel] = useState("");
    const[favoriteFunction, setFavoriteFunction] = useState("");
    const[ninjaPower, setNinjaPower] = useState("");
    const[ninjaPower2, setNinjaPower2] = useState("");
    const[pfp, setPfp] = useState(0);
    const [buttonPopup, setButtonPopup] = useState(false);

    const pfp_list = [ninja_1, ninja_2, ninja_3, ninja_4, ninja_5, ninja_6];


    // let handlePfp1 = (event) => {
    //     post('/api/setPfp', {pfp: 1, userId: props.userId}).then(() => {
    //         get("/api/getPfp").then((obj) => {
    //             setPfp(obj.pfp)
    //         });
    //     });
        
    //     setButtonPopup(false);
    // }
    // let handlePfp2 = (event) => {
    //     setButtonPopup(false);
    // }
    // let handlePfp3 = (event) => {
    //     setButtonPopup(false);
    // }
    // let handlePfp4 = (event) => {
    //     setButtonPopup(false);
    // }
    // let handlePfp5 = (event) => {
    //     setButtonPopup(false);
    // }
    // let handlePfp6 = (event) => {
    //     setButtonPopup(false);
    // }
    
    let handleNinjaPower2Change = (event) => {
        setNinjaPower2(event.target.value);
    }

    let handleClick = () => {
        if (ninjaPower2.length !== 0){
        post('/api/setNinjaPower', {ninjaPower: String(ninjaPower2), userId: props.userId}).then(() => {
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
            if(obj.highestLevel === -1){
                setHighestLevel("Go to the dojo tab to start training!")
            }else{
            setHighestLevel(obj.highestLevel)
            };
        });
        get("/api/getFavoriteFunction").then((obj) => {
            setFavoriteFunction(obj.favoriteFunction)
        });
        get("/api/getNinjaPower").then((obj) => {
            setNinjaPower(obj.ninjaPower)
        });
        // get("/api/getPfp").then((obj) => {
        //     setPfp(obj.pfp)
        // });
      }, [ninjaPower]); 


    //post('/api/setHighestLevel', {level: Number(props._id), userId: props.userId});
    //post('/api/setFavoriteFunction', {favoriteFunction: String(favoriteFunction), userId: props.userId});

    return (
        <div>
            {props.isLoggedIn ? (
                <div>
                <div className = "Profile-page">
                    <div className = "Profile-title">
                        {props.userName}
                    </div>
                    <img className = "Profile-pic" src = {pfp_list[pfp]}/>
                    <div className = "Highest-level">
                        Highest level passed: {highestLevel}
                    </div>
                    <button className = "Open-levels" onClick={()=> setButtonPopup(true)}>
                        <span>Change Pic</span>
                    </button>



                    {/* <div>
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
                    <button onClick = {handleClick}>Edit ninja power</button> */}
    
                
                </div>
                {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                        <button className="pfp-btn" onClick={handlePfp1} ><img className="pfp-pic" src={pfp_list[0]}></img></button>
                        <button className="pfp-btn" onClick={handlePfp2}><img className="pfp-pic" src={pfp_list[1]}></img></button>
                        <button className="pfp-btn" onClick={handlePfp3}><img className="pfp-pic" src={pfp_list[2]}></img></button>
                        <button className="pfp-btn" onClick={handlePfp4}><img className="pfp-pic" src={pfp_list[3]}></img></button>
                        <button className="pfp-btn" onClick={handlePfp5}><img className="pfp-pic" src={pfp_list[4]}></img></button>
                        <button className="pfp-btn" onClick={handlePfp6}><img className="pfp-pic" src={pfp_list[5]}></img></button>
                </Popup> */}
                </div>



            ): <Oops />
            }
        </div>
        


    );
  };
  
  export default Profile;
  