import React from "react";
import '../Styling/Components.css'

export default function Education(){
    return(
        <div className="all-bg education-flex-container">
            <div className="header-div">
                <h1 className="header">Education</h1>
            </div>
            <div className="education-info-div">
                <div className="education-cards">
                    <div className="schools">
                            <h1 className="school-greeting">University Of Wisconsins</h1>
                            <h1 className="school-title">Madison</h1>
                        <div className="education-card">
                            <a href="/" className="text-decor">Certificate in Software Developement</a>
                        </div>
                    </div>
                    <div className="schools">
                        <h1 className="school-greeting">University Of Wisconsins</h1>
                        <h1 className="school-title">Oshkosh</h1>
                        <div className="education-card">
                            <a href="/" className="text-decor">Bachelor of Science in Physics</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}