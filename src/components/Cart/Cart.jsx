import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  decreaseQuantity,
  addToCart,
} from "../../redux/cartSlice";
import styles from "./Cart.module.css";
import {
  Container,
  ListGroup,
  Image,
  Row,
  Col,
  Button,
  Card,
} from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <Container className={styles.cart}>
      <Link
        to={"/"}
        className="menu-icon-link text-dark text-decoration-none align-items-center justify-content-end d-none d-md-flex pt-4"
      >
        <p className="m-0 pe-2">torna al menù</p>
        <FaHome className="fs-5 menu-icon" />
      </Link>
      <h2 className="py-4">Il tuo carrello</h2>
      <Row>
        <Col className="pb-4" md={8}>
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
                      <Button
                        variant="outline-danger"
                        size="sm"
                        className="mx-3"
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                      >
                        -
                      </Button>
                      <small>Quantità: {item.quantity}</small>
                      <Button
                        variant="outline-success"
                        size="sm"
                        className="mx-3"
                        onClick={() => dispatch(addToCart(item))}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <div className="d-flex gap-1">
                    € {item.price.toFixed(2)} x {item.quantity}
                    <Button
                      variant="outline-danger"
                      size="sm"
                      className=""
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
              <div className="d-flex justify-content-between align-items-center">
                <h4>€ {total.toFixed(2)}</h4>
                <small>esclusa IVA</small>
              </div>
              <Link to={"/checkout"}>
                <Button variant="dark" className="w-100 mt-3">
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
