import { Container, Nav, Navbar, NavDropdown, Badge } from "react-bootstrap";
import { Cart } from "react-bootstrap-icons";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">Il Tuo E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Prodotti</Nav.Link>
            <NavDropdown title="Categorie" id="basic-nav-dropdown">
              <NavDropdown.Item href="/category/1">
                Elettronica
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/2">
                Abbigliamento
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/cart">
              <Cart size={20} />
              <Badge bg="danger" className="ms-1">
                3
              </Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
