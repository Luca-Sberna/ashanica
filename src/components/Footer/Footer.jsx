import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Facebook, Twitter, Instagram, Linkedin } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-5 mt-auto border-top border-secondary">
      <Container>
        <Row>
          {/* Brand */}
          <Col md={3} className="mb-4">
            <h5 className="mb-3 fw-bold">Grazie mille</h5>
            <p className="small text-muted">
              La tua soluzione per lo shopping online di qualità.
            </p>
          </Col>

          {/* Link Utili */}
          <Col md={3} className="mb-4">
            <h6 className="text-uppercase mb-3">Link Utili</h6>
            <Nav className="flex-column">
              <Nav.Link href="/about" className="text-dark px-0">
                Chi Siamo
              </Nav.Link>
              <Nav.Link href="/about" className="text-dark px-0">
                Contatti
              </Nav.Link>
              <Nav.Link href="/policies" className="text-dark px-0">
                Privacy Policy
              </Nav.Link>
              <Nav.Link href="/conditions" className="text-dark px-0">
                Termini e Condizioni
              </Nav.Link>
            </Nav>
          </Col>

          {/* Contatti */}
          <Col md={3} className="mb-4">
            <h6 className="text-uppercase mb-3">Contatti</h6>
            <p className="mb-1">
              <strong>Email:</strong> support@iltuoecommerce.it
            </p>
            <p className="mb-1">
              <strong>Telefono:</strong> +39 0123 456789
            </p>
            <p className="mb-1">
              <strong>Indirizzo:</strong> Via Roma 123, Milano, Italia
            </p>
          </Col>

          {/* Social */}
          <Col md={3} className="mb-4 text-center">
            <h6 className="text-uppercase mb-3">Seguici</h6>
            <div className="d-flex gap-3 fs-4 justify-content-center">
              <Nav.Link
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-dark p-0"
              >
                <Facebook />
              </Nav.Link>
              <Nav.Link
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-dark p-0"
              >
                <Twitter />
              </Nav.Link>
              <Nav.Link
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-dark p-0"
              >
                <Instagram />
              </Nav.Link>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary" />

        <Row className="justify-content-between align-items-center small text-muted">
          <Col md="auto" className="mb-1 mb-md-0 text-center">
            © {new Date().getFullYear()} Asknica Tutti i diritti riservati.
          </Col>
          <Col md="auto">
            <Nav className="gap-3 justify-content-center justify-content-md-end">
              <Nav.Link href="/policies" className="text-muted px-0">
                Privacy
              </Nav.Link>
              <Nav.Link href="/policies" className="text-muted px-0">
                Cookie Policy
              </Nav.Link>
            </Nav>
            <p className="text-center">Powered by Luch</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
