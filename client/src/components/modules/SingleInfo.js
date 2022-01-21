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
    <div className="Card-story">
      <p className="Card-storyContent">{props.content}</p>
    </div>
  );
};

export default SingleInfo;