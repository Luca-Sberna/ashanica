import { Card, Button, Badge } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Card style={{ width: "18rem" }} className="m-2 shadow">
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Link
          to={`/products/${product.id}`}
          className="mt-auto text-decoration-none text-dark link-product"
        >
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Card.Text>{product.description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <h5>
            <Badge bg="dark" className="shadow">
              {product.price} €
            </Badge>
          </h5>
          <Button
            className="shadow"
            onClick={() => dispatch(addToCart(product))}
            variant="warning"
          >
            Aggiungi
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
