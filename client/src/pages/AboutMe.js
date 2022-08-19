import "./AboutMe.css";
import anime from 'animejs/lib/anime.es.js';
import React, { useState, useEffect } from 'react';
function AboutMe({}) {
    
        useEffect(() => {
           
          var textWrapper = document.querySelector('.ml6 .letters');
       
          textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
          
          anime.timeline({})
            .add({
              targets: '.ml6 .letter',
              translateY: ["1.9em", 0],
              translateZ: 0,
              duration: 1550,
              delay: (el, i) => 70 * i
            });
        });
    return (
      
        <div className="page about-container">
       <div className="ball"></div>
            <div className="page-bubble bubble">

                 <div className="ml6">
                
                    <div className = "description-list">
                     <div className="description letters">I'm a Web Developer,</div>
                        <div className="description ">
                            <span >&& I went to Colorado State University.<br></br> (B.S in Computer Science.)</span>
                        </div>
                       
                        <div className="description text2">
                            <span > && I seek new experiences in fast paced environments.</span>
                        </div>
                        <div className="description text3">
                            <span > && I like Javascript and working with React. </span>
                        </div>
                        
                    </div>
                </div>

                <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>


            </div>
            <div class="arrow">
            <a>swipe/scroll</a>
                <span></span>
                <span></span>
                <span></span>

            </div>
        </div>


    )
}

export default AboutMe;
