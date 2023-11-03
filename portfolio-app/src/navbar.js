import React from 'react';
import './styles.css'; // use the nav bar css from styles css

// to use hash links
import { HashLink as Link } from 'react-router-hash-link';

// nav bar component 
const Navbar = () => {
    return (
        // nav bar
        <nav>
            <ul className="navbar">
                {/* <li><a href="">Nathan Yuan</a></li> */}
                
                <li><Link className="link" smooth to="#intro">(this website is a WIP) Nathan Yuan</Link></li>
                <li><Link className="link" smooth to="#projects">Projects</Link></li>
                {/* <li><Link className="link" smooth to="#certs">Certificates</Link></li> */}
                <li><Link className="link" smooth to="#skills">Skills</Link></li>
                <li><Link className="link" smooth to="#work">Work Experience</Link></li>
                <li><Link className="link" smooth to="#edu">Education</Link></li>
                <li><Link className="link" smooth to="#leadership">Leadership</Link></li>

                {/* <li><a href="projects.html">Technical Projects</a></li>  */}
                {/* <li><a href="work.html">Work Experience</a></li> */}
                {/* <li><a href="education.html">Education & Leadership</a></li> */}
            </ul>
        </nav>
    );
}

export default Navbar;
