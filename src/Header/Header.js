import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img
              alt=""
              src="https://logopond.com/assets/img/logo-footer.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Learning Academy
          </Navbar.Brand>
          {/* navigation bar  */}
          <Nav className="mx-auto">
            <Nav.Link className="text-white" as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/services">
              Services
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/blog">
              Blog
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </nav>
  );
};

export default Header;
