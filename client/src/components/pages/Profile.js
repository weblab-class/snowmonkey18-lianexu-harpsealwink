import React, { useState, useEffect } from "react";
import Oops from "./Oops.js";
import ProfileCard from "../modules/ProfileCard.js";
import { NewFavFunc, NewNinjaPower, NewGraphNinja } from "../modules/NewInfo.js";
import "./Profile.css";

import { get } from "../../utilities";
import { post } from "../../utilities";

const Profile = (props) => {
    const [infos, setInfos] = useState([]);
    const [favFunc, setFavFunc] = useState("");
    const [ninjaPower, setNinjaPower] = useState("");
    const [isEditing, setIsEditing] = useState(false);
  
    // called when the "Feed" component "mounts", i.e.
    // when it shows up on screen
    useEffect(() => {
      document.title = "Profile";
      get("/api/profileinfos").then((infoObj) => {
        console.log("infos", infoObj);
        setFavFunc(infoObj.highestLevel);
        setNinjaPower(infoObj.ninjaPower);
      });
    }, []); 
  
    // this gets called when the user pushes "Submit", so their gets added to the screen right away
    const addNewFunc = (func) => {
        console.log(func);
        setFavFunc(func);
    };
    const addNinjaPower = (power) => {
        console.log(power)
        setNinjaPower(power);
    };

    let infosList = null;
    let hasInfos;
    // for (const infoObj of infos) {
    //     // console.log(infoObj.creator_id)
    //     if (infoObj.creator_id===props.userId) {
    //         hasInfos = true;
    //         break;
    //       } 
    //   }
    // if (hasInfos) {
    //     for (const info of infos) {
    //         if (info.creator_id===props.userId) {
    //             infosList = [info].map((infoObj) => (
    //                 <ProfileCard
    //                   key={`ProfileCard_${infoObj._id}`}
    //                   _id={infoObj._id}
    //                   creator_name={infoObj.creator_name}
    //                   creator_id={infoObj.creator_id}
    //                   userId={props.userId}
    //                   fav_function={infoObj.fav_function}
    //                   ninja_power={infoObj.ninja_power}
    //                   graph_ninja={infoObj.graph_ninja}                  
    //                   />
    //               ));
    //             break;
    //         }
    //     }
    // } else {
    //   infosList = <div>Update your profile info!</div>;
    // }

    const toggleEdit = () => {
        setIsEditing(!isEditing);
        console.log(infosList)

    };


    return (
        <div>
            {props.isLoggedIn ? (
                <div className="Profile-text">
                    <h1>
                        {props.userName}'s profile
                    </h1>
                    <div className="Profile-info">
                    My favorite function: 
                    {!isEditing ? (
                        <>
                            {favFunc}
                            <button className="Profile-button" onClick={toggleEdit}>edit</button>
                        </>                     
                    ) : (
                        <>
                            <span>
                                <NewFavFunc andNewInfo={addNewFunc}/>
                                <button className="Profile-button" onClick={toggleEdit}>done</button>
                            </span>
                        </>
                    )}
                    <div/>
                    If I could have any ninja power, I would want to...
                    {!isEditing ? (
                        <>
                            {ninjaPower}
                            <button className="Profile-button" onClick={toggleEdit}>edit</button>
                        </>                     
                    ) : (
                        <>
                            {favFunc}
                            <span>
                                <NewNinjaPower addNewInfo={addNinjaPower}/>
                                <button className="Profile-button" onClick={toggleEdit}>done</button>
                            </span>
                        </>
                    )}
                    <div/>
                    My favorite thing about Graph Ninja:
                    {!isEditing ? (
                        <>
                            {infosList}
                            <button className="Profile-button" onClick={toggleEdit}>edit</button>
                        </>                     
                    ) : (
                        <>
                            {infosList}
                            <span>
                                <NewGraphNinja addNewInfo={addNewFunc}/>
                                <button className="Profile-button" onClick={toggleEdit}>done</button>
                            </span>
                        </>
                    )}
                    </div>
                </div>
            ) : (props.isLoaded ? (
                <Oops />
            ) : (
                <div>Loading...</div>
            ))}
        </div>
    );
};

export default Profile;
