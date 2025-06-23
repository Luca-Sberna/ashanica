import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeProduct,
  toggleFeatured,
  toggleCarousel,
} from "../../redux/ProductSlice";
import { Table, Button, Image, Modal, Form } from "react-bootstrap";

const ProductManager = () => {
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [editProduct, setEditProduct] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    longDescription: "",
    images: [],
    sizes: [],
  });

  const handleImageRemove = (imgToRemove) => {
    setProduct((prev) => ({
      ...prev,
      images: prev.images.filter((img) => img !== imgToRemove),
    }));
  };

  const handleFileUpload = async (files) => {
    const previewUrls = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setProduct((prev) => ({
      ...prev,
      images: previewUrls,
    }));
  };

  useEffect(() => {
    if (editProduct) {
      setProduct({
        ...editProduct,
        images: editProduct.image || [],
      });
    }
  }, [editProduct]);

  return (
    <>
      <h3>Gestione Prodotti</h3>
      {products.length === 0 ? (
        <p>Nessun prodotto disponibile.</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Immagine</th>
              <th>Nome</th>
              <th>Prezzo</th>
              <th>Descrizione</th>
              <th>Descrizione Approfondita</th>
              <th>In Evidenza</th>
              <th>Carosello</th>
              <th>Azioni</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => (
              <tr key={prod.id}>
                <td>
                  <Image
                    src={prod.image[0]}
                    alt={prod.name}
                    width={60}
                    height={60}
                    rounded
                  />
                </td>
                <td>{prod.name}</td>
                <td>€ {prod.price.toFixed(2)}</td>
                <td
                  style={{ cursor: "pointer", color: "#0d6efd" }}
                  onClick={() => {
                    setModalContent(prod.description);
                    setShowModal(true);
                  }}
                >
                  {prod.description.length > 50
                    ? prod.description.substring(0, 50) + "..."
                    : prod.description}
                </td>
                <td
                  style={{ cursor: "pointer", color: "#0d6efd" }}
                  onClick={() => {
                    setModalContent(prod.longDescription);
                    setShowModal(true);
                  }}
                >
                  {prod.longDescription.length > 50
                    ? prod.longDescription.substring(0, 50) + "..."
                    : prod.longDescription}
                </td>
                <td>
                  <Button
                    variant={prod.featured ? "success" : "outline-secondary"}
                    size="sm"
                    onClick={() => dispatch(toggleFeatured(prod.id))}
                  >
                    {prod.featured ? "✓" : "No"}
                  </Button>
                </td>
                <td>
                  <Button
                    variant={prod.carousel ? "primary" : "outline-secondary"}
                    size="sm"
                    onClick={() => dispatch(toggleCarousel(prod.id))}
                  >
                    {prod.carousel ? "✓" : "No"}
                  </Button>
                </td>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    className="mb-2"
                    onClick={() => {
                      setEditProduct(prod);
                      setShowEditModal(true);
                    }}
                  >
                    Modifica
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => dispatch(removeProduct(prod.id))}
                  >
                    Rimuovi
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Descrizione Completa</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent}</Modal.Body>
      </Modal>

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Prodotto</Modal.Title>
        </Modal.Header>
        {editProduct && (
          <Modal.Body>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const updatedProduct = {
                  ...editProduct,
                  name: e.target.name.value,
                  price: parseFloat(e.target.price.value),
                  description: e.target.description.value,
                  longDescription: e.target.longDescription.value,
                  image: [e.target.image.value],
                };
                dispatch({
                  type: "products/updateProduct",
                  payload: updatedProduct,
                });
                setShowEditModal(false);
              }}
            >
              <Form.Group className="mb-4">
                <h5>
                  <Form.Label>Carica Immagini del Prodotto</Form.Label>
                </h5>
                <Form.Control
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => handleFileUpload(e.target.files)}
                />
                <Form.Text className="text-muted">
                  Puoi selezionare più immagini. Anteprime qui sotto.
                </Form.Text>
                <div className="d-flex flex-wrap gap-3 mt-3">
                  {product.images.map((imgUrl, idx) => (
                    <div
                      key={idx}
                      className="position-relative"
                      style={{
                        width: "120px",
                        height: "120px",
                        borderRadius: "10px",
                        overflow: "hidden",
                        border: "1px solid #ccc",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                      }}
                    >
                      <img
                        src={imgUrl}
                        alt={`img-${idx}`}
                        className="w-100 h-100 object-fit-cover"
                      />
                      <Button
                        size="sm"
                        variant="danger"
                        className="position-absolute"
                        style={{
                          top: "5px",
                          right: "5px",
                          padding: "0.25rem 0.45rem",
                          borderRadius: "50%",
                          fontSize: "0.8rem",
                          lineHeight: "1",
                        }}
                        onClick={() => handleImageRemove(imgUrl)}
                      >
                        &times;
                      </Button>
                    </div>
                  ))}
                </div>
              </Form.Group>
              <div className="mb-3">
                <label className="form-label">Nome</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={editProduct.name}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Prezzo</label>
                <input
                  type="number"
                  step="0.01"
                  name="price"
                  defaultValue={editProduct.price}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Descrizione</label>
                <textarea
                  name="description"
                  defaultValue={editProduct.description}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Descrizione lunga</label>
                <textarea
                  name="longDescription"
                  defaultValue={editProduct.longDescription}
                  className="form-control"
                />
              </div>
              <Button type="submit" variant="success">
                Salva Modifiche
              </Button>
            </form>
          </Modal.Body>
        )}
      </Modal>
    </>
  );
};

export default ProductManager;
