import React from "react";
import '../Styling/Components.css'
import ProfilePic from "../Styling/ProfilePic.jpg";

export default function Home(){
    return(
        <div className="home-flex-container">
            <div className="home">
              <h4 className="greeting">Welcome, my name is </h4>
              <h1 className="name">Ellie Barrera</h1>
              <div className="home-content-div">
              <p className="home-content"> Im a Junior Software Developer seeking 
                  to pursue an opportunity with a growing organization that will 
                  utilize and enhance my knowledge in software development
              </p>
              <p className="home-content"> Im a Junior Software Developer seeking 
                  to pursue an opportunity with a growing organization that will 
                  utilize and enhance my knowledge in software development
              </p>
              <p className="home-content"> Im a Junior Software Developer seeking 
                  to pursue an opportunity with a growing organization that will 
                  utilize and enhance my knowledge in software development
              </p>
              </div>
            </div>
            <img className="profile" src={ProfilePic} alt="Profile"/>
        </div>
    )
}