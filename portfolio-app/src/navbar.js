import React from 'react';
import './styles.css'; // use the nav bar css from styles css

// nav bar component 
const Navbar = () => {
    return (
        <nav>
            <ul className="navbar">
                <li><a href="index.html">Nathan Yuan</a></li>
                <li><a href="projects.html">Technical Projects</a></li>
                <li><a href="work.html">Work Experience</a></li>
                <li><a href="education.html">Education & Leadership</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
