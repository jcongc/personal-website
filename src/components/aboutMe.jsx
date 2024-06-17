import React from "react";

const AboutMe = () => {
    return (
    <div className="about-me-wrapper">
        <div id="about-me" className="about-me">
            <h1>About me</h1>
            <p>
                Hello! I'm Jason, a Computer Science and Mathematics student at UNSW with a passion for coding and problem-solving. When I was younger, I was always fascinated by how concepts that seemed really abstract at the time could be applied in the real world, and as I progress further into my degrees, I have come to appreciate the intricacies of these ideas, and how they appear in our daily life, whether it be in the form of an algorithm or a mathematical model. I strongly believe that the best way to learn anything is to apply it, and hence love working on projects that challenge me and allow me to learn new technologies and concepts. 
            </p>
            <p>I am actively seeking opportunities to apply my skills in a real-world settings, and believe that industry experience is invaluable.</p>
            <p>
                In addition to my academic pursuits, I’ve been an avid fan of MMA and other combat sports such as wrestling, BJJ and boxing. I enjoy (sometimes) going to Muay Thai and BJJ classes. Currently, I am trying to combine my passion and interest in machine learning by trying to create an accurate fight predictor, as well as a data scraper to help my fight predictor. 
            </p>
        </div>
        <img src="me.png" alt="img of me" className="me-pic"/>
    </div>
    )
}

export default AboutMe;