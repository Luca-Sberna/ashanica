import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Loading from './components/Loading/Loading';
import MyNavbar from './components/Navbar/MyNavbar.jsx';
import Cart from './components/Cart/Cart.jsx';
import ProductDetail from './components/Products/ProductDetail.jsx';
import AdminDashboard from './components/Admin/AdminDashboard.jsx';
import ProtectedRoute from './components/Admin/ProtectedRoute.jsx';

const Home = lazy(() => import('./components/Home/Home.jsx'));
const About = lazy(() => import('./components/About/About.jsx'));
const Products = lazy(() => import('./components/Products/Products.jsx'));
const Login = lazy(() => import('./components/Logging/Login.jsx'));
const SignUp = lazy(() => import('./components/Logging/Signup.jsx'));
const Assistance = lazy(() => import('./components/Assistance/Assistance.jsx'));
const NotFound = lazy(() => import('./components/NotFound/NotFound.jsx'));

// Simulazione accesso admin (sostituibile con Redux o Context API)
const isAdmin = true;

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<SignUp />} />
          <Route path="cart" element={<Cart />} />
          <Route path="assistance" element={<Assistance />} />
          <Route
            path="admin"
            element={
              <ProtectedRoute isAdmin={isAdmin}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
