import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header(props) {
  return (
    <header>
      <Navbar className="header-color">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/socialmedia">Links</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
