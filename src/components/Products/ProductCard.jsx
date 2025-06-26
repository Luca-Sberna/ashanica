import { Link } from "react-router-dom";
import styles from "../Products/ProductCard.module.css";
const ProductCard = ({ product }) => {
  if (!product) return "Prodotto non trovato";

  return (
    <div className={`${styles.bgCard} card h-100 shadow-sm`}>
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image?.[0]}
          className="card-img-top"
          style={{ height: "170px", objectFit: "cover" }}
          alt={product.name}
        />
      </Link>
      <div className="card-body d-flex flex-column">
        <Link
          className="text-decoration-none text-dark"
          to={`/products/${product.id}`}
        >
          <h6 className="card-title">{product.name}</h6>
        </Link>
        <p className="card-text mb-2">
          <strong>€ {product.price?.toFixed(2)}</strong>
        </p>
        <Link
          to={`/products/${product.id}`}
          className="btn btn-outline-dark mt-auto"
        >
          Dettagli
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
