import { useState } from "react";
import ProductCard from "../Products/ProductCard";
import styles from "./Products.module.css";
import Header from "../Header/Header";

// Mock dati direttamente nel file
const mockProducts = [
  {
    id: 1,
    name: "Prodotto Esempio 1",
    price: 29.99,
    image: "https://via.placeholder.com/100x100",
    description: "Descrizione breve del prodotto 1",
  },
  {
    id: 2,
    name: "Prodotto Esempio 3",
    price: 2900.99,
    image: "https://via.placeholder.com/100x100",
    description: "Descrizione breve del prodotto 1",
  },
  {
    id: 3,
    name: "Prodotto Esempio 4",
    price: 255.99,
    image: "https://via.placeholder.com/100x100",
    description: "Descrizione breve del prodotto 1",
  },
  // Altri prodotti...
];

const Products = () => {
  const [products] = useState(mockProducts);

  return (
    <div className={styles.container}>
      <Header />
      <h1>Il nostro catalogo</h1>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
