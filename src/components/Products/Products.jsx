import { useState } from "react";
import ProductCard from "../Products/ProductCard";
import Header from "../Header/Header";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  Card,
  Offcanvas,
} from "react-bootstrap";
import { Filter } from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";
import mockProducts from "../../components/Mocks/MockProducts.jsx";
import styles from "./Products.module.css"; // Import del CSS module

const categoriesWithSub = {
  Tutti: [],
  Borsa: ["Velluto", "Pelle", "Clutch", "Raso"],
  Top: ["Pelle"],
};

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tutti");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [onSale, setOnSale] = useState(false);
  const [sortOrder, setSortOrder] = useState("");
  const location = useLocation();
  const searchQuery = location.state?.searchQuery || "";

  const toggleFilters = () => setShowFilters(!showFilters);

  let filteredProducts = mockProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === "Tutti" || product.category === selectedCategory;
    const matchesSubcategory =
      !selectedSubcategory || product.subcategory === selectedSubcategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase() || searchQuery.toLowerCase());
    const matchesPrice =
      (!minPrice || product.price >= parseFloat(minPrice)) &&
      (!maxPrice || product.price <= parseFloat(maxPrice));
    const matchesSale = !onSale || product.price < 100;

    return (
      matchesCategory &&
      matchesSubcategory &&
      matchesSearch &&
      matchesPrice &&
      matchesSale
    );
  });

  if (sortOrder === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOrder === "name-asc") {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOrder === "name-desc") {
    filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <Container fluid className={`${styles.productsContainer} py-4`}>
      <Header />
      {/* Categorie */}
      <div
        className={`${styles.categoryButtons} d-flex flex-wrap justify-content-center gap-2 mb-2`}
      >
        {Object.keys(categoriesWithSub).map((cat) => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? "light" : "outline-light"}
            className={styles.categoryButton}
            onClick={() => {
              setSelectedCategory(cat);
              setSelectedSubcategory("");
            }}
          >
            {cat}
          </Button>
        ))}
        <Button
          className={`${styles.filterButton} d-md-none`}
          variant="primary"
          onClick={toggleFilters}
        >
          <Filter size={20} />
        </Button>
      </div>

      {/* Sottocategorie */}
      {selectedCategory !== "Tutti" &&
        categoriesWithSub[selectedCategory].length > 0 && (
          <div
            className={`${styles.subcategoryButtons} d-flex flex-wrap justify-content-center gap-2 mb-4`}
          >
            <Button
              variant={!selectedSubcategory ? "light" : "outline-light"}
              className={styles.subcategoryButton}
              onClick={() => setSelectedSubcategory("")}
            >
              Tutti
            </Button>
            {categoriesWithSub[selectedCategory].map((sub) => (
              <Button
                key={sub}
                variant={
                  selectedSubcategory === sub ? "light" : "outline-light"
                }
                className={styles.subcategoryButton}
                onClick={() => setSelectedSubcategory(sub)}
              >
                {sub}
              </Button>
            ))}
          </div>
        )}

      <Row>
        {/* Sidebar filtri - desktop */}
        <Col md={3} className="d-none d-md-block">
          <Card className={`${styles.filterCard} mb-4`}>
            <Card.Body>
              <h5 className={styles.filterTitle}>Filtri</h5>
              <Form.Group className="mt-3">
                <Form.Label className={styles.filterLabel}>
                  Cerca prodotto
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Cerca..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={styles.filterInput}
                />
              </Form.Group>

              <Form.Group className="mt-3">
                <Form.Label className={styles.filterLabel}>
                  Prezzo min (€)
                </Form.Label>
                <Form.Control
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className={styles.filterInput}
                />
              </Form.Group>

              <Form.Group className="mt-3">
                <Form.Label className={styles.filterLabel}>
                  Prezzo max (€)
                </Form.Label>
                <Form.Control
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className={styles.filterInput}
                />
              </Form.Group>

              <Form.Check
                type="checkbox"
                label="In offerta"
                className={`${styles.saleCheck} mt-3`}
                checked={onSale}
                onChange={(e) => setOnSale(e.target.checked)}
              />

              <Form.Group className="mt-3">
                <Form.Label className={styles.filterLabel}>
                  Ordina per
                </Form.Label>
                <Form.Select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className={styles.filterSelect}
                >
                  <option value="">-- Seleziona --</option>
                  <option value="price-asc">Prezzo: Crescente</option>
                  <option value="price-desc">Prezzo: Decrescente</option>
                  <option value="name-asc">Nome: A-Z</option>
                  <option value="name-desc">Nome: Z-A</option>
                </Form.Select>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>

        {/* Offcanvas filtri - mobile */}
        <Offcanvas
          show={showFilters}
          onHide={toggleFilters}
          className={styles.mobileFilters}
        >
          <Offcanvas.Header closeButton className={styles.offcanvasHeader}>
            <Offcanvas.Title className={styles.offcanvasTitle}>
              Filtri
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className={styles.offcanvasBody}>
            <Form.Group className="mb-3">
              <Form.Label className={styles.filterLabel}>
                Cerca prodotto
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Cerca..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={styles.filterInput}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className={styles.filterLabel}>
                Prezzo minimo (€)
              </Form.Label>
              <Form.Control
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className={styles.filterInput}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className={styles.filterLabel}>
                Prezzo massimo (€)
              </Form.Label>
              <Form.Control
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className={styles.filterInput}
              />
            </Form.Group>

            <Form.Check
              type="checkbox"
              label="In offerta"
              className={`${styles.saleCheck} mb-3`}
              checked={onSale}
              onChange={(e) => setOnSale(e.target.checked)}
            />

            <Form.Group>
              <Form.Label className={styles.filterLabel}>Ordina per</Form.Label>
              <Form.Select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className={styles.filterSelect}
              >
                <option value="">-- Seleziona --</option>
                <option value="price-asc">Prezzo: Crescente</option>
                <option value="price-desc">Prezzo: Decrescente</option>
                <option value="name-asc">Nome: A-Z</option>
                <option value="name-desc">Nome: Z-A</option>
              </Form.Select>
            </Form.Group>
          </Offcanvas.Body>
        </Offcanvas>

        {/* Griglia prodotti */}
        <Col xs={12} md={9} className={styles.productsGrid}>
          <Row className="gy-4 gx-4 justify-content-center">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Col
                  key={product.id}
                  xs={12}
                  sm={6}
                  md={6}
                  lg={4}
                  className="d-flex justify-content-center"
                >
                  <ProductCard
                    product={product}
                    variant="dark"
                    className={styles.productCard}
                  />
                </Col>
              ))
            ) : (
              <Col className={styles.noProducts}>
                <p>Nessun prodotto trovato.</p>
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
