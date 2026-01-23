import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./AppNavbar.css";

function AppNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="custom-navbar" sticky="top">
      <Container>
        {/* Brand */}
        <Navbar.Brand className="navbar-brand-custom">
        System
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="mx-auto nav-links">
            <NavLink to="/booking" className="nav-item-custom">
              Flight Booking
            </NavLink>

            <NavLink to="/login" className="nav-item-custom">
              Login
            </NavLink>

            <NavLink to="/users" className="nav-item-custom">
              Manage Users
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
