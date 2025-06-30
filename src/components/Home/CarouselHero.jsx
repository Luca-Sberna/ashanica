import React from "react";
import styles from "./CarouselHero.module.css";
import mockProducts from "../Mocks/MockProducts.jsx";
import { Link } from "react-router-dom";
import { Button, Image, Carousel } from "react-bootstrap";

const CarouselHero = () => {
  return (
    <Carousel indicators={false} className="mb-5">
      {mockProducts.map((slide) => (
        <Carousel.Item key={slide.id}>
          <Link
            className="d-flex justify-content-center "
            to={`/products/${slide.id}`}
          >
            <Image
              className={`w-100 ${styles.heroImg}`}
              src={slide.image[0]}
              alt={slide.alt}
            />
          </Link>
          <Carousel.Caption
            className={`${styles.customCaption} d-flex justify-content-center flex-column align-items-center`}
          >
            <h4
              className={`${styles.textShadow} fw-bold m-0 bg-dark bg-opacity-50 rounded-top p-1`}
            >
              {slide.name}
            </h4>
            <p
              className={`${styles.textShadow} bg-dark bg-opacity-50 rounded-bottom p-1`}
            >
              {slide.description}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselHero;
