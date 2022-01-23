import React from "react";
import { Link } from "@reach/router";

/**
 * Story is a component that renders creator and content of a story
 *
 * Proptypes
 * @param {string} _id of the story
 * @param {string} creator_name
 * @param {string} creator_id
 * @param {string} fav_function is user's favorite function
 * @param {string} ninja_power is user's desired ninja power
 * @param {string} graph_ninja is what user likes about graph ninja
 */
const SingleInfo = (props) => {
  return (
    <div className="">
      <p className="">{props.fav_function}</p>
      <p className="">{props.ninja_power}</p>
      <p className="">{props.graph_ninja}</p>
    </div>
  );
};

export default SingleInfo;