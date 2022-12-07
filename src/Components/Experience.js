import React from "react";
import '../Styling/Components.css';

export default function Experience() {
    return(
      <div className="all-bg experience-flex-container">
        <div className="experience">
            <button>University Of Wisonsin- Madison</button>
            <button>Jen-Ter Technologies</button>
            <button>Jen-Ter Technologies - Internship</button>
            <button>University Of Wisonsin- Oshkosh</button>
        </div> 
        <div className="experience-details">
            <div className="uwoshkosh">
                <h2>Bachelor of Science in Physics</h2>
                <h5>Sep 2015 - Jun 2020</h5>
                <p> During my time as an undergraduate at the university of     Wisconsin - Oshkosh Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio faucibus, pellentesque eros ut, vehicula magna. Vestibulum dignissim tempor nibh eget rhoncus. Sed tincidunt nulla a turpis luctus porttitor eget at lorem. Suspendisse sit amet tellus ut diam pellentesque tristique. Phasellus efficitur sagittis ipsum, vitae maximus leo bibendum quis. Nam augue mi, sollicitudin aliquet lacinia vitae, suscipit commodo tortor. Sed lorem nisl, porta sed nulla sit amet, aliquet molestie tortor. Curabitur sollicitudin sagittis convallis. Quisque id leo vehicula, fringilla justo in, tincidunt justo.
                </p>
            </div>
        </div>
      </div>
    )
}