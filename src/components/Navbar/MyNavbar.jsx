import React, { useEffect, useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Dropdown,
  Offcanvas,
} from "react-bootstrap";
import { Search, PersonCircle, Cart, List, X } from "react-bootstrap-icons";
import i18n from "../../i18n";
import ita from "../../assets/imgs/itaflag.png";
import eng from "../../assets/imgs/engflag.png";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const MyNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  //const [showMenu2, setShowMenu2] = useState(false);

  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => setShowMenu(!showMenu);
  const closeMenu = () => setShowMenu(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  const { t } = useTranslation();
  const toggleSearch = () => setShowSearch((prev) => !prev);

  const cartCount = useSelector((state) =>
    state.cart.items.reduce((acc, item) => acc + item.quantity, 0),
  );

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, []);

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
          <div className="d-flex justify-content-center align-items-center">
            <Button
              variant="outline-dark"
              className="d-md-none me-2 border-0"
              onClick={toggleMenu}
            >
              <List size={24} />
            </Button>
            {!showSearch ? (
              <Button
                variant="outline-dark"
                className="border-0"
                onClick={toggleSearch}
              >
                <Search size={20} />
              </Button>
            ) : (
              <div className="search-bar d-flex align-items-center">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  style={{ maxWidth: "200px" }}
                />
                <Button
                  variant="outline-dark"
                  className="border-0 ms-2"
                  onClick={toggleSearch}
                >
                  <X size={18} />
                </Button>
              </div>
            )}
          </div>
          <div className="d-flex align-items-center">
            <Button
              variant="outline-dark"
              className="position-relative me-2 border-0"
              href="/cart"
            >
              <Cart size={20} />
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              )}
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
                <Dropdown.Item href="/assistance">Assistenza</Dropdown.Item>
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
              {t("Products")}
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
                <span>
                  Lingua
                  <img
                    src={i18n.language === "it" ? ita : eng}
                    alt={i18n.language}
                    width="22"
                    height="22"
                    className={`ita rounded-circle ms-2`}
                    style={{ cursor: "pointer" }}
                  />
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="bg-light border-secondary">
                <Dropdown.Item
                  onClick={() => changeLanguage("it")}
                  className="text-dark py-2 justify-content-between d-flex"
                >
                  Italiano
                  <img
                    src={ita}
                    alt={i18n.language}
                    width="22"
                    height="22"
                    className={`ita rounded-circle`}
                    style={{ cursor: "pointer" }}
                  />
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => changeLanguage("en")}
                  className="text-dark py-2 justify-content-between d-flex"
                >
                  Inglese
                  <img
                    src={eng}
                    alt={i18n.language}
                    width="22"
                    height="22"
                    className={`eng rounded-circle`}
                    style={{ cursor: "pointer" }}
                  />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MyNavbar;
