import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  Form,
  Alert,
} from "react-bootstrap";

// Mock dati utente (simulazione)
const mockUser = {
  shippingAddress: {
    fullName: "Mario Rossi",
    address: "Via Roma 10",
    city: "Milano",
    zip: "20100",
    country: "Italia",
  },
  paymentMethods: [
    {
      brand: "Visa",
      last4: "4242",
      exp: "12/26",
    },
  ],
};

const Checkout = () => {
  const navigate = useNavigate();
  const hasShipping = !!mockUser.shippingAddress;
  const hasPayment = mockUser.paymentMethods.length > 0;

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
                <strong>{mockUser.shippingAddress.fullName}</strong>
              </p>
              <p>{mockUser.shippingAddress.address}</p>
              <p>
                {mockUser.shippingAddress.zip}, {mockUser.shippingAddress.city}
              </p>
              <p>{mockUser.shippingAddress.country}</p>
              <Button
                variant="outline-secondary"
                onClick={() => navigate("/account/details")}
              >
                Modifica indirizzo
              </Button>
            </>
          ) : (
            <Button onClick={() => navigate("/account/details")}>
              Inserisci indirizzo di spedizione
            </Button>
          )}
        </Card.Body>
      </Card>

      {/* Sezione Metodo di Pagamento */}
      <Card className="mb-4">
        <Card.Header as="h5">Metodo di pagamento</Card.Header>
        <Card.Body>
          {hasPayment ? (
            <Form>
              <ListGroup variant="flush">
                {mockUser.paymentMethods.map((pm, i) => (
                  <ListGroup.Item key={i}>
                    <Form.Check
                      type="radio"
                      name="payment"
                      defaultChecked={i === 0}
                      label={`${pm.brand} **** ${pm.last4} — Scad. ${pm.exp}`}
                    />
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Form>
          ) : (
            <Button onClick={() => navigate("/account/payment-methods")}>
              Aggiungi metodo di pagamento
            </Button>
          )}
        </Card.Body>
      </Card>

      {/* Conferma Ordine */}
      {hasShipping && hasPayment ? (
        <Button variant="dark" size="lg" className="w-100">
          Conferma ordine
        </Button>
      ) : (
        <Alert variant="warning">
          Completa tutti i dati per procedere con il pagamento.
        </Alert>
      )}
    </Container>
  );
};

export default Checkout;
