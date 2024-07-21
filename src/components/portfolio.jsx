import React, { useState } from 'react';


const Portfolio = () => {

    const [currentSkill, setCurrentSkill] = useState('prog-lang');

    const changeSkillDisplay = (skill) => {
        setCurrentSkill(skill);
    };

    return (
        <div className="port-wrapper">
            <div className="port-container" id="portfolio">
            <h1>Skills</h1>
            <div className="skills-list">
                <div>
                    <button className={`skill-button ${currentSkill === 'prog-lang' ? 'active' : ''}`} onClick={() => changeSkillDisplay('prog-lang')}>Languages</button>
                    <button className={`skill-button ${currentSkill === 'frameworks' ? 'active' : ''}`} onClick={() => changeSkillDisplay('frameworks')}>Frameworks</button>
                    <button className={`skill-button ${currentSkill === 'tools' ? 'active' : ''}`} onClick={() => changeSkillDisplay('tools')}>Tools and Libraries</button>
                </div>
                <ul>
                    {currentSkill === 'prog-lang' && (
                        <>
                            <li>C</li>
                            <li>C++</li>
                            <li>JS/TS</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Python</li>
                            <li>SQL</li>
                            <li>Assembly (MIPS)</li>
                            <li>Java</li>
                        </>
                    )}
                    {currentSkill === 'tools' && (
                        <>
                            <li>Git</li>
                            <li>PhotoShop</li>
                            <li>BeautifulSoup</li>
                            <li>RESTful API</li>
                        </>
                    )}
                    {currentSkill === 'frameworks' && (
                        <>
                            <li>React</li>
                            <li>Angular</li>
                        </>
                    )}
                </ul>
            </div>
            </div>
            <div className="port-container">
            <h1>Experience</h1>
                <div className="experience-list">
                    <ul>
                        <li>2023 - 2024<span> - Recorded videos for and taught HSC Extension 1 and Extension 2 Mathematics</span></li><br/>
                        <li>2020 - 2021<span> - Marker and Tutor for primary school and high school</span></li><br/>
                        <li>2017 - 2018<span> - Marker and Tutor for primary school</span></li><br/>
                    </ul>
            </div>
            </div>
        </div>
    )

}

export default Portfolio;