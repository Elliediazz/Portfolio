import React from "react";
import '../Styling/Components.css';
import ProfilePic from "../Styling/ProfilePic.jpeg";

export default function About (){
    return(
        <div className="all-bg about-flex-container">
                <div className="about-info">
                    <h1>About Me </h1>
                    <h4>Full Stack Software Developer </h4>
                    <p> Hello! My name is Eleanny Barrera-Diaz, or Ellie for short! 
                    
                    My interest in Software Development began back in my final year as an undergrad at the University of Wisconsin- Oshkosh. Although I majored in Physics, working through several Python orientented projects, I began to wonder what else I could achieve through programming and how I could get there.  
                    </p>
                    <p>
                    During my two years as a Project Engineer, I never lost my interest in Software Develpment and looked for ways to nuture that passion. I came across the Software Development Professional Certifcate program offered by the University of Wisconsin- Madison and now here I am! As a recent graduate of this program , I am looking for a position that incorporates critical thinking, problem-solving, and leadership while enhancing my expertise in Tech. 
                    </p>
                    <div>
                        <h4>I am currently working with the following technologies:</h4>
                        <ul className="about-skills">
                            <li>Javascript</li>
                            <li>Python</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                </div>
                <div className="profile-pic-about-container">
                    <img className="profile-pic-about" src={ProfilePic} alt="ProfilePicture"/>
                </div>
        </div>
    )
}

