import React from "react"
import BackButton from "./backButton";

const Projects = () => {

    return (
        <>
            <BackButton></BackButton>
            <div className="centre">
                <div className="proj-container">
                    <h1 className="proj-heading">Projects</h1>
                    <div className="proj-wrapper">
                        <div className="proj">
                            <a href="https://github.com/jcongc/mma-data-scraper" target="_blank" rel="noopener noreferrer">
                                <img src="Logo-UFC.png" className="proj-img" alt="ufc-logo"></img>
                                <h2>UFC Data Scraper</h2>
                            </a>
                            <h3 className="proj-tech"> Tech Stack: BeautifulSoup, Python</h3>
                            <p className="proj-desc">Created a data scraper to get statistics of fighters from ESPN.</p>
                        </div>
                        <div className  ="proj">
                            <a href="https://github.com/jcongc/personal-website" target="_blank" rel="noopener noreferrer">
                                <img src="personalsite.png" className="proj-img personal-site" alt="personal-site"></img>
                                <h2>Personal Site</h2>
                            </a>
                            <h3 className="proj-tech"> Tech Stack: JS, React, HTML, CSS</h3>
                            <p className="proj-desc">Portfolio website to showcase projects.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Projects;