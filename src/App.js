import logo from './logo.svg';
import './App.css';

import {applyRouterMiddleware, BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import {  Link } from "react-scroll";
import SubmitForm from './pages/SubmitForm'
import Project from './pages/Project'
import AboutMe from './pages/AboutMe'
import styled, { createGlobalStyle } from "styled-components";

function App() {
  
  return (
   
    <div className="App">
   
     <nav class="navbar">
      <ul>
          <li><a href="#home">About</a></li>
          <li><a href="#about">Projects</a></li>
          <li><a href="#service">Contact</a></li>
        
        </ul>
      </nav>
  <section id="home">
    <AboutMe/>
  </section>
  <section id="about">
      <Project/>
  </section>
  <section id="service">
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
