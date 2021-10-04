import React from "react";
import "./styles.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useSelector } from "react-redux";
import { authActions } from "../../redux/actions/auth.action";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "./logo.png";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const role = useSelector((state) => state.auth.role);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  const authLinks = (
    <Nav>
      <Nav.Link className="headerLink navLink" as={Link} to="/user/profile">
        <FontAwesomeIcon icon="chart-line" size="lg" /> User
      </Nav.Link>
      <Nav.Link className="headerLink navLink" onClick={handleLogout}>
        <FontAwesomeIcon icon="sign-out-alt" size="lg" /> Logout
      </Nav.Link>
      <Nav.Link
        className="headerLink navLink"
        href="http://localhost:3000/create"
      >
        Create Recipe
      </Nav.Link>
      <Nav.Link
        href="http://localhost:3000/fridge"
        className="headerLink navLink"
      >
        What´s in your Fridge?
      </Nav.Link>
      {/* <Nav.Link as={Link} to={`/user/profile/${userId}`}>
        <FontAwesomeIcon icon="chart-line" size="sm" /> User Profile
      </Nav.Link> */}
      <SearchBar />
    </Nav>
  );

  const adminLinks = (
    <Nav>
      <Nav.Link as={Link} to="/admin/profile" className="headerLink navLink">
        <FontAwesomeIcon icon="chart-line" size="sm" /> Admin
      </Nav.Link>
      <Nav.Link onClick={handleLogout} className="headerLink navLink">
        <FontAwesomeIcon
          className="headerLink navLink"
          icon="sign-out-alt"
          size="sm"
        />{" "}
        Logout
      </Nav.Link>

      {/* <Nav.Link as={Link} to={`/user/profile/${userId}`}>
        <FontAwesomeIcon icon="chart-line" size="sm" /> User Profile
      </Nav.Link> */}
      <SearchBar />
    </Nav>
  );

  const publicLinks = (
    <Nav>
      <Nav.Link as={Link} to="/signup" className="headerLink navLink">
        <FontAwesomeIcon icon="registered" size="sm" /> Register
      </Nav.Link>
      <Nav.Link as={Link} to="/login" className="headerLink navLink">
        <FontAwesomeIcon icon="sign-in-alt" size="sm" /> Login
      </Nav.Link>
      <Nav.Link href="http://localhost:3000/fridge" className="navLink">
        What´s in your Fridge?
      </Nav.Link>
      <SearchBar />
    </Nav>
  );
  console.log(role);
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
        <Nav className="mr-auto"></Nav>
        {!isAuthenticated
          ? publicLinks
          : role === "admin"
          ? adminLinks
          : authLinks}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
