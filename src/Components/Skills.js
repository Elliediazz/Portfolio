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
            <div className="header-div">
                <h1 className="header">Languages & Skills</h1>
            </div>
           <div className="skills-detail">
                <h1>What I Am Great At</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu nunc erat. Vestibulum lacinia ligula sit amet lorem euismod, quis feugiat metus ornare. Curabitur a justo eleifend, pellentesque augue eu, bibendum enim. Sed vitae neque vestibulum, efficitur justo sed, lacinia nunc. Nam fermentum cursus orci, quis hendrerit ligula ornare at. Suspendisse luctus volutpat nisi. Phasellus congue mi augue, vel tempor mauris porta id.</p>
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

