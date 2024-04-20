import React from 'react';
import './styles.css'; // use the nav bar css from styles css

// import font awesome icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FaEnvelope, FaFileAlt, FaCodeBranch } from 'react-icons/fa';

//icons:
// const envelope = icon({name: 'faEnvelope', family: 'classic', style: 'regular'})

// import headshot photo of me
import headshot from './src images/intro-headshot-no-bg.png'

// intro component 
const Intro = () => {
    return (        
        // intro to display a headshot of me and introduce myself as a software developer
        <div className="intro">
            <div id="intro">
                <header>Nathan Yuan</header>
                <h1>Software Engineer</h1>
                <h2>
                    <a href="https://drive.google.com/file/d/1ZMMmN7CUAicpeIyAvz_WClqGvMjDVaIz/view?usp=drive_link" target="_blank" rel="noreferrer">Resume <FaFileAlt /></a>                 
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <a href="mailto:NathanYuan00@icloud.com?subject= &body= " target="_blank" rel="noreferrer"> NathanYuan00@icloud.com <FaEnvelope /></a>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <a href="https://github.com/PoxiiPro?tab=repositories" target="_blank" rel="noreferrer"> GitHub <FaCodeBranch /></a>
                    <div>
                        <img src={headshot} alt="headshot" />
                    </div>
                </h2>
            </div>
        </div>
    );
}

export default Intro;
