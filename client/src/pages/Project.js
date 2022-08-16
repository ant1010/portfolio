import React from 'react'
import "./Project.css";


function Project({}) {
    return (
        <div className="page project-container">
            <div className="page-bubble bubble2">
                <div className="inner-container">
                    <div className="slide one">Project one</div>
                    <div className="slide two">Project two</div>
                    
                </div>
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

export default Project;
