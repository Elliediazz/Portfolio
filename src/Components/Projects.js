import React from "react";
import '../Styling/Components.css';

export default function Projects() {
    return(
      <div className="all-bg project-flex-container">
        <div className="header">
          <h1>Personal Projects</h1>
        </div>
        <div className="project-container">
          <div className="project">
            <h2 className="project-title">Pops Pizzeria</h2>
            <a className='icon' href="https://github.com/Elliediazz/pops-pizzeria-client" target="_blank" rel="noreferrer" class="nav-item nav-link"><ion-icon size="large" name="logo-github"></ion-icon></a>
            <h3 className="project-discription">
              An application developed for a client icluding a simple and intuitive navigation menu, with clear sections for the menu, ordering online, catering services, and location information. (Still in Progress)
            </h3>
            <h4 className="built-with">
              Technologies Used: HTML, CSS, Javascript, React.js
            </h4>
          </div>
          <div className="project">
            <h2 className="project-title">Where to Eat?</h2>
            <a className='icon' href="https://github.com/Elliediazz/Final-Project" target="_blank" rel="noreferrer" class="nav-item nav-link"><ion-icon size="large" name="logo-github"></ion-icon></a>
            <h3 className="project-discription">
              Collaborated with a team to develop an application that allows users to search for restaurants in their area and randomizes the results to choose one when prompted. This application displays real-time data using the google API but only after the user grants permission.
            </h3>
            <h4 className="built-with">
              Technologies Used: HTML, CSS, Javascript, React.js, Express, Node.js, MongoDB, Google API
            </h4>
          </div>
          <div className="project">
            <h2 className="project-title">CDEV Quizzes</h2>
            <a className='icon' href="https://github.com/Elliediazz/CDEV-Quizzes-Client" target="_blank" rel="noreferrer" class="nav-item nav-link"><ion-icon size="large" name="logo-github"></ion-icon></a>
            <h3 className="project-discription">
              This application aimed to develop a Quizzing platform using the React Framework and Mongo Database. Our application allows users to create new quizzes upon request, list all quizzes on the platform, allow the user to insert new questions to any chosen quiz, and allow the user to update and delete quizzes - In Collaboration with three other developers.
            </h3>
            <h4 className="built-with">
              Technologies Used: Javascript, CSS, Bootstrap, React.js, Express.js, Node.js, Mongoose, MongoDB
            </h4>
          </div> 
        </div>     
      </div>
    )
}