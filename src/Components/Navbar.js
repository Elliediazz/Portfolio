import React from 'react';
import '../Styling/Components.css'
import PDF from "../Styling/Resume.pdf"
import logo from "../Styling/PersonalLogo.png"

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
    return(
    <div>
      <Nav class="navbar navbar-expand-lg navbar-dark">
	      <Navbar.Brand className="navbar-brand" href="/">< img src={logo} alt="Logo" className='logo'/></Navbar.Brand>  		
	      <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
		      <span class="navbar-toggler-icon"></span>
	      </button>
	      <div id="navbarCollapse" class="collapse navbar-collapse justify-content-space-between">
		      <Nav className="me-auto navbar-dark">
            <Nav.Link class="btn text-light" href="/about">About</Nav.Link>
			      <div class="nav-item dropdown">
              <button class=" btn btn-transparent dropdown-toggle text-light"  type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Web Development
              </button>
				      <div class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuLink">					
					      <a href="/skills" class="dropdown-item">Skills and Languages</a>
					      <a href="/projects" class="dropdown-item">CDEV Quizzes</a>
                <a href="/projects" class="dropdown-item">Where Do You Want to Eat?</a>
                <a href="/projects" class="dropdown-item">JediAPI</a>
					      <a href="/projects" class="dropdown-item">Bootcamp Projects</a>
              </div>
            </div>
            <Nav.Link class="btn text-light" href="/experience">Experience</Nav.Link>
            {/* <Nav.Link class="btn text-light" href="/">Blog</Nav.Link> */}
            <Nav.Link class="btn text-light" href="/contact">Contact</Nav.Link>
            <Nav.Link class="btn text-light" target="_blank" rel="noopener noreferrer" href={PDF}>Resume</Nav.Link>
          </Nav>
          <div className='icons'>
			      <a className='icon' href="https://www.linkedin.com/in/elliediaz/" target="_blank" rel="noreferrer" class="nav-item nav-link"><ion-icon size="large" name="logo-linkedin"></ion-icon></a>
			      <a className='icon' href="https://github.com/Elliediazz" target="_blank" rel="noreferrer" class="nav-item nav-link"><ion-icon size="large" name="logo-github"></ion-icon></a>
			      <a className='icon' href="https://twitter.com/diazzellie" target="_blank" rel="noreferrer" class="nav-item nav-link"><ion-icon size="large" name="logo-twitter"></ion-icon></a>		
          </div>
	      </div>
      </Nav>
    </div>
  )
}