import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  decreaseQuantity,
  addToCart,
} from "../../redux/cartSlice";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Image,
  Button,
  Card,
  Badge,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { ArrowLeft } from "react-bootstrap-icons";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Button variant="light" onClick={() => navigate(-1)}>
          <ArrowLeft className="fs-5" />
        </Button>
        <Link to={"/"}>
          <Button variant="light">
            <FaHome className="fs-5" />
          </Button>
        </Link>
      </div>

      <h2 className="mb-4">Il tuo carrello</h2>
      <Row>
        <Col md={12} className="mb-4">
          {cartItems.length === 0 ? (
            <p>Il carrello è vuoto</p>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item
                  key={item.id}
                  className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3"
                >
                  {/* Sinistra: immagine e info */}
                  <div className="d-flex flex-sm-row align-items-center gap-3 text-center text-sm-start w-100 w-md-75">
                    <Link to={`/products/${item.id}`}>
                      <Image
                        src={item.image[0]}
                        rounded
                        width="80"
                        height="80"
                        className="flex-shrink-0"
                      />
                    </Link>
                    <div>
                      <Link
                        className="text-decoration-none text-dark"
                        to={`/products/${item.id}`}
                      >
                        <h6 className="mb-3">{item.name}</h6>
                      </Link>
                      <div className="d-flex align-items-center justify-content-center justify-content-sm-start gap-2 flex-wrap">
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => dispatch(decreaseQuantity(item))}
                        >
                          -
                        </Button>
                        <span>Quantità: {item.quantity}</span>
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

                  <div className="d-flex justify-content-center align-items-center gap-4">
                    {item.color && (
                      <div className="d-flex align-items-center gap-2">
                        <Button
                          variant="light"
                          style={{
                            backgroundColor: item.color,
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            border: "1px solid #ccc",
                          }}
                        />
                      </div>
                    )}

                    <strong>{item.size}</strong>
                  </div>

                  {/* Destra: prezzo + rimuovi */}
                  <div className="d-flex justify-content-end flex-md-column align-items-center align-items-md-end text-end w-100 w-md-auto ms-auto">
                    <div>
                      <Badge bg="dark" className="me-1">
                        €{" "}
                        {typeof item.price === "number"
                          ? `€ ${item.price.toFixed(2)}`
                          : "Prezzo non disponibile"}
                      </Badge>
                      <span className="px-1">x {item.quantity}</span>
                    </div>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      className="mt-md-3"
                      onClick={() => dispatch(removeFromCart(item))}
                    >
                      Rimuovi
                    </Button>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>

        {/* Totale */}
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <h5>Totale</h5>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <h4>€ {total.toFixed(2)}</h4>
                <small className="text-muted">esclusa IVA</small>
              </div>
              <Link to="/checkout">
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
