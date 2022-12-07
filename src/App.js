import './App.css';
import {applyRouterMiddleware, BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import SubmitForm from './pages/SubmitForm'
import Project from './pages/Project'
import AboutMe from './pages/AboutMe'
import Home from './pages/Home'
import snake from "./pages/images/snake.gif"
import pathfinder from "./pages/images/pathgif.gif"
import spotify from "./pages/images/spotify.gif"
import React, {useLayoutEffect, useRef, useState, useEffect } from 'react';

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
    
  
      
        <div className="App" >
       
         {useDeviceDetect()?<Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />: <nav className="navbar">
          <ul>
            <li><a href="#home">.home</a></li>
            <li><a href="#about">.about</a></li>
            <li><a href="#projects">.projects</a></li>
            <li><a href="#contact">.contact</a></li>

          </ul>
        </nav>}
       
          <div id="page-wrap" >
       
          <div className="ball"></div>
          
           <section id="home">
              <Home />

               </section>
          
          
             
      
          
         
          <section id="about" >
             <AboutMe />
           
              </section>
          
          
        
         
       
         <section id="projects">
            <Project img = {snake} title = "Snake Game" description = "A version of the original classic. Built using javaScript and Node"/>
           
            </section>
            <section id="projects">
            <Project img = {pathfinder}title = "Pathfinder Visualizer" description = "A tool to help visualize common pathfinding algorithms like A-star. Built using react"/>
           
            </section>
            <section id="projects">
            <Project img = {spotify} title = "Spotify Tool" description ="A Spotify clone that features a useful tool. Create a large playlist in one swoop. This was built using React and Spotify's own API."/>
           
            </section>
         
      
      
          <section id="contact">
            <SubmitForm />  
          </section>
        
        
 

          </div>
         
        </div>
    
    
    
  );
  
}


export default App;
