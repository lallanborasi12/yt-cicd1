import './App.css';
import Footer from './component/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";

// Pages
import Home from './pages/Home';
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Contact from "./pages/Contact";


function App() {
  return (
    <>
     
       <BrowserRouter>
      <Header />

      {/* push content below fixed header */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/contact" element={<Contact />} />

          {/* optional 404 */}
          <Route path="*" element={<div className="p-10 text-center">Page not found</div>} />
        </Routes>
      </main>
       <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
