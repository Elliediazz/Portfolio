import React from "react";
import '../Styling/Components.css';
import PDF from "../Styling/Resume.pdf"

export default function About (){
    return(
        <div className="about-flex-container">
            <div className="about-main-div">
              <p className="about">
                I am an experienced project engineer with comprehensive 
                analytical skills and knowledge of innovative design 
                and application development. A versatile developer 
                with experience across multiple development stacks 
                looking for a position that incorporates critical thinking, 
                problem-solving, and leadership skills while enhancing my 
                expertise in software development, which will provide me 
                with essential growth opportunities.
              </p>
            </div>
            
            <div className="button-container">
                <a target="_blank" rel="noopener noreferrer" href= "https://www.linkedin.com/in/elliediaz/" >
                    <button type="button">
                        LinkedIn
                    </button>
                </a>
                <a target="_blank" rel="noopener noreferrer" href= "https://github.com/Elliediazz" >
                    <button type="button">
                        Github
                    </button>
                </a>
                <a target="_blank" rel="noopener noreferrer" href= { PDF } >
                    <button type="button">
                        Resume
                    </button>
                </a>
            </div>
        </div>
    )
}

