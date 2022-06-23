import logo from './logo.svg';
import './App.css';
import anime from 'animejs/lib/anime.es.js';
import {applyRouterMiddleware, BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import {  Link } from "react-scroll";
import SubmitForm from './pages/SubmitForm'
import Project from './pages/Project'
import AboutMe from './pages/AboutMe'
import React, { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Sidebar from './Sidebar';

function App() {
  const useDeviceDetect = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowResize = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);
     
    return (width <= 768);
}
  return (
    
  
      
        <div className="App" id="outer-container">
      
         {useDeviceDetect()?<Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />: <nav class="navbar">
          <ul>
            <li><a href="#about">.about</a></li>
            <li><a href="#projects">.projects</a></li>
            <li><a href="#contact">.contact</a></li>

          </ul>
        </nav>}
          <div id="page-wrap">
          <section id="about">
           <AboutMe />
         </section>
         <section id="projects">
           <Project />
         </section>
         <section id="contact">
           <SubmitForm />
       </section>
          </div>
        </div>
    
    
    
  );
}


export default App;
