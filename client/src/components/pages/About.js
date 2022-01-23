import React, { useState, useEffect } from "react";
import "./About.css";
import stretch_ninja from "../modules/ninjas/stretch_ninja.png";
import sidestep_ninja from "../modules/ninjas/sidestep_ninja.png";
import levitate_ninja from "../modules/ninjas/levitate_ninja.png";


const About = () => {

    useEffect(() => {
        document.title = "About";
        document.body.scrollTop = 0;
    }, []);  

    return(
        <div className="About-text">
            <h1 className="About-title">
                about
            </h1>
            <div className="About-info">
            <p className="About-typewriter">
                 Train to be a quadratic ninja!
            </p>
            <p>
                This website was designed to teach children all about vertex-form quadratic graphs
               through a series of Training Levels, where the constants used to stretch, horizontally shift,
               and vertically shift the graph are represented by skills (stretching, side-stepping, and levitating) 
               that each young ninja must master.
            </p>
            <p>
            Those who are more familiar with vertex form can skip through levels, but we recommend starting from 
            Training Level 1 to hang out with the Sensei!

            </p>
            <div className="About-equ"> y = a (x + b)² + c</div>
            <div className="About-elements">
                <img src={stretch_ninja} className="About-stretch"/>
                <div className="About-element">  </div>
                <img src={sidestep_ninja} className="About-sidestep"/>
                <div className="About-element">  </div>
                <img src={levitate_ninja} className="About-levitate"/>
                <div className="About-element">  </div>
            </div>
            </div>
        </div>
    );
};

export default About;