import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  InputGroup,
  Dropdown,
  Offcanvas,
} from "react-bootstrap";
import { Search, PersonCircle, Cart, List, X } from "react-bootstrap-icons";

const ResponsiveNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);
  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <Navbar
        bg="white"
        variant="dark"
        expand="md"
        sticky="top"
        className="py-2 shadow"
      >
        <Container className="d-flex justify-content-between align-items-center">
          <div className="">
            <Button
              variant="outline-dark"
              className="d-md-none me-2 border-0"
              onClick={toggleMenu}
            >
              <List size={24} />
            </Button>

            <Button variant="outline-dark" className="border-0">
              <Search size={20} />
            </Button>
          </div>
          <div className="d-flex align-items-center">
            <Button
              variant="outline-dark"
              className="position-relative me-2 border-0"
              href="/cart"
            >
              <Cart size={20} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3
              </span>
            </Button>

            {/* Dropdown utente */}
            <Dropdown align="end">
              <Dropdown.Toggle variant="outline-dark" className="border-0">
                <PersonCircle size={20} />
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-end mt-2">
                <Dropdown.Item href="/login">Accedi</Dropdown.Item>
                <Dropdown.Item href="/register">Registrati</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="/help">Assistenza</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Container>
      </Navbar>

      {/* Offcanvas Menu per mobile */}
      <Offcanvas
        show={showMenu}
        onHide={closeMenu}
        placement="start"
        className="bg-light text-dark"
      >
        <Offcanvas.Header className="border-bottom border-secondary justify-content-between">
          <Offcanvas.Title>Menu</Offcanvas.Title>
          <Button
            variant="outline-dark"
            onClick={closeMenu}
            className="border-0"
          >
            <X size={24} />
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="/" className="text-dark py-3" onClick={closeMenu}>
              Home
            </Nav.Link>
            <Nav.Link
              href="/products"
              className="text-dark py-3"
              onClick={closeMenu}
            >
              Prodotti
            </Nav.Link>
            <Nav.Link
              href="/about"
              className="text-dark py-3"
              onClick={closeMenu}
            >
              Chi Siamo
            </Nav.Link>

            <div className="mt-4 pt-3 border-top border-secondary">
              <h6 className="text-muted mb-3">ACCOUNT</h6>
              <Nav.Link
                href="/login"
                className="text-dark py-2"
                onClick={closeMenu}
              >
                Accedi
              </Nav.Link>
              <Nav.Link
                href="/register"
                className="text-dark py-2"
                onClick={closeMenu}
              >
                Registrati
              </Nav.Link>
              <Nav.Link
                href="/help"
                className="text-dark py-2"
                onClick={closeMenu}
              >
                Assistenza
              </Nav.Link>
            </div>
            <Dropdown className="py-3">
              <Dropdown.Toggle
                as={Nav.Link}
                className="text-dark d-flex justify-content-between align-items-center p-0"
              >
                <span>Lingua</span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="bg-light border-secondary">
                <Dropdown.Item
                  href="/category/electronics"
                  className="text-dark py-2"
                >
                  Italiano
                </Dropdown.Item>
                <Dropdown.Item
                  href="/category/clothing"
                  className="text-dark py-2"
                >
                  Inglese
                </Dropdown.Item>
                <Dropdown.Item href="/category/home" className="text-dark py-2">
                  Spagnolo
                </Dropdown.Item>
                <Dropdown.Item
                  href="/category/sports"
                  className="text-dark py-2"
                >
                  Francese
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ResponsiveNavbar;
