import React from 'react';
import '../Styling/Components.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

export default function NavBar() {
    return(
        <div className='Navbar1'>
            <Navbar bg="light" variant="light">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/experience">Professional Experience</Nav.Link>
            <Nav.Link href="/projects">My Projects</Nav.Link>
            <Nav.Link href="/contact">Contact Me</Nav.Link>
            <Nav.Link href="/E. Barrera-Diaz Resume.pdf">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    )
}