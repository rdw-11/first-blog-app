import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header(props) {
  return (
    <div className="me-autoh">
      <Navbar className="navbar">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/socialmedia">Links</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
