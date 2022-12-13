import React from "react";
import '../Styling/Components.css'
import Carousel from "../Helpers/Carousel";


export default function Skills(){
    return(
        <div className="all-bg skills-flex-container">
           <div className="skills-detail">
                <h1>What I Am Great At</h1>
                <p>I am looking for a challenge. The biggest reason why I am seeking to emerge in the Tech Industry is the constant change and growth that occures within the field. I am a person that seeks knowledge and a chance to learn something new wherever I go, and that is precisely what I hope to find in my next role. I am seeking to pursue an opportunity with a growing organization that will utilize and enhance my knowledge in software development.</p> 
           </div>
           <div className="skills-header">
                <h2>Below are some of the skills I have aquired during my time in the industry:</h2>
           </div>
            <div>
                <Carousel />
            </div>
        </div>
    )
}

