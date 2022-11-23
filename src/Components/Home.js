import React from "react";
import '../Styling/Components.css'
import ProfilePic from "../Styling/ProfilePic.jpeg";
import PDF from "../Styling/Resume.pdf"
import About from "../Styling/About.png"

export default function Home(){
    return(
        <div className="all-bg home-flex-container">
            <div className="home-content">
              <h1 className="greeting">Welcome!</h1>
              <h1 className="name">My Name is Ellie Barrera-Diaz</h1>
              <div className="home-info-div">
                <div className="iconstabs">
                    <a href="/about"><ion-icon name="person-circle-outline"></ion-icon></a>
                    <h5>ABOUT</h5>
                </div>
                <div className="iconstabs">
                    <a href="/skills"><ion-icon name="terminal-outline"></ion-icon></a>
                    <h5>SKILLS</h5>
                </div>
                <div className="iconstabs">
                    <a href="/education"><ion-icon name="school-outline"></ion-icon></a>
                    <h5>EDUCATION</h5>
                </div>
                <div className="iconstabs">
                    <a href="/experience"><ion-icon name="briefcase-outline"></ion-icon></a>
                    <h5>EXPERIENCE</h5>
                </div>
                <div className="iconstabs">
                    <a href="/contact"><ion-icon name="call-outline"></ion-icon></a>
                    <h5>CONTACT</h5>
                </div>
                <div className="iconstabs">
                    <a target="_blank" rel="noopener noreferrer" href={PDF}><ion-icon name="newspaper-outline"></ion-icon></a>
                    <h5>RESUME</h5>
                </div>
              </div>
              <div className='homeicons'>
                    <a className='icon' href="https://www.linkedin.com/in/elliediaz/" target="_blank" rel="noreferrer" class="nav-item nav-link"><ion-icon size="large" name="logo-linkedin"></ion-icon></a>
			        <a className='icon' href="https://github.com/Elliediazz" target="_blank" rel="noreferrer" class="nav-item nav-link"><ion-icon size="large" name="logo-github"></ion-icon></a>
			        <a className='icon' href="https://twitter.com/diazzellie" target="_blank" rel="noreferrer" class="nav-item nav-link"><ion-icon size="large" name="logo-twitter"></ion-icon></a>		
                </div>
            </div>
            <div>
                <img className="profilepic" src={ProfilePic} alt="Profile"/>
            </div>
        </div>
    )
}