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
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";

const MyNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => setShowMenu(!showMenu);
  const closeMenu = () => setShowMenu(false);
  const toggleSearch = () => setShowSearch((prev) => !prev);
  const [showBrand, setShowBrand] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { user, isAuthenticated } = useSelector((state) => state.user);

  const cartCount = useSelector((state) =>
    state.cart.items.reduce((acc, item) => acc + (item.quantity || 1), 0),
  );

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang) i18n.changeLanguage(lang);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  const handleLogout = () => {
    dispatch(logout());
    closeMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 65 && currentScrollY > lastScrollY) {
        // Scroll verso il basso → mostra brand
        setShowBrand(true);
      } else {
        // Scroll verso l’alto → nascondi brand
        setShowBrand(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <Navbar bg="white" expand="md" sticky="top" className="py-2 shadow">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
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

          {showBrand && (
            <a
              href="/"
              className="mx-auto ps-4 fw-bold text-decoration-none text-dark d-md-block"
              style={{
                fontSize: "1.5rem",
                transition: "opacity 0.3s",
                opacity: 1,
              }}
            >
              Asknica
            </a>
          )}

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

            <Dropdown align="end">
              <Dropdown.Toggle variant="outline-dark" className="border-0">
                <PersonCircle size={20} />
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-end mt-2">
                {!isAuthenticated || !user ? (
                  <>
                    <Dropdown.Item href="/login">Accedi</Dropdown.Item>
                    <Dropdown.Item href="/register">Registrati</Dropdown.Item>
                  </>
                ) : (
                  <>
                    <Dropdown.Item href="/user/profile">Profilo</Dropdown.Item>
                    <Dropdown.Item href="/user/payment-methods">
                      Metodi di pagamento
                    </Dropdown.Item>
                    {user?.isAdmin && (
                      <Dropdown.Item href="/admin">Admin</Dropdown.Item>
                    )}
                    <Dropdown.Divider />
                    <Dropdown.Item href="/assistance">Assistenza</Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout}>Esci</Dropdown.Item>
                  </>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Container>
      </Navbar>

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
              {!isAuthenticated || !user ? (
                <>
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
                </>
              ) : (
                <>
                  <Nav.Link
                    href="/user/profile"
                    className="text-dark py-2"
                    onClick={closeMenu}
                  >
                    Profilo
                  </Nav.Link>
                  <Nav.Link
                    href="/user/payment-methods"
                    className="text-dark py-2"
                    onClick={closeMenu}
                  >
                    Metodi di pagamento
                  </Nav.Link>
                  {user?.isAdmin && (
                    <Nav.Link
                      href="/admin"
                      className="text-dark py-2"
                      onClick={closeMenu}
                    >
                      Admin
                    </Nav.Link>
                  )}
                  <Nav.Link
                    href="/assistance"
                    className="text-dark py-2"
                    onClick={closeMenu}
                  >
                    Assistenza
                  </Nav.Link>
                  <Nav.Link onClick={handleLogout} className="text-dark py-2">
                    Esci
                  </Nav.Link>
                </>
              )}
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
                    className={`rounded-circle ms-2`}
                  />
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="bg-light border-secondary">
                <Dropdown.Item
                  onClick={() => changeLanguage("it")}
                  className="text-dark py-2 d-flex justify-content-between"
                >
                  Italiano{" "}
                  <img
                    src={ita}
                    alt="it"
                    width="22"
                    height="22"
                    className="rounded-circle"
                  />
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => changeLanguage("en")}
                  className="text-dark py-2 d-flex justify-content-between"
                >
                  Inglese{" "}
                  <img
                    src={eng}
                    alt="en"
                    width="22"
                    height="22"
                    className="rounded-circle"
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
