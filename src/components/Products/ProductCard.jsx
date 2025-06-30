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
          className="card-img-top rounded-top-0"
          style={{ height: "170px", objectFit: "cover" }}
          alt={product.name}
        />
      </Link>
      <div className="card-body d-flex flex-column p-0 px-3 pt-1">
        <Link
          className="text-decoration-none text-light"
          to={`/products/${product.id}`}
        >
          <h6 className={`${styles.textShadow} card-title m-0`}>
            {product.name}
          </h6>
        </Link>
        <div className="card-text text-light mb-2 text-end">
          <Badge className="bg-transparent text-light ">
            <p className="m-0"> € {product.price?.toFixed(2)}</p>
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
