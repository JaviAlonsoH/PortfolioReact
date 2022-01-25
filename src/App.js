import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/AboutMe/AboutMe';
import ProjectsSection from './components/Projects/ProjectsSection'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom'
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <AboutMe />
        <Zoom>
          <ProjectsSection />
        </Zoom>
        <Switch>
          <Route path='/' exact />
        </Switch>

      </Router>
    </>
  );

}

export default App;
