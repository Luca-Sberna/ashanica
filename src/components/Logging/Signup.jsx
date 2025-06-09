import React from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

const Signup = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Card style={{ width: "100%", maxWidth: "400px" }} className="shadow p-4">
        <h3 className="text-center mb-4">Registrati</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Inserisci il tuo nome" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Inserisci la tua email" />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Crea una password" />
          </Form.Group>

          <Button variant="dark" type="submit" className="w-100">
            Registrati
          </Button>
        </Form>
        <div className="text-center mt-3">
          <small>
            Hai già un account? <a href="/login">Accedi</a>
          </small>
        </div>
      </Card>
    </Container>
  );
};

export default Signup;
