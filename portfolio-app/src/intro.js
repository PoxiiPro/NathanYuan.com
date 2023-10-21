import React from 'react';
import './styles.css'; // use the nav bar css from styles css

// import font awesome icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FaEnvelope, FaFileAlt, FaCodeBranch } from 'react-icons/fa';

//icons:
// const envelope = icon({name: 'faEnvelope', family: 'classic', style: 'regular'})

// intro component 
const Intro = () => {
    return (        
        // intro to display a headshot of me and introduce myself as a software developer
        <div className="intro">
            <div>
                <header>Nathan Yuan</header>
                <h1>Software Engineer</h1>
                <h2>
                    <a href="https://docs.google.com/document/d/13OsXVn3hZYaG93w5ctwk_jRLH1cOswuSSHA-1sopxcs/edit#heading=h.o0p5zpbbfvv3" target="_blank">Resume <FaFileAlt /></a>                 
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <a href="mailto:NathanYuan00@icloud.com?subject= &body= " target="_blank"> NathanYuan00@icloud.com <FaEnvelope /></a>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <a href="https://github.com/PoxiiPro?tab=repositories" target="_blank"> GitHub <FaCodeBranch /></a>
                </h2> 
            </div>
        </div>
    );
}

export default Intro;
