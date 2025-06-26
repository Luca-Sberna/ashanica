import React, { useState } from "react";
import {
  Container,
  Card,
  Image,
  Row,
  Col,
  Tab,
  Nav,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import { FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import styles from "../User/UserDetail.module.css";

const UserProfile = () => {
  const navigate = useNavigate();

  // Stato dati utente
  const [user, setUser] = useState({
    fullName: "Mario Rossi",
    email: "mario.rossi@example.com",
    address: "Via Roma 123",
    city: "Milano",
    zip: "20100",
    country: "Italia",
    profilePic: "https://i.pravatar.cc/150?img=3", // immagine profilo placeholder
  });

  // Controllo apertura modale modifica
  const [showEditModal, setShowEditModal] = useState(false);

  // Campi di modifica in modale
  const [editData, setEditData] = useState({
    fullName: user.fullName,
    email: user.email,
    password: "",
    profilePic: user.profilePic,
  });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOpenModal = () => {
    setEditData({
      fullName: user.fullName,
      email: user.email,
      password: "",
      profilePic: user.profilePic,
    });
    setShowEditModal(true);
  };

  const handleCloseModal = () => setShowEditModal(false);

  const handleSaveChanges = (e) => {
    e.preventDefault();
    // Qui potresti aggiungere validazioni e chiamate API
    setUser((prev) => ({
      ...prev,
      fullName: editData.fullName,
      email: editData.email,
      profilePic: editData.profilePic,
    }));
    setShowEditModal(false);
    alert("Dati aggiornati con successo!");
  };

  return (
    <Container className="mb-5 p-0">
      <div className="d-flex justify-content-between py-3 mx-2">
        <Button
          className={`${styles.buttonStyle}`}
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="fs-5" />
        </Button>
        <Link to={"/"}>
          <Button className={`${styles.buttonStyle}`}>
            <FaHome className="fs-5" />
          </Button>
        </Link>
      </div>
      <Card
        className={`${styles.cardProfile} p-4 shadow`}
        style={{ position: "relative" }}
      >
        <Row>
          <Col xs={12} md={9}>
            <h2 className="fw-bold ">{user.fullName}</h2>
            <div className="d-sm-flex justify-content-between">
              <p className="text-muted mb-1">{user.email}</p>
              <Link
                to={"/"}
                className={`${styles.textLink} mb-1 d-none d-sm-flex`}
              >
                cambia e-mail
              </Link>
            </div>
            <div className="d-sm-flex justify-content-between">
              <p className="text-muted m-0">
                {user.address}, {user.city}, {user.zip}, {user.country}
              </p>
              <div className="d-flex justify-content-between py-3 py-sm-0">
                <Link to={"/"} className={`${styles.textLink}`}>
                  cambia password
                </Link>
                <Link
                  to={"/"}
                  className={`${styles.textLink} d-flex d-sm-none`}
                >
                  cambia e-mail
                </Link>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            md={3}
            className="d-flex justify-content-md-end justify-content-start pt-2 align-items-start"
          >
            <Image
              src={user.profilePic}
              roundedCircle
              alt="Profile"
              style={{ width: 110, height: 110, objectFit: "cover" }}
              className="shadow-sm"
            />
          </Col>
        </Row>

        <Button
          variant="outline-dark"
          className={`${styles.modifyButton} my-3`}
          onClick={handleOpenModal}
        >
          Modifica Profilo
        </Button>

        <Tab.Container defaultActiveKey="orders" className="mt-4">
          <Nav variant="tabs" className="justify-content-center">
            <Nav.Item>
              <Nav.Link className="text-dark" eventKey="orders">
                I miei ordini
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="text-dark" eventKey="reviews">
                Le mie recensioni
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content className="mt-3">
            <Tab.Pane eventKey="orders">
              <p>Qui verranno mostrati i tuoi ordini recenti...</p>
            </Tab.Pane>
            <Tab.Pane eventKey="reviews">
              <p>Qui potrai vedere e gestire le tue recensioni...</p>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Card>

      {/* Modal per modifica dati */}
      <Modal show={showEditModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Profilo</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSaveChanges}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="editFullName">
              <Form.Label>Nome completo</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={editData.fullName}
                onChange={handleEditChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="editProfilePic">
              <Form.Label>URL immagine profilo</Form.Label>
              <Form.Control
                type="url"
                name="profilePic"
                value={editData.profilePic}
                onChange={handleEditChange}
                placeholder="Inserisci URL immagine"
              />
            </Form.Group>

            {editData.profilePic && (
              <div className="text-center mb-3">
                <Image
                  src={editData.profilePic}
                  roundedCircle
                  alt="Anteprima immagine"
                  style={{ width: 80, height: 80, objectFit: "cover" }}
                />
              </div>
            )}

            {/* Indirizzo */}
            <Form.Group className="mb-3" controlId="editAddress">
              <Form.Label>Indirizzo</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={editData.address || ""}
                onChange={handleEditChange}
                required
              />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="editCity">
                  <Form.Label>Città</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    value={editData.city || ""}
                    onChange={handleEditChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="editZip">
                  <Form.Label>CAP</Form.Label>
                  <Form.Control
                    type="text"
                    name="zip"
                    value={editData.zip || ""}
                    onChange={handleEditChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="editCountry">
                  <Form.Label>Paese</Form.Label>
                  <Form.Control
                    type="text"
                    name="country"
                    value={editData.country || ""}
                    onChange={handleEditChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Annulla
            </Button>
            <Button variant="primary" type="submit">
              Salva modifiche
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default UserProfile;
