import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/ProductSlice";
import { Form, Button, Container } from "react-bootstrap";

const AdminForm = () => {
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    image: "",
    featured: false,
    carousel: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addProduct({
        ...product,
        price: parseFloat(product.price),
      }),
    );
    setProduct({
      name: "",
      price: "",
      description: "",
      category: "",
      image: "",
      featured: false,
      carousel: false,
    });
  };

  return (
    <Container className="py-4">
      <h3>Aggiungi un nuovo prodotto</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Prezzo</Form.Label>
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
          <Form.Label>Descrizione</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Categoria</Form.Label>
          <Form.Control
            as="textarea"
            name="category"
            value={product.category}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Immagine (URL)</Form.Label>
          <Form.Control
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
          />
        </Form.Group>
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
        <Button variant="primary" type="submit" className="mt-3">
          Aggiungi prodotto
        </Button>
      </Form>
    </Container>
  );
};

export default AdminForm;
