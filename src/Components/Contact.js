import React from "react";
import '../Styling/Components.css'
import PDF from "../Styling/Resume.pdf"

export default function Contact(){
    return(
        <div className="all-bg">
          <div className="contact-flex-container">
            <h2 className="contact">Feel free to contact me if you have any questions 
                or opportunities that may fit my skill set, Thank you!
            </h2>
            <br></br>
            <br></br>
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
            <br></br>
            <br></br>
            <h3>
            <a className="email" href="mailto:elliediaz1204@gmail.com">Send me an Email</a>
            </h3>
          </div>
        </div>
    )
}