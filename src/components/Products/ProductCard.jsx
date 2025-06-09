import { Card, Button, Badge } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Card style={{ width: "18rem" }} className="m-2">
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <h5>
            <Badge bg="primary">{product.price} €</Badge>
          </h5>
          <Button
            onClick={() => dispatch(addToCart(product))}
            variant="success"
          >
            Aggiungi
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
