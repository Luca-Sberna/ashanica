import { Link } from "react-router-dom";
import styles from "../Products/ProductCard.module.css";
import { Badge } from "react-bootstrap";
import { style } from "framer-motion/client";
const ProductCard = ({ product }) => {
  if (!product) return "Prodotto non trovato";

  return (
    <div className={`${styles.bgCard} card h-100`}>
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
          className="text-decoration-none text-light"
          to={`/products/${product.id}`}
        >
          <h6 className={`${styles.textShadow} card-title`}>{product.name}</h6>
        </Link>
        <p className="card-text text-light mb-2">
          <Badge className="bg-transparent border text-light">
            € {product.price?.toFixed(2)}
          </Badge>
        </p>
        <Link
          to={`/products/${product.id}`}
          className={`${styles.buttonStyle} btn btn-outline-light mt-auto`}
        >
          Dettagli
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
