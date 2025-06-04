import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.layout}>
      {/* Qui puoi mettere header, nav, etc. */}
      <main className={styles.main}>
        <Outlet /> {/* Questo renderizza le pagine figlie */}
      </main>
      {/* Qui puoi mettere il footer */}
    </div>
  );
};

export default Layout;
