import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.subtitle}>Oops! La pagina non è stata trovata.</p>
        <p className={styles.text}>
          Sembra che tu ti sia perso. La pagina che cerchi non esiste o è stata
          spostata.
        </p>
        <Link to="/" className={styles.button}>
          Torna alla Home
        </Link>
      </div>
      <svg
        className={styles.backgroundShape}
        viewBox="0 0 600 400"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 Q150,200 300,100 T600,100 L600,400 L0,400 Z"
          fill="#040608"
          opacity="0.1"
        />
      </svg>
    </div>
  );
};

export default NotFound;
