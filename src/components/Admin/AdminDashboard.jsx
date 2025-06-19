import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeProduct,
  setProducts,
  toggleFeatured,
  toggleCarousel,
} from "../../redux/ProductSlice";
import {
  Table,
  Button,
  Image,
  Container,
  Tabs,
  Tab,
  Modal,
} from "react-bootstrap";
import AdminForm from "./AdminForm";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import mockProducts from "../Mocks/MockProducts";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("prodotti");
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  useEffect(() => {
    dispatch(setProducts(mockProducts));
  }, [dispatch]);

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Tabs
          id="admin-tabs"
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k)}
          className="mb-0"
          justify
          variant="tabs"
        >
          <Tab eventKey="prodotti" title="Prodotti" />
          <Tab eventKey="aggiungi" title="Aggiungi" />
          <Tab eventKey="vendite" title="Vendite" />
        </Tabs>
        <Link
          to={"/"}
          className="menu-icon-link text-dark text-decoration-none align-items-center d-flex"
        >
          <p className="m-0 pe-2"></p>
          <FaHome className="fs-5 menu-icon" />
        </Link>
      </div>

      {activeTab === "prodotti" && (
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
                        variant={
                          prod.featured ? "success" : "outline-secondary"
                        }
                        size="sm"
                        onClick={() => dispatch(toggleFeatured(prod.id))}
                      >
                        {prod.featured ? "✓" : "No"}
                      </Button>
                    </td>

                    <td>
                      <Button
                        variant={
                          prod.carousel ? "primary" : "outline-secondary"
                        }
                        size="sm"
                        onClick={() => dispatch(toggleCarousel(prod.id))}
                      >
                        {prod.carousel ? "✓" : "No"}
                      </Button>
                    </td>
                    <td>
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
        </>
      )}

      {activeTab === "aggiungi" && (
        <>
          <AdminForm />
        </>
      )}

      {activeTab === "vendite" && (
        <>
          <h3>Storico Vendite</h3>
          <p>📊 (dati delle vendite)</p>
        </>
      )}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Descrizione Completa</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent}</Modal.Body>
      </Modal>
    </Container>
  );
};

export default AdminDashboard;
