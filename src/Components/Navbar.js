import React from 'react';
import '../Styling/Components.css'
import PDF from "../Styling/Resume.pdf"
import logo from "../Styling/PersonalLogo.png"
import linkedInLogo from "../Styling/linkedInLogo.png"
import githubLogo from "../Styling/githubLogo.png"
import twitterLogo from "../Styling/twitterLogo.png"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
    return(
    <div>
      <Nav class="navbar navbar-expand-lg navbar-light">
	      <Navbar.Brand className="navbar-brand" href="/">< img src={logo} alt="Logo" className='logo'/></Navbar.Brand>  		
	      <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
		      <span class="navbar-toggler-icon"></span>
	      </button>
	      <div id="navbarCollapse" class="collapse navbar-collapse justify-content-start">
		      <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
			      <div class="nav-item dropdown">
				      <a href="/projects" class="nav-item nav-link dropdown-toggle" data-toggle="dropdown">Skills & Projects</a>
				      <div class="dropdown-menu">					
					      <a href="#" class="dropdown-item">Skills and Languages</a>
					      <a href="#" class="dropdown-item">Web Design</a>
					      <a href="#" class="dropdown-item">Web Development</a>
              </div>
            </div>
            <Nav.Link href="/education">Education</Nav.Link>			
            <Nav.Link href="/experience">Experience</Nav.Link>
			      {/* <a href="/" class="nav-item nav-link active">Blog</a> */}
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link target="_blank" rel="noopener noreferrer" href={PDF}>Resume</Nav.Link>
          </Nav>
		      <div class="navbar-nav ml-auto">
			      <div class="navbar-form-wrapper">
				      <form class="navbar-form form-inline">
					    <div class="input-group search-box">								
						    <input type="text" id="search" class="form-control" placeholder="Search Here..."/>
						    <div class="input-group-append">
							    <span class="input-group-text">
								    <i class="material-icons">&#xE8B6;</i>
							    </span>
						    </div>
					    </div>
              </form>
            </div>
			      <a href="#" class="nav-item nav-link"><i class="fa fa-facebook"></i></a>
			      <a href="#" class="nav-item nav-link"><i class="fa fa-twitter"></i></a>
			      <a href="#" class="nav-item nav-link"><i class="fa fa-google-plus"></i></a>
			      <a href="#" class="nav-item nav-link"><i class="fa fa-pinterest-p"></i></a>
          </div>		
	      </div>
      </Nav>
    </div>
  )
}