import React, { useState } from "react";

import { post } from "../../utilities";


/**
 * New Post is a parent component for all input components
 *
 * Proptypes
 * @param {string} fav_function is user's favorite function
 * @param {string} ninja_power is user's desired ninja power
 * @param {string} graph_ninja is what user likes about graph ninja
 */
 const NewInfoInput = (props) => {
    const [value, setValue] = useState("");
  
    // called whenever the user types in the new post input box
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    // called when the user hits "Submit" for a new post
    const handleSubmit = (event) => {
      event.preventDefault();
      props.onSubmit && props.onSubmit(value);
      setValue("");
    };
  
    return (
      <div className="">
        <input
          type="text"
          placeholder={props.defaultText}
          value={value}
          onChange={handleChange}
          className=""
        />
        <button
          type="submit"
          className=""
          value="Submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  };
  
  /**
   * New Story is a New Post component for comments
   *
   * Proptypes
   * @param {string} defaultText is the placeholder text
   */
  const NewFavFunc = (props) => {
    const addFavFunc = (value) => {
      const body = { favfunc: value, userId: props.userId };
      post("/api/favfunc", body).then((func) => {
        console.log(func)
        // display this story on the screen
        props.addNewInfo(func);
      });
    };
  
    return <NewInfoInput defaultText="Update Favorite Function" onSubmit={addFavFunc} />;
  };

  const NewNinjaPower = (props) => {
    const addNinjaPower = (value) => {
      const body = { ninjapower: value, userId: props.userId };
      post("/api/ninjapower", body).then((power) => {
        // display this story on the screen
        props.addNewInfo(power);
      });
    };

    return <NewInfoInput defaultText="Update Ninja Power" onSubmit={addNinjaPower} />;
  };

  const NewGraphNinja = (props) => {
    const addGraphNinja = (value) => {
      const body = { graphninja: value, userId: props.userId };
      post("/api/graphninja", body).then((info) => {
        // display this story on the screen
        props.addNewInfo(info);
      });
    };

    return <NewInfoInput defaultText="Update Best Thing About Graph Ninja" onSubmit={addGraphNinja} />;
  };
  
  
  export {NewFavFunc, NewNinjaPower, NewGraphNinja};
  