import React from "react";
import styles from "./CarouselHero.module.css";
import mockProducts from "../Mocks/MockProducts.jsx";
import { Link } from "react-router-dom";
import { Image, Carousel } from "react-bootstrap";

const CarouselHero = () => {
  return (
    <Carousel indicators={false}>
      {mockProducts.map((slide) => (
        <Carousel.Item key={slide.id}>
          <Link
            className="d-flex justify-content-center "
            to={`/products/${slide.id}`}
          >
            <Image
              className={`w-100 hover-effect ${styles.heroImg}`}
              src={slide.image[0]}
              alt={slide.alt}
            />
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselHero;
