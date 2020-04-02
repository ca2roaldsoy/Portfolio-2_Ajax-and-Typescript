import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Home from "../home/Home";
import Container from "react-bootstrap/Container";
import CharacterDetails from "../amiiboDetails/CharacterDetails";

// Navigation Menu
function NavMenu() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" role="navigation" expand="md">
        <Navbar.Brand>
          <NavLink to="/" exact role="link">
            Amiibo
          </NavLink>
        </Navbar.Brand>

        {/* Include hamburger Menu*/}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" exact className="nav-link" role="link">
              Home
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Navigating showing correct component*/}
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/character/:name" component={CharacterDetails} />
        </Switch>
      </Container>
    </Router>
  );
}

export default NavMenu;
