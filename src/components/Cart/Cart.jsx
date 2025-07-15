import { useSelector } from "react-redux";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { ArrowLeft } from "react-bootstrap-icons";
import styles from "./Cart.module.css";
import CardsCart from "./CardsCart";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Button variant="outline-light" onClick={() => navigate(-1)}>
          <ArrowLeft className="fs-5" />
        </Button>
        <Link to={"/"}>
          <Button variant="outline-light">
            <FaHome className="fs-5" />
          </Button>
        </Link>
      </div>

      <h2 className={`${styles.textShadow} mb-4`}>Il tuo carrello</h2>
      <Row>
        <CardsCart />

        {/* Totale */}
        <Col>
          <Card className="shadow-sm bg-transparent text-light">
            <Card.Body>
              <h5>Totale</h5>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <h4>€ {total.toFixed(2)}</h4>
                <small className="text-light">esclusa IVA</small>
              </div>
              <Link to="/checkout">
                <Button variant="outline-light" className={` w-100 mt-3`}>
                  Procedi al pagamento
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
