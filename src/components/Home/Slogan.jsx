import React from "react";
import styles from "./Slogan.module.css";
import { Container, Row, Col } from "react-bootstrap";

const Slogan = () => {
  return (
    <Container
      fluid
      className={`${styles.sloganContainer} position-relative overflow-hidden`}
    >
      <Row className="justify-content-center align-items-cente position-relative">
        {/* Testo centrale */}
        <Col xs={10} md={10} className="text-center px-0">
          <h2 className={`${styles.sloganText} mb-0 d-flex flex-column gap-2`}>
            <span className={styles.firstLine}>
              ASKNICA FEMMINILE PER NATURA
            </span>
            <span className={styles.secondLine}>...AUDACE PER SCELTA...</span>
            <span className={styles.thirdLine}>L'ELEGANZA CON CARATTERE</span>
          </h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Slogan;
