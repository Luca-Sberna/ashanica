import React from "react";
import {
  Container,
  Card,
  Form,
  Button,
  Row,
  Col,
  Alert,
} from "react-bootstrap";

const PaymentMethods = () => {
  const handleSave = (e) => {
    e.preventDefault();
    alert("Metodo di pagamento salvato (mock)");
  };

  return (
    <Container className="mt-5">
      <Card>
        <Card.Header as="h4">Metodi di pagamento</Card.Header>
        <Card.Body>
          <Alert variant="info">
            UI mock — qui puoi integrare Stripe Elements o altri provider.
          </Alert>
          <Form onSubmit={handleSave}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="cardNumber">
                <Form.Label>Numero Carta</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="expiry">
                <Form.Label>Scadenza (MM/AA)</Form.Label>
                <Form.Control type="text" placeholder="12/26" required />
              </Form.Group>
              <Form.Group as={Col} controlId="cvc">
                <Form.Label>CVC</Form.Label>
                <Form.Control type="text" placeholder="123" required />
              </Form.Group>
            </Row>
            <Button variant="dark" type="submit">
              Salva metodo di pagamento
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PaymentMethods;
