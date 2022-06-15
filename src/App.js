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

function App() {
  
  return (
    
    <div className="App">
   
     <nav class="navbar">
      <ul>
          <li><a href="#about">.about</a></li>
          <li><a href="#projects">.projects</a></li>
          <li><a href="#contact">.contact</a></li>
        
        </ul>
      </nav>
  <section id="about">
    <AboutMe/>
  </section>
  <section id="projects">
      <Project/>
  </section>
  <section id="contact">
      <SubmitForm/>
  </section>
  
      {/* <header className="nav">
       
        <nav className="nav__container__actions">
          <ul>
            <li>
              <Link activeClass="active" smooth spy to="about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="projects">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="blog">
                BLOG
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="contact">
                CONTACT ME
              </Link>
            </li>
          </ul>
        </nav>
        
      </header>
       
      <section id="about"><AboutMe></AboutMe></section>
      <section id="projects"><Project/></section>
      <section id="blog"><SubmitForm/></section> */}
     
    </div>
    
    
  );
}


export default App;
