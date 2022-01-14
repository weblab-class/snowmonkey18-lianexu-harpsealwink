import React, { useState, useEffect } from "react";
import SingleInfo from "./SingleInfo.js";
import { get } from "../../utilities";


/**
 * Card is a component for displaying content like stories
 *
 * Proptypes
 * @param {string} _id of the story
 * @param {string} creator_name
 * @param {string} creator_id
 * @param {string} content of the story
 */
const ProfileCard = (props) => {

  return (
    <div className="Card-container">
      <SingleInfo
        _id={props._id}
        creator_name={props.creator_name}
        creator_id={props.creator_id}
        content={props.content}
      />
    </div>
  );
};

export default ProfileCard;