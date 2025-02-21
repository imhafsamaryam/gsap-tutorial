import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import "./App.css";
import HomeAboutSection from "./components/home_about_section";
import AnimatedBorder from "./components/animated_border";
import HomePage from "./pages/home_page";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/products" element={<ProductsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} /> */}
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto  px-[1rem] md:px-[2rem] text-center">
            <p className="mb-4">
              © {new Date().getFullYear()} Able Software Solutions. All rights
              reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="/privacy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a
                href="/contact"
                className="hover:text-primary transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
