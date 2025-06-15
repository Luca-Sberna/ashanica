import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";

const Layout = () => {
  const location = useLocation();

  const hideFooter =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/cart") ||
    location.pathname.startsWith("/login") ||
    location.pathname.startsWith("/register");

  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;
