import React from "react";
import "./styles.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

import logo from "./logo.png";

const Header = () => {
  return (
    <Navbar className="nav-bar" variant="dark" expand="lg">
      <Link style={{ textDecoration: "none" }} as={Link} to={`/`}>
        <Navbar.Brand>
          <img
            src={logo}
            alt=""
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          CoderCook
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#signup">Sign Up</Nav.Link>
          <Nav.Link href="#login">Login</Nav.Link>
          <Nav.Link href="#signup">Categories</Nav.Link>
        </Nav>
        <SearchBar />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
