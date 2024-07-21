import React from "react";

const AboutMe = () => {
    return (
    <div className="about-me-wrapper">
        <div id="about-me" className="about-me">
            <h1 className="about-me-header"><span className="about-me-intro">Hi!</span> I'm Jason, a second year university student studying CS/Maths at UNSW.</h1>
                <p>I'm currently in my penultimate year of university, and have a strong passion for web dev and programming.</p> 
                <p>I'm always looking to learn, and I believe that a practical approach provides the best learning environment.</p>
                <p>I've worked as a <strong>tutor</strong> and also a <strong>receptionist</strong> but am currently exploring opportunities in tech.</p>
                <p className="interests">Hey! Outside of uni work, I'm usually working on some side project or watching some UFC with my mates.</p>
                <p className="interests">I'm currently working on a UFC data scraper and implementing it into a web app. After this project, I hope to work on a ML fighter predictor using my data scraper.</p>
            </div>
        <img src="me.png" alt="img of me" className="me-pic"/>
    </div>
    )
}

export default AboutMe;