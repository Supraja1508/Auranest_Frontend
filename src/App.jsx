import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ScrollToTop from './components/ScrolltoTop';
import ProductDetails from './pages/ProductDetails';
import Blog from './pages/Blog';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Auranest_Frontend" element={<Home/>}/>
        <Route path="/Auranest_Frontend/shop" element={<Shop />} />
        <Route path="/Auranest_Frontend/contact" element={<Contact />} />
        <Route path="/Auranest_Frontend/cart" element={<Cart />} />
        <Route path="/Auranest_Frontend/checkout" element={<Checkout />} />
        <Route path="/Auranest_Frontend/product/:id" element={<ProductDetails />} />
        <Route path="/Auranest_Frontend/blog" element={<Blog />} />
        <Route path="/Auranest_Frontend/about" element={<About />} />
        <Route path="/Auranest_Frontend/login" element={<Login />} />
        <Route path="/Auranest_Frontend/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
