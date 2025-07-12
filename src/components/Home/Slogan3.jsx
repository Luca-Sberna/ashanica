import React from "react";
import styles from "./Slogan.module.css";
import { Container, Row, Col } from "react-bootstrap";

const Slogan3 = () => {
  return (
    <Container
      fluid
      className={`${styles.sloganContainer} position-relative overflow-hidden`}
    >
      <Row className="justify-content-center align-items-cente position-relative">
        {/* Testo centrale */}
        <Col xs={10} md={10} className="text-center px-0">
          <h2 className={`${styles.sloganText} mb-0 d-flex flex-column gap-2`}>
            <span className={`${styles.firstLine} py-1`}>
              L'ELEGANZA CON CARATTERE
            </span>
          </h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Slogan3;
