// import logo from './logo.svg';
import './App.css';

// import navbar component for use on index page
import React from 'react';
import Navbar from './navbar';
import Intro from './intro';
import Tile from './tile';

// import router in order to display certain components on certain pages only
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* nav bar is global, on all webpages */}
      <Navbar/>
      <Intro/>
      <div className="tile-container">
        <Tile name={"Test"} skills={"python"} desc={"testing this tile out"}/>
        <Tile name={"Test"} skills={"python"} desc={"testing this tile out"}/>
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
