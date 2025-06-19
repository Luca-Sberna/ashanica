import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/ProductSlice";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const AdminForm = () => {
  const dispatch = useDispatch();
  const [formError, setFormError] = useState("");

  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    longDescription: "",
    category: "",
    subcategory: "",
    images: [],
    sizes: [],
    colors: [],
    featured: false,
    carousel: false,
    isOnSale: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSizesChange = (size) => {
    setProduct((prev) => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter((s) => s !== size)
        : [...prev.sizes, size],
    }));
  };

  const handleColorAdd = (e) => {
    const color = e.target.value;
    if (color && !product.colors.includes(color)) {
      setProduct((prev) => ({
        ...prev,
        colors: [...prev.colors, color],
      }));
    }
  };

  const handleColorRemove = (colorToRemove) => {
    setProduct((prev) => ({
      ...prev,
      colors: prev.colors.filter((c) => c !== colorToRemove),
    }));
  };

  const handleImageRemove = (imgToRemove) => {
    setProduct((prev) => ({
      ...prev,
      images: prev.images.filter((img) => img !== imgToRemove),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (product.sizes.length === 0) {
      setFormError("Seleziona almeno una taglia.");
      return;
    }

    if (product.colors.length === 0) {
      setFormError("Seleziona almeno un colore.");
      return;
    }

    if (product.images.length === 0) {
      setFormError("Carica almeno un'immagine.");
      return;
    }

    setFormError(""); // Nessun errore

    dispatch(
      addProduct({
        ...product,
        price: parseFloat(product.price),
      })
    );

    setProduct({
      name: "",
      price: "",
      description: "",
      longDescription: "",
      category: "",
      subcategory: "",
      images: [],
      sizes: [],
      colors: [],
      featured: false,
      carousel: false,
      isOnSale: false,
    });
  };

  const handleFileUpload = async (files) => {
    const previewUrls = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );

    setProduct((prev) => ({
      ...prev,
      images: [...prev.images, ...previewUrls],
    }));

    /* const urls = [];
    for (let file of files) {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("http://localhost:8080/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      urls.push(data.url);
    }

    setProduct((prev) => ({
      ...prev,
      images: [...prev.images, ...urls],
    })); */
  };

  return (
    <Container className="py-4">
      <h3 className="pb-3">Aggiungi un nuovo prodotto</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <h5>
            <Form.Label>Nome</Form.Label>
          </h5>
          <Form.Control
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <h5>
            <Form.Label>Prezzo</Form.Label>
          </h5>
          <Form.Control
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            step="0.01"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <h5>
            <Form.Label>Descrizione</Form.Label>
          </h5>
          <Form.Control
            as="textarea"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <h5>
            <Form.Label>Descrizione approfondita</Form.Label>
          </h5>
          <Form.Control
            as="textarea"
            name="longDescription"
            value={product.longDescription}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <h5>
            <Form.Label>Categoria</Form.Label>
          </h5>
          <Form.Control
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <h5>
            <Form.Label>Tipo di materiale</Form.Label>
          </h5>
          <Form.Control
            type="text"
            name="subcategory"
            value={product.subcategory}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <h5>
            <Form.Label>Seleziona taglie disponibili</Form.Label>
          </h5>
          <div>
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <Form.Check
                inline
                key={size}
                label={size}
                checked={product.sizes.includes(size)}
                onChange={() => handleSizesChange(size)}
              />
            ))}
          </div>
        </Form.Group>

        <Form.Group className="mb-3">
          <h5>
            <Form.Label>Seleziona colori disponibili</Form.Label>
          </h5>

          <Row className="d-flex justify-content-between">
            {/* Selettore colore */}
            <Col className="d-flex align-items-center gap-2 mb-3">
              <Form.Control
                type="color"
                onChange={handleColorAdd}
                style={{ width: "3rem", height: "3rem", padding: 0 }}
              />
              <span>Aggiungi</span>
            </Col>

            {/* Lista dei colori aggiunti */}
            <Col className="d-flex flex-wrap gap-3">
              {product.colors.map((c, idx) => (
                <div key={idx} style={{ position: "relative" }}>
                  <div
                    style={{
                      backgroundColor: c,
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      border: "1px solid #ccc",
                    }}
                  />
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => handleColorRemove(c)}
                    style={{
                      position: "absolute",
                      top: "-8px",
                      right: "-8px",
                      borderRadius: "50%",
                      lineHeight: "1",
                    }}
                  >
                    &times;
                  </Button>
                </div>
              ))}
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3">
          <h5>
            <Form.Label>Seleziona immagini disponibili</Form.Label>
          </h5>
          <Form.Control
            type="file"
            multiple
            onChange={(e) => handleFileUpload(e.target.files)}
          />
        </Form.Group>

        {product.images.map((imgUrl, idx) => (
          <div
            key={idx}
            style={{
              position: "relative",
              width: "120px",
              height: "120px",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 0 4px rgba(0,0,0,0.2)",
            }}
          >
            <img
              src={imgUrl}
              alt={`immagine-${idx}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <Button
              size="sm"
              variant="danger"
              onClick={() => handleImageRemove(imgUrl)}
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                borderRadius: "50%",
                lineHeight: "1",
              }}
            >
              &times;
            </Button>
          </div>
        ))}

        <Form.Check
          type="checkbox"
          name="featured"
          label="Prodotto in evidenza"
          checked={product.featured}
          onChange={handleChange}
        />

        <Form.Check
          type="checkbox"
          name="carousel"
          label="Inserisci nel carosello"
          checked={product.carousel}
          onChange={handleChange}
        />

        <Form.Check
          type="checkbox"
          name="isOnSale"
          label="Prodotto in sconto"
          checked={product.isOnSale}
          onChange={handleChange}
        />
        {formError && (
          <div className="text-danger my-2">
            <strong>{formError}</strong>
          </div>
        )}

        <Button variant="primary" type="submit" className="mt-3">
          Aggiungi prodotto
        </Button>
      </Form>
    </Container>
  );
};

export default AdminForm;
