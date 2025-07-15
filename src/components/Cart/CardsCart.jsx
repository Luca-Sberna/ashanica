import React from "react";
import { Badge, Button, Col, Image, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeFromCart,
  decreaseQuantity,
  addToCart,
} from "../../redux/cartSlice";

const CardsCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <Col md={12} className="mb-4">
      {cartItems.length === 0 ? (
        <p>Il carrello è vuoto</p>
      ) : (
        <ListGroup variant="flush">
          {cartItems.map((item) => (
            <ListGroup.Item
              key={item.id}
              className="d-flex bg-transparent text-light flex-column flex-md-row align-items-center justify-content-between gap-3"
            >
              {/* Sinistra: immagine e info */}
              <div className="d-flex flex-sm-row align-items-center gap-3 text-center text-sm-start w-100 w-md-75 position-relative">
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
                    <h6 className="mb-3 text-light">{item.name}</h6>
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

              <div className="d-flex justify-content-center align-items-center gap-3">
                {item.color && (
                  <div
                    className="position-absolute"
                    style={{
                      backgroundColor: item.color,
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      bottom: "4px",
                      left: "8px",
                      border: "1px solid white",
                      boxShadow: "0 0 3px rgba(0,0,0,0.4)",
                    }}
                  ></div>
                )}
                <div className="d-flex align-items-center flex-nowrap">
                  {item.size && item.size.length > 0 ? (
                    <small className="text-nowrap">{item.size}</small>
                  ) : (
                    "Taglia Unica"
                  )}
                </div>
              </div>

              {/* Destra: prezzo + rimuovi */}
              <div className="d-flex justify-content-end flex-md-column align-items-center align-items-md-end text-end w-100 w-md-auto ms-auto">
                <div>
                  <Badge
                    bg="outline-light"
                    className="me-1 border border-light"
                  >
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
  );
};

export default CardsCart;
