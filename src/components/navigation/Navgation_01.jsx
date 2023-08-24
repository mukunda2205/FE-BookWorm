import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";

function Navgation_01() {

  return (
    <Navbar collapseOnSelect expand="lg" bg="light">
      <Container fluid>
        {" "}
        {/* Use fluid container for full width */}
        <Navbar.Brand href="home" className="me-auto">
          BookWorm
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Products" id="collasible-nav-dropdown">
              <NavDropdown.Item className='nav-item' href="listebook">eBook</NavDropdown.Item>
              <NavDropdown.Item href="/listaudiobook">Music</NavDropdown.Item>
              <NavDropdown.Item href="/listvideobook">Video</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Lending Library</Nav.Link>
            <Nav.Link href="category">MyShelf</Nav.Link>
            <Nav.Link href="#pricing">MyLibrary</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#pricing">About Us</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href = "/signin" className="btn btn-outline-success me-2">Sign In</Nav.Link>
              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navgation_01;
