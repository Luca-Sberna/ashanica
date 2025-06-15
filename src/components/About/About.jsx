import React from "react";
import styles from "./About.module.css";
import Header from "../Header/Header";
import viso from "../../assets/imgs/viso.jpg";
import borsa from "../../assets/imgs/borsa.png";
import borsar from "../../assets/imgs/borsarossa.jpg";
import borsav from "../../assets/imgs/5913456804908616490_121.jpg";
import borsamare from "../../assets/imgs/borsamare.jpg";
import videoFile from "../../assets/imgs/5913456804452374878.mp4";
import borsaverde from "../../assets/imgs/borsaverde.jpg";

const About = () => {
  return (
    <div className={styles.about}>
      <Header />

      <section className={styles.heroSection}>
        <div className={styles.textContent}>
          <h1>Chi sono</h1>
          <p>
            Italiana di origine, cittadina del mondo per ispirazione, ho vissuto
            in luoghi che mi hanno plasmata: dai colori caldi e speziati di
            Marrakech all’energia urbana di Londra, Milano e New York. La moda è
            sempre stata il mio linguaggio, il mio modo di esprimere bellezza,
            emozione e identità.
          </p>
        </div>

        <div className={styles.imagesWrapper}>
          <img
            src={borsar}
            alt="Eleganza"
            className={styles.img1}
            loading="lazy"
          />
          <img src={viso} alt="Stile" className={styles.img2} loading="lazy" />
          <img
            src={borsamare}
            alt="Design"
            className={styles.img3}
            loading="lazy"
          />
        </div>
      </section>
      <hr />
      <section className={styles.heroSection}>
        <div className={styles.imagesWrapper}>
          <video
            src={videoFile}
            alt="Eleganza"
            className={styles.img1}
            autoPlay
            muted
            loop
          />
          <img
            src={borsav}
            alt="Stile"
            className={styles.img2}
            loading="lazy"
          />
          <img
            src={borsaverde}
            alt="Design"
            className={styles.img3}
            loading="lazy"
          />
        </div>
        <div className={styles.textContent}>
          <h1>La Nascita di ASKNIKA</h1>
          <p>
            <strong>ASKNIKA</strong>: “Ask” come amore, come desiderio di
            connessione profonda. “Nika” è il suono affettuoso con cui mio padre
            mi chiamava, e che oggi diventa memoria viva e ispirazione eterna.
            Questa capsule è dedicata a lui, che mi ha insegnato a riconoscere
            l’amore quando arriva e a custodirlo.
          </p>
          <p>
            <strong>ASKNIKA</strong> è un invito: chiedi all’universo amore,
            fiducia e luce. Non avere paura di osare, di brillare, di essere te
            stessa.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
