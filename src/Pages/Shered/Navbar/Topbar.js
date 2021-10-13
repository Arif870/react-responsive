import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";

export default function Topbar() {
  return (
    <div>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="">
              <Nav.Link href="#Services">Services</Nav.Link>
              <Nav.Link href="#Experts">Experts</Nav.Link>
            </Nav>

            <Navbar.Brand className="text-center d-block mx-auto">
              <Link to="/">
                <img className="w-75 " src={logo} alt="logo" />
              </Link>
            </Navbar.Brand>

            <Nav>
              <Nav.Link eventKey={2} href="#memes">
                Arif uz zaman
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
