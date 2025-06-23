import { useState } from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import AdminForm from "./AdminForm";
import { FaHome } from "react-icons/fa";
import ProductManager from "./ProductManager";
import { Link } from "react-router-dom";
import SellHistory from "./SellHistory";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("prodotti");

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

      {activeTab === "prodotti" && <ProductManager />}

      {activeTab === "aggiungi" && <AdminForm />}

      {activeTab === "vendite" && <SellHistory />}
    </Container>
  );
};

export default AdminDashboard;
