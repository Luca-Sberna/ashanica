import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Button, Alert, Modal, Form } from "react-bootstrap";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// Mock dati utente (iniziali)
const mockUser = {
  shippingAddress: {
    fullName: "Mario Rossi",
    address: "Via Roma 10",
    city: "Milano",
    zip: "20100",
    country: "Italia",
  },
};

const Checkout = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [shippingAddress, setShippingAddress] = useState(
    mockUser.shippingAddress,
  );

  const handleApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      alert(`Ordine confermato da ${details.payer.name.given_name}`);
      navigate("/order-success");
    });
  };

  const handleChange = (e) => {
    setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
  };

  const handleSaveAddress = () => {
    setShowModal(false);
    // qui potresti anche salvare su un backend o nel localStorage
  };

  const hasShipping = !!shippingAddress;

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Checkout</h1>

      {/* Sezione Dati di Spedizione */}
      <Card className="mb-4">
        <Card.Header as="h5">Dati di spedizione</Card.Header>
        <Card.Body>
          {hasShipping ? (
            <>
              <p>
                <strong>{shippingAddress.fullName}</strong>
              </p>
              <p>{shippingAddress.address}</p>
              <p>
                {shippingAddress.zip}, {shippingAddress.city}
              </p>
              <p>{shippingAddress.country}</p>
              <Button
                variant="outline-secondary"
                onClick={() => setShowModal(true)}
              >
                Modifica indirizzo
              </Button>
            </>
          ) : (
            <Button onClick={() => setShowModal(true)}>
              Inserisci indirizzo di spedizione
            </Button>
          )}
        </Card.Body>
      </Card>

      {/* Sezione PayPal */}
      {hasShipping ? (
        <Card className="mb-4">
          <Card.Header as="h5">Pagamento</Card.Header>
          <Card.Body>
            <PayPalScriptProvider
              options={{ "client-id": "sb", currency: "EUR" }}
            >
              <PayPalButtons
                style={{ layout: "vertical" }}
                createOrder={(data, actions) =>
                  actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: "49.99",
                        },
                      },
                    ],
                  })
                }
                onApprove={handleApprove}
                onError={(err) => {
                  console.error("Errore PayPal:", err);
                  alert("Si è verificato un errore con PayPal.");
                }}
              />
            </PayPalScriptProvider>
          </Card.Body>
        </Card>
      ) : (
        <Alert variant="warning">
          Inserisci i dati di spedizione per completare l’ordine.
        </Alert>
      )}

      {/* Modale per modifica indirizzo */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica indirizzo di spedizione</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nome completo</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={shippingAddress.fullName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Indirizzo</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={shippingAddress.address}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>CAP</Form.Label>
              <Form.Control
                type="text"
                name="zip"
                value={shippingAddress.zip}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Città</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={shippingAddress.city}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Paese</Form.Label>
              <Form.Control
                type="text"
                name="country"
                value={shippingAddress.country}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Annulla
          </Button>
          <Button variant="primary" onClick={handleSaveAddress}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Checkout;
