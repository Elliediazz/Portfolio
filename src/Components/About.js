import React from "react";
import '../Styling/Components.css';
import PDF from "../Styling/Resume.pdf"

export default function About (){
    return(
        <div className="all-bg about-flex-container">
            <div className="header-div">
                <h1 className="header">ABOUT</h1>
            </div>
            <div className="about-info-div">
                <p className="about-info"> I graduated with a Bachelor of Science in 
                  Physics from the University of Wisconsin - Oshkosh and decided to 
                  further pursue my interest in Software Developement by attending an  
                  intensive Certificate Program from the University of Wisconsin - Madison.
                </p>
                <p className="about-info">
                  I am looking for a challenge. The biggest reason why I am looking to 
                  emerge into the Tech industry is the constant, ever changing dynamic of 
                  the field. I am a person that seeks a thrill and a challenge where ever I go 
                  and that is precisely what I hope to find in my next role. I am excited to 
                  learn and to be better my skills as I navigate through my journey in the 
                  Tech industry.
                </p>
                <h2>Connect with me on LinkedIn!</h2>
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

