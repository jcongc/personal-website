import React from "react";
import useMediaQuery from '@mui/material/useMediaQuery';

const Header = () => {
    const isSmall = useMediaQuery('(max-width:800px)');
    return (
        <header className="header">
            <h1>{isSmall ? "Jason C" : "Jason Cong Chen"}</h1>
            <div className="header-button-container">
                <a className="header-button" href="/">Home</a>
                <a className="header-button" href="/projects">Projects</a>
            </div>
        </header>
    )
}

export default Header;