// import React from 'react';
import './styles.css'; // use the nav bar css from styles css

// to use hash links
import { HashLink as Link } from 'react-router-hash-link';

// expand nav when hamburger us clicked on mobile view
import React, { useEffect } from 'react';

// nav bar component 
const Navbar = () => {
    // function to toggle the navbar
    const toggleNavbar = () => {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('open');
        navbar.classList.toggle('link');

    };

    // use useEffect to add the event listener when the component mounts
    useEffect(() => {
        const hamburger = document.querySelector('.navbar svg');
        hamburger.addEventListener('click', toggleNavbar);

        // clean up the event listener when the component unmounts
        return () => {
            hamburger.removeEventListener('click', toggleNavbar);
        };
    }, []);

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
                
                {/* hamburger button for mobile view */}
                <Link className="link" smooth to="#intro">Nathan Yuan</Link>
                <svg xmlns="http://www.w3.org/2000/svg" fill='whitesmoke' viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>            
                <li><Link className="link" smooth to="#projects">Projects</Link></li>
            </ul>
        </nav>
        
    );
}

export default Navbar;
