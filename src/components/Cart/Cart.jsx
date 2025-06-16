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
                  className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3"
                >
                  <div className="d-flex flex-column flex-sm-row align-items-center gap-3 text-center text-sm-start w-100 w-md-75">
                    <Image
                      src={item.image}
                      width="140"
                      height="80"
                      rounded
                      className="flex-shrink-0"
                    />
                    <div className="flex-grow-1">
                      <h6 className="mb-1">{item.name}</h6>
                      <div className="d-flex justify-content-center justify-content-sm-start align-items-center gap-2 flex-wrap">
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                        >
                          -
                        </Button>
                        <small className="px-1">
                          Quantità: {item.quantity}
                        </small>
                        <Button
                          variant="outline-success"
                          size="sm"
                          onClick={() => dispatch(addToCart(item))}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex flex-column align-items-center align-items-md-end text-center text-md-end mt-2 mt-md-0">
                    <span>
                      € {item.price.toFixed(2)} x {item.quantity}
                    </span>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      className="mt-1"
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
