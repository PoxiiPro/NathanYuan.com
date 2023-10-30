// import logo from './logo.svg';
import './App.css';

// import navbar component for use on index page
import React from 'react';
import Navbar from './navbar';
import Intro from './intro';
import Tile from './tile';
import { dataP } from './project-data.js';
import FullTile from './full-tile';
import { dataS } from './skill-data.js';
import { dataW } from './work-data.js';

// import ucsc photo of me
import ucsc from './src images/ucsc.png'

// import router in order to display certain components on certain pages only
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { HashRouter as Router, Route, Routes } from 'react-router-dom';

// import project data to display in tile component

dataP.forEach(item => console.log(item));
dataS.forEach(item => console.log(item));
dataW.forEach(item => console.log(item));

function App() {
  return (
    <div className="App">
      {/* nav bar is global, on all webpages */}
      <Navbar/>
      <Intro/>
      {/* <h1>Projects</h1> */}
      <div className="tile-container" id="projects">
        {/* <Tile name={"Test"} skills={"python"} desc={"testing this tile out"}/>
        <Tile name={"Test"} skills={"python"} desc={"testing this tile out"}/>
        <Tile name={"Test"} skills={"python"} desc={"testing this tile out"}/> */}

        {dataP.map((item, index) => (
        <Tile key={index} name={item.name} title={item.title} skills={item.skills} desc={item.desc} />
        ))}
      </div>

      <div id="certs">
        <FullTile title={"Apple Certified iOS Technician (ACiT)"} />
      </div>
      <div className="mini-tile-container" id="skills">
        {dataS.map((item, index) => (
        <Tile key={index} skill={item.skill} img={item.img} />
        ))}
      </div>
      <div className="tile-container" id="work">
        {dataW.map((item, index) => (
        <Tile key={index} name={item.name} title={item.title} skills={item.skills} img={item.img}/>
        ))}
      </div>
      <div id="edu">
        <FullTile name={"University of California, Santa Cruz"} title={"Bachelor's Degree in Computer Science"} skills={"June 2023"} img={ucsc}/>
      </div>

      {/* these components are page specific */}
      {/* <Router>
        <Routes> 
          <Route path="/" element={<Intro/>} />
        </Routes> 
      </Router> */}

    </div>
  );
}

export default App;
