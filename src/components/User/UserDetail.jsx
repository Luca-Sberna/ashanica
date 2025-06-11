import React, { useState } from "react";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";

const UserDetail = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    zip: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Dati salvati:", formData);
    alert("Dati salvati con successo");
  };

  return (
    <Container className="mt-5">
      <Card>
        <Card.Header as="h4">Dati utente e indirizzo di spedizione</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSave}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="fullName">
                <Form.Label>Nome completo</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="address">
                <Form.Label>Indirizzo</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="city">
                <Form.Label>Città</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="zip">
                <Form.Label>CAP</Form.Label>
                <Form.Control
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="country">
                <Form.Label>Paese</Form.Label>
                <Form.Control
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Row>

            <Button variant="dark" type="submit">
              Salva dati
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserDetail;
