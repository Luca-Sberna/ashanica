import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Loading from './components/Loading/Loading';
import MyNavbar from './components/Navbar/MyNavbar.jsx';

const Home = lazy(() => import('../src/components/Home/Home.jsx'));
const About = lazy(() => import('../src/components/About/About.jsx'));
const Products = lazy(() => import('../src/components/Products/Products.jsx'));
const NotFound = lazy(() => import('../src/components/NotFound/NotFound.jsx'));


function App() {
  return (
    <Suspense fallback={<Loading />}>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;