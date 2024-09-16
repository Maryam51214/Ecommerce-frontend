import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Products from './pages/Products';
import Register from './pages/Register';
import Login from './pages/Login';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SellerRegister from './seller/pages/SellerRegister';
import SellerLogin from './seller/pages/SellerLogin';
import SellerDashboard from './seller/pages/SellerDashboard';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/seller-dashboard" element={<SellerDashboard />} />
        <Route path="/seller-register" element={<SellerRegister />} />
        <Route path="/seller-login" element={<SellerLogin />} />
        <Route path = "/product-detail/:id" element = {<ProductDetail/>}/>

        <Route path="/cart" element={<Cart />} />


      </Routes>
      <Footer />
    </>
  );
}

export default App;
