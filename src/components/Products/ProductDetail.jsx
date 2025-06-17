import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import mockProducts from "../../components/Mocks/MockProducts.jsx";

const ProductDetail = () => {
  const { id } = useParams();
  const product = mockProducts.find((p) => p.id === parseInt(id));

  if (!product)
    return (
      <Container>
        <Link
          to={"/"}
          className="menu-icon-link text-dark text-decoration-none align-items-center justify-content-end d-none d-md-flex pt-4"
        >
          <p className="m-0 pe-2">torna al menù</p>
          <FaHome className="fs-5 menu-icon" />
        </Link>
        <p className="text-center">Prodotto non trovato</p>
      </Container>
    );

  return (
    <Container className="py-4">
      <Row>
        <Col md={6}>
          <Image src={product.image} fluid rounded />
        </Col>
        <Col md={6}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h4>€ {product.price}</h4>
          <Button variant="primary">Aggiungi al carrello</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
