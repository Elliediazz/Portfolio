import React, { useState} from "react";
import '../Styling/Components.css';
import Card from './Card'
import CardData from './CardData'

export default function Experience() {
  const [active, setActive] = useState('CardOne')
    return(
      <div className="all-bg experience-flex-container">
        <div className="experience-title">
            <button onClick={()=> setActive("CardOne")}>University Of Wisonsin- Madison</button>
            <button onClick={()=> setActive("CardTwo")}>Jen-Ter Technologies</button>
            <button onClick={()=> setActive("CardThree")}>Jen-Ter Technologies - Internship</button>
            <button onClick={()=> setActive("CardFour")}>University Of Wisonsin- Oshkosh</button>
        </div> 
        <div className="experience-details">
            <div>
                {active === "CardOne" && <Card CardData={CardData} cardIndex="0" />}
                {active === "CardTwo" && <Card CardData={CardData} cardIndex="1" />}
                {active === "CardThree" && <Card CardData={CardData} cardIndex="2" />}
                {active === "CardFour" && <Card CardData={CardData} cardIndex="3" />}
            </div>
        </div>
      </div>
    )
}