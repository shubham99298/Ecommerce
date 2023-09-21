import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
const NavBar = () => { 
  return (
    <div >
       <Navbar  expand="lg"  style={{boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.2)" ,color:'black'}} >
      <Container>
        <Navbar.Brand href="#home" style={{color:'black', border:"2px solid orange", backgroundColor:'orange', borderRadius:"10px"}}>Realme Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#phones">Phones</NavDropdown.Item>
              <NavDropdown.Item href="#accessories">Accessories</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#cart">Cart</Nav.Link>
            <Nav.Link href="#account">Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar
