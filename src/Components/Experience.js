import React from "react";
import '../Styling/Components.css';

export default function Experience() {
    return(
        <div className="experience-flex-container">
          <div className="summary">
            <h2>
                Although my Professional expereince has been centered around 
                Mechanical Engineering as a Project Engineer, I have recently 
                enrolled in an intensive software development program
                where I'm using the latest technology to develop 
                high-performing and engaging full-stack web applications.
            </h2>
          </div> 

          <div className="jobs shadow">
            <h2>
                Jen-Ter Technologies | Project Engineer
            </h2>
            <h4 className="text-shadow">
                June 2020 - August 2022
            </h4>
            <ul>
                <li>
                    Mentored and trained 5-7 individuals every month in both the 
                    production and engineering areas, including managing performance 
                    to meet budgets and milestones
                </li>
                <li>
                    Warranted compliance with contract and project requirements by 
                    coordinating and expediting the flow of technical documents and 
                    activities
                </li>
                <li>
                    Designed current products and conceptualized new products based
                    on CAD models and drawings
                </li>
                <li>
                    Maintained the highest standards of quality throughout the 
                    project's life cycle is of paramount importance which includes 
                    providing engineering recommendations and guidance to both 
                    project management members and craftspeople
                </li>
                <li>
                    Consistently meeting product design requirements within 
                    scheduled completion deadlines in a team environment and 
                    independently
                </li>
                <li>
                    Identified, analyzed, and resolved issues with the software, 
                    outputs, online screens, and content
                </li>
            </ul>
          </div>

          <div className="jobs shadow">
            <h2>
                Jen-Ter Technologies | Electrical Engineering Specialist - Intern
            </h2>
            <h4 className="text-shadow">
                Oct 2019 - June 2020
            </h4>
            <ul>
                <li>
                    Produced embedded systems Y2K compliance through the 
                    upgrade of hardware and software
                </li>
                <li>
                    Created a new product (printed heaters) and tested it to 
                    ensure its sustainability and quality, including advancing 
                    silicone heaters that will help construct the first product 
                    the organization manufactured
                </li>
                <li>
                    Acquired proficiency in troubleshooting problems with each 
                    type of device and in using a soldering iron for board-level
                    repairs
                </li>
                <li>
                    Prepared CAD drawings for the installation or removal of 
                    electrical equipment in facilities resulting in analyzing
                    the equipment performance statistically, and improving 
                    production processes
                </li>
                <li>
                    Assessed materials through various experiments and 
                    analyzed results to determine the most cost-effective 
                    components
                </li>
            </ul>
          </div>

        </div>
    )
}