import React, { useState, useEffect } from "react";
import ProfileCard from "../modules/ProfileCard.js";
import { NewInfo } from "../modules/NewInfo.js";

import { get } from "../../utilities";
import { post } from "../../utilities";

const Profile = (props) => {
    const [infos, setInfos] = useState([]);
  
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

    // const [value, setValue] = useState("");
    // const [info, setInfo] = useState([]);


    // useEffect(() => {
    //     document.title = "Profile info";
    //     get("/api/profileinfo").then((infoObj) => {
    //       setInfo(infoObj);
    //     });
    //   }, []);
    //   console.log("hey",info);

    // const addNewInfo = (infoObj) => {
    //     console.log(infoObj.content);

    //     setInfo(infoObj);
    //   };

    // // called whenever the user types in the update profile info box
    // const handleChange = (event) => {
    //   setValue(event.target.value);
    // };
  
    // // called when the user hits "Submit" for an updated profile
    // const addInfo = (event, value) => {
    //     const body = { content: value };
    //     post("/api/profileinfo", body).then((info) => {
    //     // display this profile on the screen
    //     addNewInfo(info);
    //   });
    //   event.preventDefault();
    //   props.onSubmit && props.onSubmit(value);
    //   setValue("");
    // };

    return (
        <div>
            {props.isLoggedIn ? (
                <div>
                    <h1>
                        {props.userName}'s profile
                    </h1>
                    <div className="u-flex">
                    {props.userId && <NewInfo addNewInfo={addNewInfo} />}
                    {infosList}
                        {/* <input
                            type="text"
                            placeholder="Update Profile Info"
                            value={value}
                            onChange={handleChange}
                            className="NewPostInput-input"
                        />
                        <button
                            type="submit"
                            className="NewPostInput-button u-pointer"
                            value="Submit"
                            onClick={addInfo}
                        >
                            Submit
                        </button> */}
                    </div>
            </div>
            ) : (
                <div>
                    <p>
                        Oops! This page is for ninja eyes only.
                    </p>
                    <p>
                        If you are already a ninja, please login to see this page. 
                    </p>
                    <p>
                        If you are not a ninja, please register to become a novice ninja.
                    </p>                    
                </div>
            )
            }
        </div>
    );
};

export default Profile;
