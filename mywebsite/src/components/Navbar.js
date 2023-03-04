import React from 'react';
import './Navbar.css';

function Navbar() {
    const handleNavClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    const handleGitHubClick = () => {
        window.open("https://github.com/kriskris79", "_blank");
    }

    return (
        <nav>
            <button className="glow-on-hover" type="button" onClick={() => handleNavClick('typewriter')}>
                About
            </button>
            <button className="glow-on-hover" type="button" onClick={() => handleNavClick('contact')}>
                Contact
            </button>
            <button className="glow-on-hover" type="button" onClick={handleGitHubClick}>
                GitHub
            </button>
        </nav>
    );
}

export default Navbar;