import React from "react";
import { Link } from 'react-router-dom';

const HomeScreen = () => {

    return (
        <div className="homescreen-container">
            <div className="upper-homescreen">
                <div className="self-intro">
                    <span className="name">
                        Jason C. Chen
                    </span>
                    <span className="about-me">
                        Aspiring Software Engineer @ UNSW
                    </span>
                </div>
                <div className="links">
                    <a href="https://github.com/jcongc" target="_blank" rel="noopener noreferrer">
                        <img src="github-icon.png" className="icon" alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/jason-cong-chen/" target="_blank" rel="noopener noreferrer">
                        <img src="linkedin-icon.png" className="icon" alt="LinkedIn" />
                    </a>
                </div>
            </div>
            <div className="lower-homescreen">
            <Link to="/projects" className="homescreen-button">
                Projects
            </Link>
            <Link to="/experience" className="homescreen-button">
                Experience
            </Link>
            </div>
        </div>
    )
}

export default HomeScreen;