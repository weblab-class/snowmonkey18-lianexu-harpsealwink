import React from "react";
import { Link } from "@reach/router";

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
      <h1> {props.creator_name}'s Profile </h1>
    <div className="">
      <div> My favorite function: </div>
      <p></p>
      {props.content}
      <p></p>
    </div>
    </div>
  );
};

export default SingleInfo;