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
            <Navbar fixed="top">
        <Container >
          <Navbar.Brand className="navbar-brand" href="/">< img src={logo} alt="Logo" className='logo'/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            {/* <Nav.Link href="/education">Education</Nav.Link> */}
            <Nav.Link href="/experience">Experience</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link target="_blank" rel="noopener noreferrer" href={PDF}>Resume</Nav.Link>
            <div className='icons'>
              <Navbar.Brand className="navbar-brand" href="https://www.linkedin.com/in/elliediaz/">< img src={linkedInLogo} alt="LinkedIn Page" className='linkedinicon'/></Navbar.Brand>
              <Navbar.Brand className="navbar-brand" href="https://github.com/Elliediazz">< img src={githubLogo} alt="Github Page" className='icon'/></Navbar.Brand>
              <Navbar.Brand className="navbar-brand" href="https://twitter.com/diazzellie">< img src={twitterLogo} alt="Twitter Page" className='icon'/></Navbar.Brand>
            </div>
          </Nav>
        </Container>
      </Navbar>
        </div>
    )
}