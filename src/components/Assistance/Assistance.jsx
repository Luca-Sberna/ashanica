import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import emailjs from "emailjs-com";
import Header from "../Header/Header";
import "./Assistance.module.css";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";
import { FaHome } from "react-icons/fa";

const Support = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMsg(null);
    setErrorMsg(null);

    try {
      const response = await emailjs.send(
        "service_70p8k7e",
        "template_15ir34t",
        {
          to_email: "info@asknicamilano.it",
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          message: form.message,
          date: new Date().toLocaleString("it-IT"),
        },
        "otzmIlCgDioaN6MLR"
      );

      if (response.status === 200) {
        setSuccessMsg("Messaggio inviato con successo!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setErrorMsg("Errore nell'invio. Riprova più tardi.");
      }
    } catch (error) {
      console.error("Email invio fallito:", error);
      setErrorMsg("Errore imprevisto. Controlla la console per i dettagli.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
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
      <Container className="py-5">
        <h2 className="mb-4">Assistenza Clienti</h2>
        <p>
          Il nostro team è qui per supportarti in ogni fase del tuo acquisto.
          Consulta le sezioni seguenti o inviaci direttamente una richiesta.
        </p>

        <hr />

        <Row className="mb-4">
          <Col>
            <h4>📦 Tempistiche di Consegna</h4>
            <p>
              Le spedizioni avvengono entro 24/48h lavorative. I tempi di
              consegna variano da 2 a 5 giorni lavorativi, a seconda della
              destinazione.
            </p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <h4>↩️ Resi & Rimborsi</h4>
            <p>
              Hai 14 giorni di tempo dalla ricezione per restituire il prodotto.
              Il rimborso verrà effettuato entro 7 giorni. Il prodotto deve
              essere integro e nella confezione originale.
            </p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <h4>📋 Termini & Condizioni</h4>
            <ul>
              <li>Articoli restituiti in condizioni originali</li>
              <li>Non si accettano resi su prodotti personalizzati</li>
              <li>Spese di spedizione per il reso a carico del cliente</li>
            </ul>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={8}>
            <h4>📨 Contattaci</h4>

            {successMsg && <Alert variant="success">{successMsg}</Alert>}
            {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Il tuo nome</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Mario Rossi"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>La tua email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="mario@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Messaggio</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  placeholder="Scrivi il tuo messaggio..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button
                variant="outline-light"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Invio in corso...
                  </>
                ) : (
                  "Invia"
                )}
              </Button>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col>
            <h4>📄 Informazioni Legali</h4>
            <p>
              Ai sensi del Regolamento UE 2016/679 (GDPR), garantiamo il
              trattamento dei dati personali secondo normativa. Consulta la
              nostra{" "}
              <Link className="text-light" to="/policies">
                Privacy Policy
              </Link>{" "}
              e le{" "}
              <Link className="text-light" to="/conditions">
                Condizioni Generali
              </Link>
              .
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Support;
