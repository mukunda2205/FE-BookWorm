import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";

function Navgation_01() {
  

  function signOut() {
    localStorage.clear();
    window.location.reload(); 
  }
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="home" className="me-auto">
          BookWorm
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Products" id="collasible-nav-dropdown">
              <NavDropdown.Item className="" href="ebooklist">
                eBook
              </NavDropdown.Item>
              <NavDropdown.Item href="/audiolist">Music</NavDropdown.Item>
              <NavDropdown.Item href="/videolist">Video</NavDropdown.Item>
            </NavDropdown>
            {localStorage.getItem("Token") && (
              <>
                <Nav.Link href="#pricing">Lending Library</Nav.Link>
                <Nav.Link href="category">MyShelf</Nav.Link>
                <Nav.Link href="#pricing">MyLibrary</Nav.Link>
              </>
            )}
          </Nav>
          <Nav>
            <Nav.Link href="AboutUs">About Us</Nav.Link>
            <Nav.Link href="ContactUs">Contact Us</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            {!localStorage.getItem("Token") && (
              <Nav.Link href="/signin" className="btn btn-outline-success me-2">
                Sign In
              </Nav.Link>
            )}
            {localStorage.getItem("Token") && (
              <Nav.Link href="/" onClick={() => signOut()} className="btn btn-outline-success me-2">
                Sign Out
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navgation_01;
