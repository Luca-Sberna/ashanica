import React from "react";
import styles from "./About.module.css";
import Header from "../Header/Header";

const About = () => {
  return (
    <div className={styles.about}>
      <Header />

      <section className={styles.heroSection}>
        <div className={styles.textContent}>
          <h1>Chi siamo</h1>
          <p>
            Siamo un team di creativi e innovatori con una visione chiara: unire
            design, qualità e funzionalità. Ogni nostro progetto è realizzato
            con cura artigianale e attenzione ai dettagli.
          </p>
        </div>

        <div className={styles.imagesWrapper}>
          <img
            src="https://placehold.co/1200x400"
            alt="Eleganza"
            className={styles.img1}
            loading="lazy"
          />
          <img
            src="https://placehold.co/1200x400"
            alt="Stile"
            className={styles.img2}
            loading="lazy"
          />
          <img
            src="https://placehold.co/1200x400"
            alt="Design"
            className={styles.img3}
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
