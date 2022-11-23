import React from "react";
import '../Styling/Components.css'

export default function Skills(){
    return(
        <div className="all-bg skills-flex-container">
            <div className="header-div">
                <h1 className="header">Skills & Projects</h1>
            </div>
            <div className="skills-info-div">
                <div className="skills-div">
                    <div className="skills">Javascript</div>
                    <div className="skills">Python</div>
                    <div className="skills">React</div>
                    <div className="skills">SQL</div>
                    <div className="skills">PostgreSQL</div>
                    <div className="skills">MongoDB</div>
                    <div className="skills">Mongoose</div>
                    <div className="skills">CSS</div>
                    <div className="skills">HTML</div>
                    <div className="skills">Node.js</div>
                    <div className="skills">Express</div>
                    <div className="skills">Front-End</div>
                </div>
                <div className="project-cards">
                    <a href="/projects" className="project-card">CDEV Quizzes</a>
                    <a href="/projects" className="project-card">Where Do You Want To Eat?</a>
                    <a href="/projects" className="project-card">JediAPI</a>
                    <a href="/projects" className="project-card">Bootcamp Projects</a>
                </div>
           
            </div>
        </div>
    )
}

