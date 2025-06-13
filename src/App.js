import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Loading from './components/Loading/Loading';
import MyNavbar from './components/Navbar/MyNavbar.jsx';
import Cart from './components/Cart/Cart.jsx';
import ProductDetail from './components/Products/ProductDetail.jsx';
import AdminDashboard from './components/Admin/AdminDashboard.jsx';
import ProtectedRoute from './components/Admin/ProtectedRoute.jsx';
import CookieConsent from "react-cookie-consent";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const Home = lazy(() => import('./components/Home/Home.jsx'));
const About = lazy(() => import('./components/About/About.jsx'));
const Products = lazy(() => import('./components/Products/Products.jsx'));
const Login = lazy(() => import('./components/Logging/Login.jsx'));
const SignUp = lazy(() => import('./components/Logging/Signup.jsx'));
const Assistance = lazy(() => import('./components/Assistance/Assistance.jsx'));
const NotFound = lazy(() => import('./components/NotFound/NotFound.jsx'));
const GeneralCondition = lazy(() => import('./components/Assistance/GeneralCondition.jsx'));
const PrivacyPolicy = lazy(() => import('./components/Assistance/PrivacyPolicy.jsx'));
const Checkout = lazy(() => import('./components/Checkout/Checkout.jsx'));
const UserDetail = lazy(() => import('./components/User/UserDetail.jsx'));




const isAdmin = false;
const isLoggedIn = true;
const stripePromise = loadStripe("pk_test_51RZX0kQS62gHrfW7TqgLNUIUFAvvoPlj0ENizxZl5nISuSeRomQwdbtUC96o0PbcyIqN8jdlhFmNlqn4GUobS0MF00HKRAXklm");

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Elements stripe={stripePromise}>
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
            <Route path="conditions" element={<GeneralCondition />} />
            <Route path="policies" element={<PrivacyPolicy />} />
            <Route
              path="checkout"
              element={
                <ProtectedRoute isAllowed={isLoggedIn}>
                  <Checkout />
                </ProtectedRoute>
              }
            />   <Route path="user/:id" element={<UserDetail />} />
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
      </Elements>

      {/* ✅ CookieConsent sempre visibile in fondo */}
      <CookieConsent
        location="bottom"
        buttonText="Accetta"
        cookieName="cookieConsent"
        style={{ background: "#2b373b" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        Utilizziamo i cookie per offrirti la migliore esperienza possibile.{" "}
        <a href="/privacy-policy" style={{ color: "#ffd700" }}>Leggi di più</a>.
      </CookieConsent>
    </Suspense>
  );
}

export default App;
