import React from "react";

import '../Styling/Components.css'
import ProfilePic from "../Styling/ProfilePic.jpg";
import PDF from "../Styling/Resume.pdf"

export default function Home(){
    return(
      <div className="all">
        <div className="home-flex-container shadow">
            <div className="home">
              <h4 className="greeting">Welcome, my name is </h4>
              <h1 className="name">Ellie Barrera</h1>
              <div className="home-content-div">
              <p className="home-content"> Im a Junior Software Developer seeking 
                  to pursue an opportunity with a growing organization that will 
                  utilize and enhance my knowledge in software development
              </p>
              <p className="home-content"> Some Languages, Databases and Frameworks 
                  I have worked with include: Javascript, Python, React.js, Express, Node.js, SQL, PostgreSQL,
                  Mongoose, and MongoDB
              </p>
              <p className="home-content"> Keep reading to checkout some of the projects I have worked on!
              </p>
              </div>
            </div>
            <img className="profile shadow" src={ProfilePic} alt="Profile"/>
        </div>
    <br></br>
    <br></br>
        <div className="about-flex-container shadow" id="about-page">
            <div className="about-main-div">
                <h1>Heres a little about me!</h1>
                <p className="about"> I graduated with a Bachelor of Science in 
                  Physics from the University of Wisconsin - Oshkosh and decided to 
                  further pursue my interest in Software Developement by attending an  
                  intensive Certificate Program from the University of Wisconsin - Madison.
                </p>
                <p className="about">
                  I am looking for a challenge. The biggest reason why I am looking to 
                  emerge into the Tech industry is the constant, ever changing dynamic of 
                  the field. I am a person that seeks a thrill and a challenge where ever I go 
                  and that is precisely what I hope to find in my next role. I am excited to 
                  learn and to be better as I navigate through my journey in the Tech industry.
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
    <br></br>
    <br></br>
        <div className="experience-flex-container" id="experience-page">
          <div className="summary">
            <h2>
                Although my Professional expereince has been centered around 
                Mechanical Engineering as a Project Engineer, I have recently 
                enrolled in an intensive software development program
                where I'm using the latest technology to develop 
                high-performing and engaging full-stack web applications.
            </h2>
          </div> 

          <div className="jobs shadow">
            <h2>
                Jen-Ter Technologies | Project Engineer
            </h2>
            <h4 className="text-shadow">
                June 2020 - August 2022
            </h4>
            <ul>
                <li>
                    Mentored and trained 5-7 individuals every month in both the 
                    production and engineering areas, including managing performance 
                    to meet budgets and milestones
                </li>
                <li>
                    Warranted compliance with contract and project requirements by 
                    coordinating and expediting the flow of technical documents and 
                    activities
                </li>
                <li>
                    Designed current products and conceptualized new products based
                    on CAD models and drawings
                </li>
                <li>
                    Maintained the highest standards of quality throughout the 
                    project's life cycle is of paramount importance which includes 
                    providing engineering recommendations and guidance to both 
                    project management members and craftspeople
                </li>
                <li>
                    Consistently meeting product design requirements within 
                    scheduled completion deadlines in a team environment and 
                    independently
                </li>
                <li>
                    Identified, analyzed, and resolved issues with the software, 
                    outputs, online screens, and content
                </li>
            </ul>
          </div>

          <div className="jobs shadow">
            <h2>
                Jen-Ter Technologies | Electrical Engineering Specialist - Intern
            </h2>
            <h4 className="text-shadow">
                Oct 2019 - June 2020
            </h4>
            <ul>
                <li>
                    Produced embedded systems Y2K compliance through the 
                    upgrade of hardware and software
                </li>
                <li>
                    Created a new product (printed heaters) and tested it to 
                    ensure its sustainability and quality, including advancing 
                    silicone heaters that will help construct the first product 
                    the organization manufactured
                </li>
                <li>
                    Acquired proficiency in troubleshooting problems with each 
                    type of device and in using a soldering iron for board-level
                    repairs
                </li>
                <li>
                    Prepared CAD drawings for the installation or removal of 
                    electrical equipment in facilities resulting in analyzing
                    the equipment performance statistically, and improving 
                    production processes
                </li>
                <li>
                    Assessed materials through various experiments and 
                    analyzed results to determine the most cost-effective 
                    components
                </li>
            </ul>
          </div>

        </div>
    <br></br>
    <br></br>
        <div className="project-flex-container shadow" id="projects-page">
            <h1 className="title">Projects made by Me</h1>
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
            <div className="project">
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
    <br></br>
    <br></br>
        <div className="contact-flex-container shadow" id="contact-page">
            <h2 className="contact">Feel free to contact me if you have any questions 
                or opportunities that may fit my skill set, Thank you!
            </h2>
            <br></br>
            <br></br>
            <h3>
             <a className="email" href="mailto:elliediaz1204@gmail.com">Send me an Email</a>
            </h3>
        </div>
      </div>
      
        
    )
}