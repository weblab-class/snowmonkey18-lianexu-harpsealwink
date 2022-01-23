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
                This website was designed to teach children all about quadratic graphs 
                through a series of "Ninja Quests" (aka Training levels), where the constants used to shift a 
                quadratic graph left/right, to shift the graph up/down, and to stretch the graph
                are elements that each young ninja must learn to conquer in quests.
            </p>
            <div className="About-equ"> y = a (x + b)² + c</div>
            <div className="About-elements">
                <img src={stretch_ninja} className="About-stretch"/>
                <div className="About-element"> element a </div>
                <img src={sidestep_ninja} className="About-sidestep"/>
                <div className="About-element"> element b </div>
                <img src={levitate_ninja} className="About-levitate"/>
                <div className="About-element"> element c </div>
            </div>
            </div>
        </div>
    );
};

export default About;