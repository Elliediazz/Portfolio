import React from 'react';
import '../Styling/Components.css'
import PDF from "../Styling/Resume.pdf"
import logo from "../Styling/logo.jpeg"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
    return(
      <header>
       <Navbar bg="light" variant="light" fixed="top">
        <Container >
          <Navbar.Brand className="navbar-brand" href="/">< img src={logo} alt="Logo" className='logo'/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#about-page">About</Nav.Link>
            <Nav.Link href="#experience-page">Experience</Nav.Link>
            <Nav.Link href="#projects-page">Projects</Nav.Link>
            <Nav.Link href="#contact-page">Contact</Nav.Link>
            <Nav.Link target="_blank" rel="noopener noreferrer" href={PDF}>Resume</Nav.Link>
          </Nav>
        </Container>
       </Navbar>
      </header>
    )
}