import React from "react";
import { Link } from "@reach/router";
import "../pages/Profile.css";

/**
 * Story is a component that renders creator and content of a story
 *
 * Proptypes
 * @param {string} _id of the story
 * @param {string} creator_name
 * @param {string} creator_id
 * @param {string} content of the story
 */
const SingleInfo = (props) => {
  return (
    <div> 
      {props.isLoaded ? (
        <>
          <h1 className="Profile-title"> {props.creator_name}'s Profile </h1>
          <div className="Profile-info">
            <p></p>
            <div> My mood: </div>
            <p></p>
            {props.content}
            <p></p>
          </div>
          </>
            ) : (
            <div>Loading...</div>
        )}
    </div>
  );
};

export default SingleInfo;