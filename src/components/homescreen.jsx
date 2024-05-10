import React from "react";
import AboutMe from "./aboutMe";
import Portfolio from "./portfolio";

const HomeScreen = () => {

    const scrollToContent = () => {
        const aboutMeElement = document.getElementById('about-me');
        aboutMeElement.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="homescreen-container" id="homescreen">
            <div className="name-wrapper">
                <img src="name.png" className="name-logo" alt="logo"/>
            </div>
            <p>CS/Math Student @ UNSW</p>
            <div className="scroll-down" onClick={scrollToContent}>
                &#8595;
            </div>
            <div className="spacer"></div>
            <AboutMe />
            <Portfolio />
        </div>
    )
}

export default HomeScreen;