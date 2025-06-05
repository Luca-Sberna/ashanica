import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Header from "../Header/Header";

// Mock data per il carosello e i prodotti in evidenza
const heroImages = [
  {
    id: 1,
    src: "https://placehold.co/1200x400",
    alt: "Offerta 1",
    caption: "Sconti fino al 50%",
  },
  {
    id: 2,
    src: "https://placehold.co/1200x400",
    alt: "Offerta 2",
    caption: "Nuova Collezione",
  },
  {
    id: 3,
    src: "https://placehold.co/1200x400",
    alt: "Offerta 3",
    caption: "Spedizione Gratuita",
  },
];

const featuredProducts = [
  {
    id: 1,
    name: "Prodotto 1",
    price: 49.99,
    image: "https://via.placeholder.com/300x300?text=Prodotto+1",
  },
  {
    id: 2,
    name: "Prodotto 2",
    price: 59.99,
    image: "https://via.placeholder.com/300x300?text=Prodotto+2",
  },
  {
    id: 3,
    name: "Prodotto 3",
    price: 39.99,
    image: "https://via.placeholder.com/300x300?text=Prodotto+3",
  },
  {
    id: 4,
    name: "Prodotto 4",
    price: 79.99,
    image: "https://via.placeholder.com/300x300?text=Prodotto+4",
  },
];

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      {/* Hero Carousel */}
      <Carousel className="mb-5">
        {heroImages.map((slide) => (
          <Carousel.Item key={slide.id}>
            <img className="d-block w-100" src={slide.src} alt={slide.alt} />
            <Carousel.Caption>
              <h3>{slide.caption}</h3>
              <Button variant="primary">Scopri di più</Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <hr />
      {/* Sezione Prodotti in Evidenza */}
      <Container className="mb-5">
        <h2 className="text-center mb-4">Prodotti in Evidenza</h2>
        <Row>
          {featuredProducts.map((product) => (
            <Col key={product.id} lg={3} md={6} className="mb-4">
              <div className="card h-100">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">€ {product.price.toFixed(2)}</p>
                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-primary mt-auto"
                  >
                    Dettagli
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      {/* Banner Promozionale */}
      <div className="bg-light py-5 mb-5">
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <h3>Offerta Speciale!</h3>
              <p>Registrati oggi e ricevi il 10% di sconto sul primo ordine.</p>
            </Col>
            <Col md={4} className="text-md-end">
              <Button variant="success" size="lg">
                Registrati Ora
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
