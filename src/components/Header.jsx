import React from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';


function Header({onClick, darkMode}) {
    return (
        <header className={`header-tag ${darkMode ?'darkMode' :''}`}>
            <div className="header-container">
                <h2 className="logo-text"> Where in the World? </h2>
                <div className="switch-mode" onClick = {onClick}>
                    <DarkModeIcon />
                    <h3 className="">Dark Mode</h3>
                </div>
            </div>
        </header>
    )
}

export default Header;