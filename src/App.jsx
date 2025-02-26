import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import "./App.css";
import HomePage from "./pages/home_page";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Footer from "./components/footer";
import AboutPage from "./pages/about_page";

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
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>

        {/* Footer Positioned Behind */}
        <Footer />
      </div>
    </Router>
  );
}
