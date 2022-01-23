import React, { useState, useEffect } from "react";
import "./About.css";


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
                are elements that each young ninja must learn to conquer in the quests.
            </p>
            <div className="About-equ"> y=A(x+B)^2+C</div>
            <div className="About-elements"/>
            </div>
        </div>
    );
};

export default About;