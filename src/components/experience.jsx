import React from "react";
import BackButton from "./backButton";

const Experience = () => {
    return (
        <>
            <BackButton></BackButton>
            <div className="centre">
                <div className="experience-container">
                    <h1 className="experience-heading">
                        Experience and Skills
                    </h1>
                    <div className="experience-wrapper">
                        <div className="experience">
                            <h1>Experience</h1>
                                <strong>2023 - 2024</strong><span> - Recorded videos for and taught HSC Extension 1 and Extension 2 Mathematics</span><br/>
                                <strong>2020 - 2021</strong><span> - Marker and Tutor for primary school and high school</span><br/>
                                <strong>2017 - 2018</strong><span> - Marker and Tutor for primary school</span><br/>
                        </div>
                        <div className="experience">
                            <h1>Skills</h1> 
                            <strong>Programming Languages: </strong><span>JS, TS, Python, C, Java, SQL, HTML, CSS</span><br></br>
                            <strong>Tools and Libraries: </strong><span>BeautifulSoup, RestfulApi, Git, Pandas, NumPy</span><br></br>
                            <strong>Frameworks: </strong><span>React, Angular</span><br></br>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience;