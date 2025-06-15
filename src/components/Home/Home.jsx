import React from "react";
import { Container, Row, Col, Button, Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Header from "../Header/Header";
import { StarFill } from "react-bootstrap-icons";
import borsamare from "../../assets/imgs/borsamare.jpg";
import borsamare2 from "../../assets/imgs/borsabluy.jpg";
import borsamare3 from "../../assets/imgs/borsanera.jpg";
import borsabeige from "../../assets/imgs/borsabeige.jpg";
import borsa2 from "../../assets/imgs/borsarossa.jpg";
import borsa3 from "../../assets/imgs/borsaverde.jpg";
import borsa4 from "../../assets/imgs/borsanera2.jpg";

const reviews = [
  {
    username: "Luca",
    avatar: "https://i.pravatar.cc/40?img=1",
    comment: "Prodotto eccezionale! Spedizione veloce e servizio impeccabile.",
  },
  {
    username: "Giulia",
    avatar: "https://i.pravatar.cc/40?img=2",
    comment: "Adoro questo shop! Tutto perfetto come sempre.",
  },
  {
    username: "Marco",
    avatar: "https://i.pravatar.cc/40?img=3",
    comment: "Qualità altissima, tornerò sicuramente a comprare qui.",
  },
  {
    username: "Sara",
    avatar: "https://i.pravatar.cc/40?img=4",
    comment: "Ottima esperienza, consiglio vivamente a tutti.",
  },
  {
    username: "Alessandro",
    avatar: "https://i.pravatar.cc/40?img=5",
    comment: "Tutto perfetto! Complimenti per la professionalità.",
  },
];

// Mock data per il carosello e i prodotti in evidenza
const heroImages = [
  {
    id: 1,
    src: borsabeige,
    alt: "Offerta 1",
    caption: "Sconti fino al 50% Happy Summer",
    description: "la descrizione non dovrebbe essere tanto lunga",
  },
  {
    id: 2,
    src: borsamare2,
    alt: "Offerta 2",
    caption: "Sconti fino al 50% Happy Summer",
    description: "la descrizione non dovrebbe essere tanto lunga",
  },
  {
    id: 3,
    src: borsamare3,
    alt: "Offerta 3",
    caption: "Sconti fino al 50% Happy Summer",
    description: "la descrizione non dovrebbe essere tanto lunga",
  },
];

const featuredProducts = [
  {
    id: 1,
    name: "Prodotto 1",
    price: 49.99,
    image: borsamare,
  },
  {
    id: 2,
    name: "Prodotto 2",
    price: 59.99,
    image: borsamare2,
  },
  {
    id: 3,
    name: "Prodotto 3",
    price: 39.99,
    image: borsamare3,
  },
  {
    id: 4,
    name: "Prodotto 4",
    price: 79.99,
    image: borsa2,
  },
  {
    id: 5,
    name: "Prodotto 5",
    price: 49.99,
    image: borsa3,
  },
  {
    id: 6,
    name: "Prodotto 6",
    price: 59.99,
    image: borsa4,
  },
  {
    id: 7,
    name: "Prodotto 7",
    price: 49.99,
    image: borsa3,
  },
  {
    id: 8,
    name: "Prodotto 8",
    price: 59.99,
    image: borsa4,
  },
];

const Home = () => {
  const groupedReviews = [];
  for (let i = 0; i < reviews.length; i += 2) {
    groupedReviews.push(reviews.slice(i, i + 2));
  }
  return (
    <div className={styles.home}>
      <Header />
      {/* Hero Carousel */}
      <Carousel className="mb-5">
        {heroImages.map((slide) => (
          <Carousel.Item key={slide.id}>
            <img
              className={`d-block w-100 ${styles.heroImg}`}
              src={slide.src}
              alt={slide.alt}
            />
            <Carousel.Caption className={styles.customCaption}>
              <h3>{slide.caption}</h3>
              <p className="m-1">{slide.description}</p>
              <Button variant="warning">Scopri di più</Button>
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
            <Col key={product.id} lg={3} md={4} xs={6} sm={6} className="mb-4">
              <div className="card h-100">
                <img
                  src={product.image}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                  alt={product.name}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">€ {product.price.toFixed(2)}</p>
                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-warning mt-auto"
                  >
                    Dettagli
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <hr className="py-3" />
        <Row>
          <Col xs={5} sm={6} className="bg-light p-3">
            <h4>Titolo</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              necessitatibus consectetur, ratione excepturi sequi voluptatem
              eius nam ipsam voluptatum accusamus eum! Odio nisi est distinctio
              ut impedit debitis, magnam velit.
            </p>
          </Col>

          <Col xs={7} sm={6}>
            <img
              className={`img-fluid ${styles.titoloImg}`}
              src={borsa3}
              alt="img"
            />
          </Col>
        </Row>
        <hr className="" />
        <Row>
          <Col xs={12} className="bg-light p-3">
            <h4 className="text-center pb-3">Su di noi</h4>
            <p className="text-center px-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates repellendus adipisci beatae architecto suscipit
              provident eaque, asperiores commodi omnis laboriosam vero
              perferendis libero nihil reprehenderit, nemo voluptatem, expedita
              temporibus similique?ssitatibus consectetur, ratione excepturi
              sequi voluptatem eius nam ipsam voluptatum accusamus eum! Odio
              nisi est distinctio ut impedit debitis, magnam velit.
            </p>
            <Link
              className="d-flex justify-content-center text-decoration-none"
              to={"/about"}
            >
              <Button className="" variant="warning">
                Scopri di più
              </Button>
            </Link>
          </Col>
        </Row>
        <hr />
        <Row className="justify-content-center pb-3">
          <Col md={10}>
            <Carousel
              controls={true}
              indicators={false}
              interval={3000}
              className="shadow-sm "
            >
              {groupedReviews.map((group, idx) => (
                <Carousel.Item key={idx} className="p-4">
                  <Row className="g-4 justify-content-center">
                    {group.map((review, i) => (
                      <Col key={i} md={6}>
                        <div className="p-3 border rounded h-100 d-flex flex-column align-items-start justify-content-between bg-light">
                          <div className="d-flex align-items-center mb-2">
                            <Image
                              src={review.avatar}
                              roundedCircle
                              width={40}
                              height={40}
                              className="me-2"
                              alt={review.username}
                            />
                            <strong>{review.username}</strong>
                          </div>
                          <div className="text-warning mb-2">
                            {Array(5)
                              .fill()
                              .map((_, i) => (
                                <StarFill key={i} size={16} className="me-1" />
                              ))}
                          </div>
                          <p className="fst-italic mb-0">"{review.comment}"</p>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
