import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";
import {
  Container,
  ListGroup,
  Image,
  Row,
  Col,
  Button,
  Card,
} from "react-bootstrap";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <Container className="py-5">
      <h2>Il tuo carrello</h2>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <p>Il carrello è vuoto</p>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item
                  key={item.id}
                  className="d-flex justify-content-between align-items-center"
                >
                  <div className="d-flex gap-3 align-items-center">
                    <Image src={item.image} width="60" height="60" rounded />
                    <div>
                      <h6>{item.name}</h6>
                      <small>Quantità: {item.quantity}</small>
                    </div>
                  </div>
                  <div>
                    € {item.price.toFixed(2)} x {item.quantity}
                    <Button
                      variant="outline-danger"
                      size="sm"
                      className="ms-3"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Rimuovi
                    </Button>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <h5>Totale</h5>
              <hr />
              <h4>€ {total.toFixed(2)}</h4>
              <Button variant="dark" className="w-100 mt-3">
                Procedi al pagamento
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
