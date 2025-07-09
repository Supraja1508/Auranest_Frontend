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
        <Route path="/AuraNest" element={<Home/>}/>
        <Route path="/AuraNest/shop" element={<Shop />} />
        <Route path="/AuraNest/contact" element={<Contact />} />
        <Route path="/AuraNest/cart" element={<Cart />} />
        <Route path="/AuraNest/checkout" element={<Checkout />} />
        <Route path="/AuraNest/product/:id" element={<ProductDetails />} />
        <Route path="/AuraNest/blog" element={<Blog />} />
        <Route path="/AuraNest/about" element={<About />} />
        <Route path="/AuraNest/login" element={<Login />} />
        <Route path="/AuraNest/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
