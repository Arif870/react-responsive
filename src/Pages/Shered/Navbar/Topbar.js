import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import logo from "../../../images/logo.png";
import "./Topbar.css";
import { HashLink } from "react-router-hash-link";

export default function Topbar() {
  const { users, logout, googleSignIn } = useAuth();

  return (
    <div>
      <Navbar
        className="sticky-nav"
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
              <Nav.Link as={HashLink} to="/home#Services">
                Services
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#Experts">
                Experts
              </Nav.Link>
            </Nav>

            <Navbar.Brand className="text-center d-block mx-auto">
              <Link to="/">
                <img className="w-75 " src={logo} alt="logo" />
              </Link>
            </Navbar.Brand>

            <Nav className="profile d-flex align-items-center">
              {users.displayName && <img src={users.photoURL} alt="" />}
              {users.displayName && <Nav.Link>{users.displayName}</Nav.Link>}

              {!users.email ? (
                <Nav.Link as={Link} to="/login" onClick={googleSignIn}>
                  Login
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login" onClick={logout}>
                  Logout
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
