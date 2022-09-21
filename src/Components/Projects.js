import React from "react";
import '../Styling/Components.css';

export default function Projects() {
    return(
        <div className="project-flex-container">
            <h1 className="title">Projects I've Worked On...</h1>
            <div className="project shadow">
              <h2 className="project-title">JediBook</h2>
                <h4>
                  <a target="_blank" rel="noopener noreferrer" href= "https://github.com/Elliediazz/JediBook-Client" >
                    Github Link
                  </a>
                </h4>
              <h3 className="project-discription">
                An app that allows users to search through the Planets, 
                Characters, and Starships associated with the Star Wars saga.
                Users can also create their own Avatars and maintain their 
                characters through their personal accounts. Built using the 
                Star Wars API.
              </h3>
              <h4 className="built">
                Built using: HTML, CSS, Javascript, React.js, Express, 
                Node.js, Mongoose, Mongo DB, SWAPI
              </h4>
            </div>
            <div className="project shadow">
              <h2 className="project-title">CDEV Quizzes</h2>
                <h4>
                  <a className="links" target="_blank" rel="noopener noreferrer" href= "https://github.com/Elliediazz/CDEV-Quizzes-Client" >
                    Github Link
                  </a>
                </h4>
              <h3 className="project-discription">
                This application was aimed to develop a Quizzing platform 
                that allowed users to create and modify their own unique 
                quizzes - Group Project
              </h3>
              <h4 className="built">
                Built using: HTML, CSS, Javascript, React.js, Express, 
                Mongoose, Mongo DB
              </h4>
            </div>      
        </div>
    )
}