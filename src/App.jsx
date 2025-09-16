import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import "./App.css";
import HomePage from "./pages/home_page";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Footer from "./components/footer";
import AboutPage from "./pages/about_page";
import ContactUsPage from "./pages/contact-us";
import ProductsPage from "./pages/products-page";
import Sage200Page from "./pages/products/sage200-page";
import BusyAccountingPage from "./pages/products/busaccounting-page";
import Sage300Page from "./pages/products/sage300-page";
import ServicesPage from "./pages/services-page";
import ERPSupportPage from "./pages/services/erp-support";
import ITSupportPage from "./pages/services/it-support";
import CloudServicesPage from "./pages/services/cloud-services";
import SecurityInstallationPage from "./pages/services/security"

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useGSAP(() => {
    gsap.to("main", {
      scaleX: 0.96, // Moves the main content up to reveal the footer
      scaleY: 0.98, // Moves the main content up to reveal the footer
      ease: "power2.out",
      scrollTrigger: {
        trigger: "footer",
        start: "top bottom", // When the footer's top reaches the bottom of viewport
        end: "top center", // When the footer's top reaches the center
        scrub: 1, // Smooth effect
      },
    });
  });

  return (
    <Router>
      <div className="relative bg-slate-900">
        {/* Main Content */}
        <main className="relative z-10 min-h-[200vh]">
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />

            <Route path="/services/erp-support" element={<ERPSupportPage />} />
            <Route path="/services/it-support" element={<ITSupportPage />} />
            <Route path="/services/cloud-services" element={<CloudServicesPage />} />
            <Route path="/services/security-installation" element={<SecurityInstallationPage />} />

            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/sage200" element={<Sage200Page />} />
            <Route path="/products/sage300" element={<Sage300Page />} />

            <Route path="/products/busy-accounting" element={<BusyAccountingPage />} />
          </Routes>
        </main>

        {/* Footer Positioned Behind */}
        <Footer />
      </div>
    </Router>
  );
}
