import React from "react";

const GlobalFooter = () => {
    return (
        <footer id="contact">
            <div className="contact-details">
                <p>Email: jasoncongcchen@gmail.com</p>
                <p>Phone: (+61) 481 675 688</p>
            </div>
            <div className="footer-socials">
                <a href="https://www.linkedin.com/in/jason-cong-chen/" target="_blank" rel="noopener noreferrer">
                    <img src="linkedin-icon.png" alt="LinkedIn" className="footer-icon"/>
                </a>
                <br/> <br/>
                <a href="https://github.com/jcongc" target="_blank" rel="noopener noreferrer">
                    <img src="github-icon.png" alt="GitHub" className="footer-icon"/>
                </a>
                <a href="https://link.clashofclans.com/en?action=OpenPlayerProfile&tag=L8YU0G20V" target="_blank" rel="noopener noreferrer">
                    <img src="clashofclans.png" alt="Clash of Clans" className="footer-icon" id="clashofclans"/>
                </a>
            </div>
        </footer>
    )
}

export default GlobalFooter;
