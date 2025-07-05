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
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = mockProducts.find((p) => p.id === parseInt(id));
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

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
        <Button variant="outline-light" onClick={() => navigate(-1)}>
          <ArrowLeft className="fs-5" />
        </Button>
        <p className="text-center">Prodotto non trovato</p>
      </Container>
    );

  const images = Array.isArray(product.image) ? product.image : [product.image];

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Button variant="outline-light" onClick={() => navigate(-1)}>
          <ArrowLeft className="fs-5" />
        </Button>
        <Link to={"/"}>
          <Button variant="outline-light">
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
          <h2
            className={`${styles.textShadow} fw-bold text-light bg-transparent rounded-top m-0 p-2`}
          >
            {product.name}
          </h2>
          <p className={` text-light bg-transparent p-1`}>
            {product.description}
          </p>

          {/* Colori */}
          <div
            className={`fw-bold text-light border-bottom-0 bg-transparent rounded-top m-0 p-2 mb-3`}
          >
            <strong className={`${styles.textShadow}`}>Colore:</strong>
            <div className="d-flex gap-2 mt-2">
              {product.colors.map((color, idx) => (
                <Button
                  key={idx}
                  variant="light"
                  style={{
                    backgroundColor: color,
                    border:
                      selectedColor === color
                        ? "2px solid #8A2BE2"
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
            <strong className={`${styles.textShadow} p-2`}>Taglia:</strong>
            <div className="d-flex gap-2 mt-2 flex-wrap">
              {product.sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "light" : "outline-light"}
                  size="sm"
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
            <hr />
            <div className="d-flex justify-content-end align-items-center">
              <Badge className="bg-transparent border border-white text-light fw-bold fw-semibold mb-4">
                € {product.price}
              </Badge>
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
            variant="outline-light"
            size="lg"
            className={`mt-3`}
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
          <div
            className={` bg-transparent p-4 rounded h-100 d-flex flex-column justify-content-center`}
          >
            <h5 className={`${styles.textShadow} mb-3 fw-bold`}>
              {product.name}
            </h5>
            <p className="mb-0" style={{ lineHeight: "1.7" }}>
              {product.longDescription}
            </p>
          </div>
        </Col>

        <Col md={6}>
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
      </Row>
      <hr />
      <Row
        className="g-3 flex-nowrap overflow-auto pb-2 px-1"
        style={{ whiteSpace: "nowrap" }}
      >
        {mockProducts
          .filter((p) => p.id !== product.id)
          .slice(0, 4)
          .map((product) => (
            <Col
              key={product.id}
              xs={10}
              sm={6}
              md={3}
              lg={3}
              className="d-inline-block"
            >
              <Card className="h-100 bg-dark text-light border border-secondary">
                <Link
                  to={`/products/${product.id}`}
                  className="text-decoration-none"
                >
                  <Card.Img
                    variant="top"
                    src={
                      Array.isArray(product.image)
                        ? product.image[0]
                        : product.image
                    }
                    style={{ height: "150px", objectFit: "cover" }}
                    className="rounded-top"
                  />
                  <Card.Body>
                    <Card.Title className="fs-6 text-light text-truncate">
                      {product.name}
                    </Card.Title>
                    <Card.Text className="text-light">
                      € {product.price}
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
      </Row>

      <hr />

      {/* Sezione commenti */}
      <Row className="mt-4">
        <Col>
          <h4 className={`${styles.textShadow} mb-4`}>Commenti</h4>
          {/* Mock commenti */}
          {[1, 2].map((id) => (
            <Card key={id} className="border bg-transparent mb-3 shadow-sm">
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <strong className={`${styles.textShadow} text-light`}>
                    Utente{id}
                  </strong>
                  <Badge bg="dark">★★★★★</Badge>
                </div>
                <p className="mt-2 mb-0 text-light">
                  Prodotto eccellente, qualità top. Consigliato!
                </p>
              </Card.Body>
            </Card>
          ))}
          <hr className="p-0" />

          <hr className="p-0" />

          {user ? (
            <Form className="mt-4">
              <Form.Group controlId="comment">
                <Form.Label className="text-light">
                  Lascia un commento
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Scrivi qualcosa..."
                  className="bg-dark text-white "
                />
              </Form.Group>
              <Button variant="outline-light" className={`mt-3`}>
                Invia
              </Button>
            </Form>
          ) : (
            <div className="mt-4 bg-dark text-light p-3 rounded border border-warning">
              Per lasciare un commento,{" "}
              <Link to="/login" className="text-warning">
                accedi
              </Link>{" "}
              o{" "}
              <Link to="/register" className="text-warning">
                registrati
              </Link>
              .
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
