import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";



const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      style={{ boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.2)", color: "black" }}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{
            color: "black",
            border: "2px solid orange",
            backgroundColor: "orange",
            borderRadius: "10px",
          }}
        >
          Realme Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>

            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/phones">Phones</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/accessories">Accessories</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about">About</Nav.Link>

            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#cart">Cart</Nav.Link>
            <Nav.Link href="#account">Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
     
    </Navbar>
  );
};

export default NavBar;
