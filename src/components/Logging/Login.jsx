import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Form,
  Button,
  Alert,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/userSlice";
import { FaHome } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  useDispatch(
    loginSuccess({
      name: "Admin",
      email: "admin@site.com",
      isAdmin: true,
    }),
  );

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simulazione login (da sostituire con chiamata a BE)
    const loggedIn = true;

    if (loggedIn) {
      navigate(from, { replace: true });
    } else {
      // gestire errore
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={5}>
          <Card className="p-4 shadow">
            <Link
              to={"/"}
              className="menu-icon-link text-dark text-decoration-none align-items-center justify-content-end d-none d-md-flex"
            >
              <FaHome className="fs-5 menu-icon" />
            </Link>
            <Card.Body>
              <h3 className="mb-4 text-center">Accedi al tuo account</h3>

              {location.state?.from?.pathname === "/checkout" && (
                <Alert variant="info">
                  Devi effettuare l’accesso per completare l’acquisto.
                </Alert>
              )}

              <Form onSubmit={handleLogin}>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Inserisci la tua email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Inserisci la tua password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="dark" type="submit" className="w-100">
                  Accedi
                </Button>
              </Form>
              <div className="d-flex justify-content-between pt-2">
                <p>Non hai un account?</p>
                <Link to={"/register"}>Registrati</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
