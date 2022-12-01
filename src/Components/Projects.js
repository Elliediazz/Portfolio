import React from "react";
import '../Styling/Components.css';

export default function Projects() {
    return(
      <div className="all-bg project-flex-container">
        <div className="header-div">
          <h1 className="header">Projects</h1>
        </div>
        <div className="project-container">
          <div className="project">
            <h2 className="project-title">Where to Eat?</h2>
            <a target="_blank" rel="noopener noreferrer" href= "https://github.com/Elliediazz/JediBook-Client" >Github Link</a>
            <h3 className="project-discription">
              Collaborated with a team to develop an application that allows users to search for restaurants in their area and randomizes the results to choose one when prompted. This application displays real-time data using the google API but only after the user grants permission.
            </h3>
            <h4 className="built">
              Technologies Used: HTML, CSS, Javascript, React.js, Express, Node.js, MongoDB, Google API
            </h4>
          </div>

          <div className="project">
            <h2 className="project-title">JEDIBook</h2>
            <a target="_blank" rel="noopener noreferrer" href= "https://github.com/Elliediazz/JediBook-Client" >Github Link</a>
            <h3 className="project-discription">
              An app that allows users to search through the Planets, Characters, and Starships associated with the Star Wars saga. Users can also create their own Avatars and maintain their characters through their personal accounts. Built using the Star Wars API.
            </h3>
            <h4 className="built">
              Technologies Used: HTML, CSS, Javascript, React.js, Express, Node.js, Mongoose, Mongo DB, SWAPI
            </h4>
          </div>
          <div className="project">
            <h2 className="project-title">CDEV Quizzes</h2>
            <a className="links" target="_blank" rel="noopener noreferrer" href= "https://github.com/Elliediazz/CDEV-Quizzes-Client" >Github Link</a>
            <h3 className="project-discription">
              This application aimed to develop a Quizzing platform using the React Framework and Mongo Database. Our application allows users to create new quizzes upon request, list all quizzes on the platform, allow the user to insert new questions to any chosen quiz, and allow the user to update and delete quizzes - In Collaboration with three other developers.
            </h3>
            <h4 className="built">
              Technologies Used: Javascript, CSS, Bootstrap, React.js, Express.js, Node.js, Mongoose, MongoDB
            </h4>
          </div> 
        </div>     
      </div>
    )
}