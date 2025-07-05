import React from "react";
import Header from "../Header/Header";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Assistance.module.css";
import { ArrowLeft } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const GeneralCondition = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="d-flex d-md-none justify-content-between align-items-center mx-1">
        <Button variant="outline-light" onClick={() => navigate(-1)}>
          <ArrowLeft className="fs-5" />
        </Button>
        <Link to={"/"}>
          <Button variant="outline-light">
            <FaHome className="fs-5" />
          </Button>
        </Link>
      </div>
      <Header />
      <Container className="py-5">
        <Row className="mb-4">
          <Col>
            <h1 className="mb-3 text-light">Condizioni Generali di Vendita</h1>
            <p className="lead">
              Le presenti Condizioni Generali regolano l’acquisto di prodotti
              effettuato sul sito [NomeBrand.it] da parte di utenti finali.
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={10} lg={8}>
            <section className="mb-4">
              <h4>1. Oggetto</h4>
              <p>
                La vendita è disciplinata dal D.Lgs. 206/2005 (Codice del
                Consumo). L'acquisto sul sito implica l'accettazione totale
                delle presenti condizioni.
              </p>
            </section>

            <section className="mb-4">
              <h4>2. Prodotti e disponibilità</h4>
              <p>
                Le immagini dei prodotti sono illustrative. La disponibilità può
                variare e non è garantita fino alla conferma d’ordine.
              </p>
            </section>

            <section className="mb-4">
              <h4>3. Prezzi e modalità di pagamento</h4>
              <p>
                I prezzi sono espressi in Euro e comprensivi di IVA. I metodi di
                pagamento accettati sono indicati durante il checkout.
              </p>
            </section>

            <section className="mb-4">
              <h4>4. Consegna</h4>
              <p>
                I tempi di consegna stimati sono di 3-7 giorni lavorativi. I
                tempi possono variare per cause indipendenti dalla nostra
                volontà.
              </p>
            </section>

            <section className="mb-4">
              <h4>5. Diritto di recesso</h4>
              <p>
                Il cliente ha 14 giorni per esercitare il diritto di recesso,
                come previsto dal Codice del Consumo. Il reso è accettato solo
                se il prodotto è integro e non utilizzato.
              </p>
            </section>

            <section className="mb-4">
              <h4>6. Garanzia legale</h4>
              <p>
                Tutti i prodotti godono della garanzia legale di conformità
                prevista dal Codice del Consumo (24 mesi).
              </p>
            </section>

            <section className="mb-4">
              <h4>7. Limitazione di responsabilità</h4>
              <p>
                Il venditore non è responsabile per danni indiretti derivanti
                dall’uso dei prodotti acquistati.
              </p>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GeneralCondition;
