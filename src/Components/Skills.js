import React from "react";
import '../Styling/Components.css'
import ReactIcon from "../Styling/icons/ReactIcon.png";
import NodeIcon from "../Styling/icons/NodeIcon.png";
import PythonIcon from "../Styling/icons/PythonIcon.png";
import CssIcon from "../Styling/icons/CssIcon.png";
import HtmlIcon from "../Styling/icons/HtmlIcon.png";
import JSIcon from "../Styling/icons/JSIcon.png";
import MongoIcon from "../Styling/icons/MongoIcon.png";
import PostgresIcon from "../Styling/icons/PostgresIcon.png";
import ExpressIcon from "../Styling/icons/ExpressIcon.png";
import SQLIcon from "../Styling/icons/SQLIcon.png";

export default function Skills(){
    return(
        <div className="all-bg skills-flex-container">
           <div className="skills-detail">
                <h1>What I Am Great At</h1>
                <p>I am looking for a challenge. The biggest reason why I am seeking to emerge in the Tech Industry is the constant change and growth that occures daily in the industry. I am a person that seeks knowledge and a chance to learn something new wherever I go and that is precisely what I hope to find in my next role. I am excited to learn new skills and become a better developer as I progress in my career.</p> 
                <p>As a Junior Software Developer, I am seeking to pursue an opportunity with a growing organization that will utilize and enhance my knowledge in software development. Below are some of the skills I have aquired in my time in the industry. I hope to add more soon!</p>
           </div>
            <div className="skills-info-container">
                <div className="horizontal-scroll">
                    <button className="btn-scroll" id="btn-scroll-left" ><ion-icon name="chevron-back-outline"></ion-icon></button>
                    <button className="btn-scroll" id="btn-scroll-right"><ion-icon name="chevron-forward-outline"></ion-icon></button>
                    <div className="skills-container">
                        <div>
                            <div className="skills"><img src={ReactIcon} alt="React Icon"/></div>
                            <h1>React</h1>
                        </div>
                        <div>
                            <div className="skills"><img src={NodeIcon} alt="Node Icon"/></div>
                            <h1>Node</h1>
                        </div>
                        <div>
                            <div className="skills"><img src={PythonIcon} alt="Python Icon"/></div>
                            <h1>Python</h1>
                        </div>
                        <div>
                            <div className="skills"><img src={CssIcon} alt="Css Icon"/></div>
                            <h1>CSS</h1>
                        </div>
                        <div>
                            <div className="skills"><img src={HtmlIcon} alt="Html Icon"/></div>
                            <h1>HTML</h1>
                        </div>
                        <div>
                            <div className="skills"><img src={JSIcon} alt="JS Icon"/></div>
                            <h1>Javascript</h1>
                        </div>
                        <div>
                            <div className="skills"><img src={MongoIcon} alt="Mongo Icon"/></div>
                            <h1>MondoDB</h1>
                        </div>
                        <div>
                            <div className="skills"><img src={PostgresIcon} alt="Postgres Icon"/></div>
                            <h1>PostgreSQL</h1>
                        </div>
                        <div>
                            <div className="skills"><img src={ExpressIcon} alt="Express Icon"/></div>
                            <h1>Express</h1>
                        </div>
                        <div>
                            <div className="skills"><img src={SQLIcon} alt="SQL Icon"/></div>
                            <h1>SQL</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

