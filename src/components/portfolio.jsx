import React, {useState} from "react";

const Portfolio = () => {


    return (
        <div className="port-wrapper">
            <div className="port-container" id="portfolio">
            <h1>Skills</h1>
            <div className="skills-list">
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