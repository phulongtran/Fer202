import { Navbar, Nav, Container } from "react-bootstrap";

export default function AppNavbar({ onSelect }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">FER202 Lab</Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link onClick={() => onSelect("EX1")}>Exercise 1</Nav.Link>
          <Nav.Link onClick={() => onSelect("EX2")}>Exercise 2</Nav.Link>
          <Nav.Link onClick={() => onSelect("EX3")}>Exercise 3</Nav.Link>
          <Nav.Link onClick={() => onSelect("EX4")}>Exercise 4</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
