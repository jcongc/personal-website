import React from "react";
import BackButton from "./backButton";

const Experience = () => {
    return (
        <div className="page-content page-content-experience">
            <BackButton />
            <div className="centre">
                <div className="experience-container">
                    <h1 className="experience-heading">Experience and Skills</h1>
                    <div className="experience-wrapper">
                        <div className="experience">
                            <h2>Experience</h2>
                            <p><strong>2023 - 2024:</strong> Recorded videos for and taught HSC Extension 1 and Extension 2 Mathematics</p>
                            <p><strong>2020 - 2021:</strong> Marker and Tutor for primary school and high school</p>
                            <p><strong>2017 - 2018:</strong> Marker and Tutor for primary school</p>
                        </div>
                        <div className="experience">
                            <h2>Skills</h2>
                            <p><strong>Programming Languages:</strong> JS, TS, Python, C, Java, SQL, HTML, CSS</p>
                            <p><strong>Tools and Libraries:</strong> BeautifulSoup, RestfulApi, Git, Pandas, NumPy</p>
                            <p><strong>Frameworks:</strong> React, Angular</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
