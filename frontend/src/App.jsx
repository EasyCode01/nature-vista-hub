import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  About,
  Blogs,
  Books,
  Contact,
  Gallery,
  Homepage,
  Promotions,
} from "./pages";
import NotFound from "./components/NotFound";
import MobileMenu from "./components/MobileMenu";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <MobileMenu />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/books" element={<Books />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
