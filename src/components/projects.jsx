import React from "react"

const Projects = () => {

    return (
        <div className="proj-container" id="projects">
        <h1>Projects</h1>
        <a href="https://github.com/jcongc/mma-data-scraper" target="_blank" rel="noopener noreferrer">
            <div className="proj-wrapper">
                <img src="Logo-UFC.png" alt="UFC logo" className="projects-image"></img>
                <div class="image-layer">
                    <div class="image-text">ESPN MMA Data Scraper</div>
                </div>
            </div>
        </a>
        <a href="https://github.com/jcongc/personal-website" target="_blank" rel="noopener noreferrer">
            <div className="proj-wrapper">
                <img src="personalsite.png" alt="personal site" className="projects-image"></img>
                <div class="image-layer">
                    <div class="image-text">Personal Site</div>
                </div>
            </div>
        </a>
        </div>
    )

}

export default Projects;