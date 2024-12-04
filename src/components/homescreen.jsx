import React from "react";
import { Link } from 'react-router-dom';

const HomeScreen = () => {
    return (
        <div className="homescreen-container">
            <div className="upper-homescreen">
            <div class="self-intro">
                <div class="name">Jason C. Chen</div>
                <div class="subtitle">CS/Math @ UNSW</div>
                <div className="email">
                    <a href="mailto:jasoncongcchen@gmail.com">Email: jasoncongcchen@gmail.com</a>
                </div>
            </div>
            </div>
            <div className="lower-homescreen">
                <Link to="/projects" className="homescreen-button">Projects</Link>
                <Link to="/experience" className="homescreen-button">Experience</Link>
            </div>
        </div>
    );
};

export default HomeScreen;
