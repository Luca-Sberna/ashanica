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
import borsamare from "../../assets/imgs/borsamare.jpg";
import borsamare2 from "../../assets/imgs/borsabluy.jpg";
import borsamare3 from "../../assets/imgs/borsanera.jpg";
import borsabeige from "../../assets/imgs/borsabeige.jpg";
import borsa2 from "../../assets/imgs/borsarossa.jpg";

const mockProducts = [
  {
    id: 1,
    name: "Prodotto Esempio 1",
    price: 29.99,
    category: "Borsa",
    subcategory: "Velluto",
    image: borsamare,
    description: "Descrizione breve del prodotto 1",
  },
  {
    id: 2,
    name: "Prodotto Esempio 2",
    price: 2900.99,
    category: "Borsa",
    subcategory: "Pelle",
    image: borsamare2,
    description: "Descrizione breve del prodotto 3",
  },
  {
    id: 3,
    name: "Prodotto Esempio 3",
    price: 255.99,
    category: "Top",
    subcategory: "Tessuto",
    image: borsamare3,
    description: "Descrizione breve del prodotto 4",
  },
  {
    id: 4,
    name: "Prodotto Esempio 4",
    price: 2900.99,
    category: "Top",
    subcategory: "Pelle",
    image: borsabeige,
    description: "Descrizione breve del prodotto 3",
  },
  {
    id: 5,
    name: "Prodotto Esempio 5",
    price: 255.99,
    category: "Top",
    subcategory: "Velluto",
    image: borsa2,
    description: "Descrizione breve del prodotto 4",
  },
];

const categoriesWithSub = {
  Tutti: [],
  Borsa: ["Velluto", "Pelle", "Paillettes"],
  Top: ["Tessuto", "Pelle", "Velluto"],
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

  const toggleFilters = () => setShowFilters(!showFilters);

  let filteredProducts = mockProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === "Tutti" || product.category === selectedCategory;
    const matchesSubcategory =
      !selectedSubcategory || product.subcategory === selectedSubcategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
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
    <Container className="py-4">
      <Header />
      <h1 className="mb-4 text-center">Il nostro catalogo</h1>

      {/* Categorie */}
      {/* Categorie principali */}
      <div className="d-flex flex-wrap justify-content-center gap-2 mb-2">
        {Object.keys(categoriesWithSub).map((cat) => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? "dark" : "outline-dark"}
            onClick={() => {
              setSelectedCategory(cat);
              setSelectedSubcategory(""); // reset subcategoria al cambio
            }}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Sottocategorie dinamiche */}
      {selectedCategory !== "Tutti" &&
        categoriesWithSub[selectedCategory].length > 0 && (
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
            <Button
              variant={!selectedSubcategory ? "dark" : "outline-dark"}
              onClick={() => setSelectedSubcategory("")}
            >
              Tutti
            </Button>
            {categoriesWithSub[selectedCategory].map((sub) => (
              <Button
                key={sub}
                variant={selectedSubcategory === sub ? "dark" : "outline-dark"}
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
          <Card className="mb-4">
            <Card.Body>
              <h5>Filtri</h5>
              <Form.Group className="mt-3">
                <Form.Label>Cerca prodotto</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Cerca..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mt-3">
                <Form.Label>Prezzo min (€)</Form.Label>
                <Form.Control
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mt-3">
                <Form.Label>Prezzo max (€)</Form.Label>
                <Form.Control
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </Form.Group>

              <Form.Check
                type="checkbox"
                label="In offerta"
                className="mt-3"
                checked={onSale}
                onChange={(e) => setOnSale(e.target.checked)}
              />

              <Form.Group className="mt-3">
                <Form.Label>Ordina per</Form.Label>
                <Form.Select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
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
          className="d-md-none"
          show={showFilters}
          onHide={toggleFilters}
          responsive="md"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Filtri</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form.Group className="mb-3">
              <Form.Label>Cerca prodotto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cerca..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Prezzo minimo (€)</Form.Label>
              <Form.Control
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Prezzo massimo (€)</Form.Label>
              <Form.Control
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Check
              type="checkbox"
              label="In offerta"
              className="mb-3"
              checked={onSale}
              onChange={(e) => setOnSale(e.target.checked)}
            />

            <Form.Group>
              <Form.Label>Ordina per</Form.Label>
              <Form.Select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
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
        <Col xs={12} md={9}>
          <Row className="gy-4 gx-4 justify-content-center">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Col
                  key={product.id}
                  xs={10}
                  sm={6}
                  md={6}
                  lg={4}
                  className="d-flex justify-content-center"
                >
                  <ProductCard product={product} />
                </Col>
              ))
            ) : (
              <Col>
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
