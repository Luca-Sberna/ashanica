import React from "react";
import styles from "./Slogan.module.css";
import { Container, Row, Col } from "react-bootstrap";
import leftQuote from "../../assets/imgs/leftquote.png"; // Sostituisci con il tuo percorso
import rightQuote from "../../assets/imgs/rightquote.png"; // Sostituisci con il tuo percorso

const Slogan = () => {
  return (
    <Container
      fluid
      className={`${styles.sloganContainer} py-5 position-relative overflow-hidden`}
    >
      <Row className="justify-content-center align-items-cente position-relative">
        {/* Virgoletta sinistra */}
        <Col className="text-end pe-0">
          <img
            src={leftQuote}
            alt="Virgoletta sinistra"
            className={`${styles.quoteImageSx} img-fluid `}
          />
        </Col>

        {/* Testo centrale */}
        <Col xs={10} md={10} className="text-center px-0">
          <h2 className={`${styles.sloganText} mb-0`}>
            <span className={styles.firstLine}>
              ASKNICA FEMMINILE PER NATURA...
            </span>
            <br />
            <span className={styles.secondLine}>AUDACE PER SCELTA</span>
            <br />
            <span className={styles.thirdLine}>L'ELEGANZA CON CARATTERE</span>
          </h2>
        </Col>

        {/* Virgoletta destra */}
        <Col className="text-start ps-0">
          <img
            src={rightQuote}
            alt="Virgoletta destra"
            className={`${styles.quoteImageDx} img-fluid`}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Slogan;
