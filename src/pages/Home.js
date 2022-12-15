import React from 'react'
import "./Home.css";
import logo from './images/folio-portrait.GIF'
import gitlogo from './images/gitlogo.svg'

function Home({}) {
    return (
        <div className="page home-container">
        <div className = "page-bubble bubble4">
           <div className = "inner-container">
           <img src={logo} className = "portrait"/>
             <div className = "hello"><p>Hello,<br/> Im Anthony.</p></div>

            </div>
            
           </div>
          
           <div class="arrow">
               
                <span></span>
                <span></span>
                <span></span>
                 <a>swipe/scroll</a>

            </div>
            <div className = "git-logo">
            <a href = {"https://github.com/ant1010"} target="_blank"> <img className = "git-img" src={gitlogo} /></a>
                
                <a>GitHub</a>
                
            </div>
            
        </div>
            
      
    )
}

export default Home;
