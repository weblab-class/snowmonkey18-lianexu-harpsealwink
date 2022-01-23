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
 * @param {string} fav_function is user's favorite function
 * @param {string} ninja_power is user's desired ninja power
 * @param {string} graph_ninja is what user likes about graph ninja
 */
const ProfileCard = (props) => {

  return (
    <div className="">
      <SingleInfo
        _id={props._id}
        creator_name={props.creator_name}
        creator_id={props.creator_id}
        graph_ninja={props.graph_ninja}
        fav_function={props.fav_function}
        ninja_power={props.ninja_power}
      />
    </div>
  );
};

export default ProfileCard;