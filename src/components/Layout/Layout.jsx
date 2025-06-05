import { Outlet } from "react-router-dom";
import MyNavbar from "../Navbar/MyNavbar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <MyNavbar />
      <main className="flex-grow-1">
        <Outlet /> {/* Questo renderizza le pagine figlie */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
