import React from "react";

const AboutMe = () => {
    return (
    <div className="about-me-wrapper">
        <div id="about-me" className="about-me">
            <h1 className="about-me-header">I'm Jason, a second year university student studying CS/Maths at UNSW.</h1>
            <p>I vividly remember when I realised how much I enjoyed problem solving. The teacher was explaining factorials, something that seemed abstract at the time, somehow linked it to a problem that we were doing. I thought it was amazing how something that seemed so theoretical could actually be applied and useful in real life, and it allowed me to appreciate the beauty of problem solving.</p>
            
            <p>I'm actively seeking industry opportunities as they offer invaluable experience and allows for an insight into skills outside the classroom.</p>

            <p>I've been obsessed with MMA since high school, and I saw this an opportunity to apply my current studies. I'm currently working on a data scraper to get MMA statistics for a fighter, and after that, hopefully making a fight predictor using machine learning models.</p>            
            <p>I am currently studying these courses:</p>
            <ul>
                <li>MATH2601 - Higher Linear Algebra</li>
                <li>MATH2901 - Higher Theory of Statistics</li>
                <li>MATH2221 - Higher Differential Equations</li>
            </ul>
        </div>
        <img src="me.png" alt="img of me" className="me-pic"/>
    </div>
    )
}

export default AboutMe;