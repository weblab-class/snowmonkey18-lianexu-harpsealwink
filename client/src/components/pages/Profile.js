import React, { useState, useEffect } from "react";
import ProfileCard from "../modules/ProfileCard.js";
import { NewInfo } from "../modules/NewInfo.js";
import "./Profile.css";

import { get } from "../../utilities";
import { post } from "../../utilities";

const Profile = (props) => {
    const [infos, setInfos] = useState([]);
    const [isEditing, setIsEditing] = useState(false)
  
    // called when the "Feed" component "mounts", i.e.
    // when it shows up on screen
    useEffect(() => {
      document.title = "Profile";
      get("/api/profileinfos").then((infoObjs) => {
        let reversedInfoObjs = infoObjs.reverse();
        setInfos(reversedInfoObjs);
      });
    }, []); 
  
    // this gets called when the user pushes "Submit", so their
    // post gets added to the screen right away
    const addNewInfo = (infoObj) => {
        setInfos([]);
        setInfos([infoObj]);
    };
  
    let infosList = null;
    let hasInfos;
    for (const infoObj of infos) {
        // console.log(infoObj.creator_id)
        if (infoObj.creator_id===props.userId) {
            hasInfos = true;
            break;
          } 
      }
    if (hasInfos) {
        for (const info of infos) {
            if (info.creator_id===props.userId) {
                infosList = [info].map((infoObj) => (
                    <ProfileCard
                      key={`ProfileCard_${infoObj._id}`}
                      _id={infoObj._id}
                      creator_name={infoObj.creator_name}
                      creator_id={infoObj.creator_id}
                      userId={props.userId}
                      content={infoObj.content}
                    />
                  ));
                break;
            }
        }
    } else {
      infosList = <div>Update your profile info!</div>;
    }

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };


    return (
        <div>
            {props.isLoggedIn ? (
                <div className="Profile-text">
                    <h1>
                        {props.userName}'s profile
                    </h1>
                    <div className="Profile-info">
                    {!isEditing ? (
                        <>
                            <button onClick={toggleEdit}>edit</button>
                            {infosList}
                        </>                     
                    ) : (
                        <>
                            <span>
                                <button onClick={toggleEdit}>done</button>
                                <NewInfo addNewInfo={addNewInfo} />
                            </span>
                            {infosList}
                        </>
                    )}
                    </div>
                </div>
            ) : (
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
            )}
        </div>
    );
};

export default Profile;
