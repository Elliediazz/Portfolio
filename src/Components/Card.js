import React from "react";
import '../Styling/Components.css';

const Card = ({CardData, cardIndex}) => {
    return(
        <div className="experience-card">
            {CardData[cardIndex].map(item => (
                <div>
                    <h1>{item.title}</h1>
                    <h4>{item.date}</h4>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Card