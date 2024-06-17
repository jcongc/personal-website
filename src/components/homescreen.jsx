import React from "react";
import AboutMe from "./aboutMe";
import Portfolio from "./portfolio";
import Projects from "./projects";

const HomeScreen = () => {

    return (
        <div className="homescreen-container" id="homescreen">
            <div className="name-wrapper">
                <img src="name.png" className="name-logo" alt="logo"/>
            </div>
            <p>CS/Math Student @ UNSW</p>
            <div className="spacer"></div>
            <AboutMe />
            <Portfolio />
            <Projects />
        </div>
    )
}

export default HomeScreen;