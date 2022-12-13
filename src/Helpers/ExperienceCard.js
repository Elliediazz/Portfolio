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
                    <h4>Skills I gained during my expereince in this roll:</h4>
                        <ul className="expereince-skills">
                            <li>{item.skills1}</li>
                            <li>{item.skills2}</li>
                            <li>{item.skills3}</li>
                            <li>{item.skills4}</li>
                            <li>{item.skills5}</li>
                            <li>{item.skills6}</li>
                        </ul>
                </div>
            ))}
        </div>
    )
}

export default Card