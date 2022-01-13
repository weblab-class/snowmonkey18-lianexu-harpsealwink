import React, { useState, useEffect } from "react";

import { get } from "../../utilities";
import { post } from "../../utilities";


const Profile = (props) => {
    const [value, setValue] = useState("");

    // called whenever the user types in the update profile info box
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    // called when the user hits "Submit" for an updated profile
    const handleSubmit = (event) => {

    };

    const addInfo = (event, value) => {
        event.preventDefault();
        props.onSubmit && props.onSubmit(value);
        setValue("");
        const body = { content: value };
        post("/api/profileinfo", body).then((info) => {
        // display this profile on the screen
        props.addNewInfo(info);
      });
    };
    return(
        <div>
            <h1>
                {props.userId}'s profile
            </h1>
            <div className="u-flex">
                <input
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
                </button>
            </div>
        </div>
    );
};

export default Profile;
