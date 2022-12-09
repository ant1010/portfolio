import React from 'react'
import "./Project.css";


function Project({img,title,description,link}) {
    return (
        <div className="page project-container">
            <div className="page-bubble bubble2">
             <div className ="header">Project</div>
                <div >
               
                     <img className ="gif" src={img} />

                    <div className="description-list project">
                        
                       
                        <div className = "project title">{title}</div>
                        <div className = "project description">{description}</div>
                        <a href = {link} target="_blank"><button className = "link">visit project</button></a>


                    </div>
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
