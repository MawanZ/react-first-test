import React from 'react'
import { Row, Col, Container, Navbar, Nav } from 'react-bootstrap';

import Menu from './Menu';
import ImageCegep from './ImageCegep';
import logocegep from '../assets/cegep logo.png';

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <img
          src={logocegep}
          width="10%"
          height="10%"
          className="d-inline-block align-top"
          alt="Logo"/>

          <Nav className="m1-auto">
            <Nav.Link href="#">Acceuil</Nav.Link>
            <Nav.Link href="#">Mission</Nav.Link>
            <Nav.Link href="#">Objectifs</Nav.Link>
            <Nav.Link href="#">À Propos</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  )
}
