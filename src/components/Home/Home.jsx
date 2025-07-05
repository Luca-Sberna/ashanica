import React from "react";
import { Container, Row, Col, Button, Image, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Header from "../Header/Header";
import { StarFill } from "react-bootstrap-icons";
import mockProducts from "../../components/Mocks/MockProducts.jsx";
import Slogan from "./Slogan.jsx";
import ProductCard from "../Products/ProductCard.jsx";
import CarouselHero from "./CarouselHero.jsx";

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

const Home = () => {
  const groupedReviews = [];
  for (let i = 0; i < reviews.length; i += 2) {
    groupedReviews.push(reviews.slice(i, i + 2));
  }
  return (
    <div className={`${styles.home} `}>
      <div className=" ps-2">
        <Header />
      </div>
      <CarouselHero />
      <hr className="m-0 pb-1" />
      <Slogan />
      <hr className="m-0 mt-1" />
      {/* Sezione Prodotti in Evidenza */}
      <Container className="mb-5 p-0 overflow-hidden">
        <Row>
          {mockProducts.map((product) => (
            <Col
              key={mockProducts.id}
              lg={3}
              md={4}
              xs={6}
              sm={6}
              className="p-0"
            >
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
        <hr className="m-0" />
        <Row>
          <Col xs={6} sm={6} className="p-md-3 pe-0">
            <h4 className={`${styles.textShadow} m-0 p-2 rounded-top`}>
              {mockProducts[2].name}
            </h4>
            <p className="m-0 p-2 pe-0 pt-0 rounded-bottom">
              {mockProducts[2].description}
            </p>
            <p className="m-0 p-2 pt-0 rounded-bottom d-none d-md-flex">
              {mockProducts[2].longDescription}
            </p>
          </Col>

          <Col xs={6} sm={6}>
            <Link to={`/products/${mockProducts[2].id}`}>
              <Image
                className={`img-fluid ${styles.titoloImg}`}
                src={mockProducts[2].image[0]}
                alt="img"
              />
            </Link>
          </Col>
          <div className="pt-3 ms-1 align-items-center justify-content-center">
            <p>
              Scopri il <strong>RockBra</strong>, il capo che ridefinisce il
              concetto di lingerie.
            </p>
            <ul className="list-unstyled">
              <li>✔ Vera pelle di altissima qualità</li>
              <li>✔ Design sartoriale</li>
              <li>✔ Finiture pregiate</li>
              <li>✔ Comfort eccezionale</li>
              <li>✔ Linee minimal e taglio deciso</li>
              <li>✔ Perfetto da solo o sotto una giacca</li>
            </ul>
            <p>
              <strong>Un must-have per chi ama distinguersi con stile.</strong>
            </p>
            <Link
              className="text-decoration-none"
              to={`/products/${mockProducts[2].id}`}
            >
              <Button variant="outline-light" className="d-block mx-auto">
                Visualizza
              </Button>
            </Link>
          </div>
        </Row>
        <hr />
        <Row>
          <Col xs={12} className=" p-3">
            <h4 className={`${styles.textShadow} text-center pb-3`}>
              Su di noi
            </h4>
            <p className="text-center">
              Italiana di origine, cittadina del mondo per ispirazione, ho
              vissuto in luoghi che mi hanno plasmata: dai colori caldi e
              speziati di
              <strong> Marrakech</strong> all’energia urbana di
              <strong> Londra</strong>, <strong> Milano</strong> e
              <strong> New York</strong>. <br /> La moda è sempre stata il mio
              linguaggio, il mio modo di esprimere <strong>bellezza</strong>,
              <strong> emozione</strong> e <strong>identità</strong>.
            </p>
            <Link
              className="d-flex justify-content-center text-decoration-none"
              to={"/about"}
            >
              <Button variant="outline-light">Scopri di più</Button>
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
                        <div className="p-3 border rounded h-100 d-flex flex-column align-items-start justify-content-between ">
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
