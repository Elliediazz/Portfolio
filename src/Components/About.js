import React from "react";
import '../Styling/Components.css';
import ProfilePic from "../Styling/ProfilePic.jpeg";

export default function About (){
    return(
        <div className="all-bg about-flex-container">
                <div>
                    <img className="profilepicabout" src={ProfilePic} alt="ProfilePicture"/>
                </div>
                <div className="about-info">
                    <h1>About Me </h1>
                    <h4>Full Stack Software Developer </h4>
                    <p> Hello, My name is Eleanny Barrera-Diaz, or Ellie for short! I am an experienced project engineer with the comprehensive analytical skills and knowledge of innovative design and application development. 
                    Through-out my post college years, I have gained experience across multiple development stacks and am currently looking for a position that incorporates critical thinking, problem-solving, and leadership while enhancing my expertise in software development.</p>
                    <div className="about-me-container">
                        <div className="about-me">
                            <div className="details">
                                <h5>Name: Ellie Barrera</h5>
                            </div>
                            <div className="details">
                                <h5>Location: Charleston, SC</h5>
                            </div>
                        </div>
                        <div className="about-me">
                            <div className="details">
                                <h5>Email: Elliediaz1204@gmail.com</h5>
                            </div>
                            <div className="details">
                                <h5>Birthday: December 4th 1996</h5>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

