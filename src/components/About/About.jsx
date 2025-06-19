import React from "react";
import styles from "./About.module.css";
import viso from "../../assets/imgs/viso.png";
import borsar from "../../assets/imgs/borsarossa.jpg";
import borsav from "../../assets/imgs/5913456804908616490_121.jpg";
import borsamare from "../../assets/imgs/borsamare.jpg";
import videoFile from "../../assets/imgs/5913456804452374878.mp4";
import borsaverde from "../../assets/imgs/borsaverde.jpg";
import Header from "../Header/Header";

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
            <strong> Marrakech</strong> all’energia urbana di
            <strong>Londra</strong>, <strong>Milano</strong> e
            <strong>New York</strong>. La moda è sempre stata il mio linguaggio,
            il mio modo di esprimere <strong>bellezza</strong>,
            <strong>emozione</strong> e <strong>identità</strong>.
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
            <strong>ASKNIKA</strong>: <strong>“Ask”</strong> come amore, come
            desiderio di connessione profonda. <strong>“Nika”</strong> è il
            suono affettuoso con cui mio padre mi chiamava, e che oggi diventa
            memoria viva e ispirazione eterna. Questa capsule è dedicata a lui,
            che mi ha insegnato a riconoscere l’amore quando arriva e a
            custodirlo.
          </p>
          <p>
            <strong>ASKNIKA</strong> è un invito:
          </p>
          <p className="text-center">
            <strong>
              Chiedi all’universo amore, fiducia e luce.
              <br /> Non avere paura di osare, di brillare, di essere te stessa.
            </strong>
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
