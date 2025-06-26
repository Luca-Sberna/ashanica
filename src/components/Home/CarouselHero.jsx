import React from "react";
import styles from "./CarouselHero.module.css";
import mockProducts from "../Mocks/MockProducts.jsx";
import { Link } from "react-router-dom";
import { Button, Image, Carousel } from "react-bootstrap";

const CarouselHero = () => {
  return (
    <Carousel indicators={false} className="mb-5">
      Add commentMore actions
      {mockProducts.map((slide) => (
        <Carousel.Item key={slide.id}>
          <Link to={`/products/${slide.id}`}>
            <Image
              className={`w-100 ${styles.heroImg}`}
              src={slide.image[0]}
              alt={slide.alt}
            />
          </Link>
          <Carousel.Caption className={styles.customCaption}>
            <h4 className="m-0 bg-secondary bg-opacity-50 rounded-top p-1">
              {slide.name}
            </h4>
            <p className=" bg-secondary bg-opacity-50 rounded-bottom p-1">
              {slide.description}
            </p>
            <Link className="text-decoration-none" to={`/products/${slide.id}`}>
              <Button
                className="mb-2 bg-light text-dark"
                variant="outline-warning"
              >
                <strong>Scopri di più</strong>
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselHero;
