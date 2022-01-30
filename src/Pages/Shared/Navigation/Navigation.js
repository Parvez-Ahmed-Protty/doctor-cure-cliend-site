import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./Navigation.css";

const Navigation = () => {
  return (
    <Navbar className="py-3 navber" collapseOnSelect expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            className="img-fluid logo"
            src="https://i.ibb.co/VSwwh6Z/logo.png"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto text-white">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Button
              className="border-light fw-bold ms-4"
              variant="outline-danger"
            >
              <Nav.Link href="#deets">LOGIN / SINGUP</Nav.Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
