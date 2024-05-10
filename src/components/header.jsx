import React from "react";

const Header = () => {

    const scrollToElement = (elementId, event) => {
        event.preventDefault();
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="header">
            <div className="header-button-container">
                <button className="header-button" onClick={(event) => scrollToElement('home', event)}>Home</button>
                <button className="header-button" onClick={(event) => scrollToElement('about-me', event)}>About Me</button>
                <button className="header-button" onClick={(event) => scrollToElement('portfolio', event)}>Portfolio</button>
                <button className="header-button" onClick={(event) => scrollToElement('projects', event)}>Projects</button>
                <button className="header-button" onClick={(event) => scrollToElement('contact', event)}>Contact Me</button>
            </div>
        </header>
    )
}

export default Header;