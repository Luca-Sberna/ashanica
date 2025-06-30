import React from "react";
import Header from "../Header/Header";
import { Container, Row, Col } from "react-bootstrap";
import "./Assistance.module.css";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <Container className="py-5">
        <Row className="mb-4">
          <Col>
            <h1 className="mb-3 text-light">Privacy Policy</h1>
            <p className="lead">
              In conformità al Regolamento UE 2016/679 (GDPR), [NomeBrand] si
              impegna a proteggere la privacy degli utenti.
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={10} lg={8}>
            <section className="mb-4">
              <h4>1. Titolare del trattamento</h4>
              <p>
                Il Titolare è [Nome azienda], con sede in [Indirizzo], email:{" "}
                <a href="mailto:email@brand.it">email@brand.it</a>.
              </p>
            </section>

            <section className="mb-4">
              <h4>2. Tipi di dati raccolti</h4>
              <p>
                Nome, email, indirizzo IP, dati di navigazione. I dati sono
                raccolti tramite moduli di contatto e cookie.
              </p>
            </section>

            <section className="mb-4">
              <h4>3. Finalità</h4>
              <p>
                I dati sono utilizzati per: rispondere a richieste, elaborare
                ordini, migliorare i servizi, inviare comunicazioni commerciali
                (se autorizzate).
              </p>
            </section>

            <section className="mb-4">
              <h4>4. Conservazione</h4>
              <p>
                I dati sono conservati per il tempo necessario al raggiungimento
                delle finalità o fino alla richiesta di cancellazione.
              </p>
            </section>

            <section className="mb-4">
              <h4>5. Diritti dell’utente</h4>
              <p>
                Accesso, rettifica, cancellazione, limitazione, opposizione al
                trattamento. È possibile contattare il Titolare per esercitare i
                propri diritti.
              </p>
            </section>

            <section className="mb-4">
              <h4>6. Cookie</h4>
              <p>
                Questo sito utilizza cookie tecnici e, con consenso, cookie
                analitici e di marketing. Per maggiori dettagli consulta la{" "}
                <a href="/cookie-policy">Cookie Policy</a>.
              </p>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
