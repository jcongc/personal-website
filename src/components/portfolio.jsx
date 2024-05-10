import React, {useState} from "react";

const Portfolio = () => {


    const [show, setShow] = useState('skills');

    const Skills = () => (
        <div className="skills-list">
            <h2>Skills</h2>
            <ul>
                <li>C <span> - COMP1511/COMP2521</span></li><br/>
                <li>C++</li><br/>
                <li>Javascript/Typescript<span> - COMP1531</span></li><br/>
                <li>HTML/CSS/React<span> - COMP6080/Personal Website (This one!)</span></li><br/>
                <li>Python</li><br/>
                <li>SQL/PostgreSQL/Non-SQL<span> - COMP3311</span></li><br/>
                <li>Assembly (MIPS)<span> - COMP1521</span></li><br/>
                <li>Java</li><br/>
                <li>Git <span> - COMP1531/Projects</span></li><br/>
            </ul>
        </div>
    );

    const Experience = () => (
        <div className="experience-list">
            <h2>Experience</h2>
            <ul>
                <li>2023 - 2024<span> - HSC Extension 2 Content Creator</span></li><br/>
                <li>2020 - 2021<span> - Marker and Tutor for primary school and high school</span></li><br/>
                <li>2017 - 2018<span> - Marker and Tutor for primary school</span></li><br/>
            </ul>
        </div>
    );

    return (
        <div className="port-wrapper">
            <div className="port-container" id="portfolio">
                <h1>Portfolio</h1>
                <div className="port-button-container">
                    <button className={show === 'skills' ? 'selected' : ''} onClick={() => setShow('skills')}>Skills</button>
                    <button className={show === 'experience' ? 'selected' : ''} onClick={() => setShow('experience')}>Experience</button>
                </div>
                {show === 'skills' ? <Skills /> : <Experience />}
            </div>
            <div className="proj-container" id="projects">
                <h1>Projects</h1>
                <a href="https://www.espn.com.au/mma/" target="_blank" rel="noopener noreferrer">
                    <div className="proj-wrapper">
                        <img src="Logo-UFC.png" alt="UFC logo" className="projects-image"></img>
                        <div className="image-layer">
                            <p className="overlay-text">UFC Fight Predictor and Data Scraper (WIP)</p>
                            <div className="external-link">
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/jcongc/personal-website" target="_blank" rel="noopener noreferrer">
                    <div className="proj-wrapper">
                        <img src="personalsite.png" alt="personal site" className="projects-image"></img>
                        <div className="image-layer">
                            <p className="overlay-text">Personal Website</p>
                            <div className="external-link">
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )

}

export default Portfolio;