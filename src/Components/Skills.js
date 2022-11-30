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
            <div className="skills-info-container">
                <div className="horizontal-scroll">
                    <button className="btn-scroll" id="btn-scroll-left" ><ion-icon name="chevron-back-outline"></ion-icon></button>
                    <button className="btn-scroll" id="btn-scroll-right"><ion-icon name="chevron-forward-outline"></ion-icon></button>
                    <div className="skills-container">
                        <div className="skills"><img src={ReactIcon} alt="React Icon"/></div>
                        <div className="skills"><img src={NodeIcon} alt="Node Icon"/></div>
                        <div className="skills"><img src={PythonIcon} alt="Python Icon"/></div>
                        <div className="skills"><img src={CssIcon} alt="Css Icon"/></div>
                        <div className="skills"><img src={HtmlIcon} alt="Html Icon"/></div>
                        <div className="skills"><img src={JSIcon} alt="JS Icon"/></div>
                        <div className="skills"><img src={MongoIcon} alt="Mongo Icon"/></div>
                        <div className="skills"><img src={PostgresIcon} alt="Postgres Icon"/></div>
                        <div className="skills"><img src={ExpressIcon} alt="Express Icon"/></div>
                        <div className="skills"><img src={SQLIcon} alt="SQL Icon"/></div>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

