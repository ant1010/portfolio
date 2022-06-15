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
            <div className="page-bubble bubble">

                <h1 class="ml6">
                    <span class="text-wrapper">
                        <span class="letters">Anthony Arreola</span>
                    </span>
                    <div className = "description-list">
                        <div className="description">
                            <span >Hello, Im a web developer.</span>
                        </div>
                       
                        <div className="description text2">
                            <span ></span>
                        </div>
                        <div className="description text3">
                            <span >Hello, Im a web developer</span>
                        </div>
                        
                    </div>
                </h1>

                <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>


            </div>

        </div>


    )
}

export default AboutMe;
