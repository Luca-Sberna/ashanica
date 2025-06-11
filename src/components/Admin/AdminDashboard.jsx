import { useSelector, useDispatch } from "react-redux";
import {
  removeProduct,
  toggleFeatured,
  toggleCarousel,
} from "../../redux/ProductSlice";
import { Table, Button, Image, Container } from "react-bootstrap";
import AdminForm from "../Admin/AdminForm";

const AdminDashboard = () => {
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  return (
    <Container className="py-4">
      <h3>Dashboard Prodotti</h3>

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
              <th>Featured</th>
              <th>Carousel</th>
              <th>Azioni</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => (
              <tr key={prod.id}>
                <td>
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    width={60}
                    height={60}
                    rounded
                  />
                </td>
                <td>{prod.name}</td>
                <td>€ {prod.price.toFixed(2)}</td>
                <td>{prod.description}</td>
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
      <AdminForm />
    </Container>
  );
};

export default AdminDashboard;
