import React from "react";
import '../Styling/Components.css'
import ProfilePic from "../Styling/ProfilePic.jpeg";

export default function Home(){
    return(
        <div className="all-bg home-flex-container">
            <div className="home-content">
              <h1 className="greeting">Welcome!</h1>
              <h1 className="name">My Name is Ellie Barrera-Diaz</h1>
              <div className="home-info-div">
              
              </div>
            </div>
            <div>
                <img className="profilepic" src={ProfilePic} alt="Profile"/>
            </div>
        </div>
    )
}