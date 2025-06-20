import { Card, Button, Badge } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Card style={{ width: "18rem" }} className="m-2 shadow">
      <Link to={`/products/${product.id}`}>
        <Card.Img
          style={{ height: "200px", objectFit: "cover" }}
          variant="top"
          src={product.image[0]}
        />
      </Link>
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
            as={Link}
            to={`/products/${product.id}`}
            variant="outline-warning"
          >
            Visualizza
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
