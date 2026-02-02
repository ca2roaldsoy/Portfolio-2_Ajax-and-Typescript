import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Character from "../amiiboDetails/Character";
import Home from "../home/Home";

// Navigation Menu
function NavMenu() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" role="navigation" expand="md">
        <Navbar.Brand>
          <NavLink to="/" exact="true" role="link">
            Amiibo
          </NavLink>
        </Navbar.Brand>

        {/* Include hamburger Menu*/}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" exact="true" className="nav-link" role="link">
              Home
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Navigating showing correct component*/}
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:character" element={<Character />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default NavMenu;
