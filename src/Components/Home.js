import React from "react";
import '../Styling/Components.css'
import ProfilePic from "../Styling/ProfilePic.jpeg";

export default function Home(){
    return(
        <div className="all-bg">
          <div className="home-flex-container">
            <div className="home">
              <h4 className="greeting">Welcome, my name is </h4>
              <h1 className="name">Ellie Barrera</h1>
              <div className="home-content-div">
              <p className="home-content"> Im a Junior Software Developer seeking 
                  to pursue an opportunity with a growing organization that will 
                  utilize and enhance my knowledge in software development
              </p>
              <p className="home-content"> Some Languages, Databases and Frameworks 
                  I have worked with include: Javascript, Python, React.js, Express, Node.js, 
                  SQL, PostgreSQL, Mongoose, and MongoDB
              </p>
              <p className="home-content"> Keep reading to checkout some of the projects 
                I have worked on!
              </p>
              </div>
            </div>
            <img className="profile" src={ProfilePic} alt="Profile"/>
          </div>
        </div>
    )
}