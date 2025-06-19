import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Carousel,
  Badge,
  Form,
  Card,
} from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { ArrowLeft } from "react-bootstrap-icons";
import mockProducts from "../../components/Mocks/MockProducts.jsx";
import { useState, useEffect } from "react";
import { addToCart } from "../../redux/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = mockProducts.find((p) => p.id === parseInt(id));
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (product.colors?.length === 1) {
      setSelectedColor(product.colors[0]);
    }
    if (product.sizes?.length === 1) {
      setSelectedSize(product.sizes[0]);
    }
  }, [product]);

  if (!product)
    return (
      <Container className="py-4">
        <Link
          to={navigate(-1)}
          className="text-dark text-decoration-none d-flex align-items-center mb-3"
        >
          <ArrowLeft className="me-2" /> Torna indietro
        </Link>
        <p className="text-center">Prodotto non trovato</p>
      </Container>
    );

  const images = Array.isArray(product.image) ? product.image : [product.image];

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

      <Row className="gy-4">
        <Col md={6}>
          <Carousel interval={null} className="shadow-sm rounded">
            {images.map((img, idx) => (
              <Carousel.Item key={idx}>
                <Image
                  src={img}
                  alt={`Product image ${idx + 1}`}
                  fluid
                  rounded
                  className="w-100"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>

        <Col md={6}>
          <h2 className="fw-bold mb-3">{product.name}</h2>
          <p className="text-muted">{product.description}</p>
          <Badge className="bg-dark fw-semibold mb-4">€ {product.price}</Badge>

          {/* Colori */}
          <div className="mb-3">
            <strong>Colore:</strong>
            <div className="d-flex gap-2 mt-2">
              {product.colors.map((color, idx) => (
                <Button
                  key={idx}
                  variant="light"
                  style={{
                    backgroundColor: color,
                    border:
                      selectedColor === color
                        ? "2px solid #000"
                        : "1px solid #ccc",
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                  }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          {/* Taglie */}
          <div className="mb-3">
            <strong>Taglia:</strong>
            <div className="d-flex gap-2 mt-2 flex-wrap">
              {product.sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "dark" : "outline-dark"}
                  size="sm"
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          <Button
            onClick={() => {
              if (product.colors?.length > 1 && !selectedColor) {
                alert("Seleziona un colore prima di aggiungere al carrello.");
                return;
              }
              if (product.sizes?.length > 1 && !selectedSize) {
                alert("Seleziona una taglia prima di aggiungere al carrello.");
                return;
              }

              dispatch(
                addToCart({
                  id: product.id,
                  name: product.name,
                  image: product.image,
                  price: product.price,
                  color: selectedColor,
                  size: selectedSize,
                })
              );
            }}
            variant="outline-dark"
            size="lg"
            className="mt-3"
          >
            Aggiungi al carrello
          </Button>
        </Col>
      </Row>
      <Row className="pt-5">
        <Col
          md={6}
          className="mb-3 mb-md-0 d-flex justify-content-center align-items-start"
        >
          <Image
            src={product.image[1]}
            fluid
            rounded
            style={{
              maxHeight: "400px",
              objectFit: "cover",
              width: "100%",
            }}
          />
        </Col>

        <Col md={6}>
          <div className="bg-light p-4 rounded shadow-sm h-100 d-flex flex-column justify-content-center">
            <h5 className="mb-3 fw-bold">{product.name}</h5>
            <p className="mb-0" style={{ lineHeight: "1.7" }}>
              {product.longDescription}
            </p>
          </div>
        </Col>
      </Row>

      <hr />
      {/* Sezione commenti */}
      <Row className="mt-5">
        <Col>
          <h4 className="mb-4">Commenti</h4>
          {/* Mock commenti */}
          {[1, 2].map((id) => (
            <Card key={id} className="mb-3 shadow-sm">
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <strong>Utente{id}</strong>
                  <Badge bg="secondary">★★★★★</Badge>
                </div>
                <p className="mt-2 mb-0">
                  Prodotto eccellente, qualità top. Consigliato!
                </p>
              </Card.Body>
            </Card>
          ))}
          <hr className="p-0" />
          <Form className="mt-4">
            <Form.Group controlId="comment">
              <Form.Label>Lascia un commento</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Scrivi qualcosa..."
              />
            </Form.Group>
            <Button variant="dark" className="mt-3">
              Invia
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
