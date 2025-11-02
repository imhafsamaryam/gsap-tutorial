import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { PerformanceWrapper } from "./components/ui/performance-wrapper";
import { HomePage } from "./components/pages/HomePage";
import { AboutPage } from "./components/pages/AboutPage";
import { ProductsPage } from "./components/pages/ProductsPage";
import { ServicesPage } from "./components/pages/ServicesPage";
import { ContactPage } from "./components/pages/ContactPage";
// ERP Software Sub-pages
import { Sage300Page } from "./components/pages/subpages/Sage300Page";
import { Sage200Page } from "./components/pages/subpages/Sage200Page";
import { ZohoPage } from "./components/pages/subpages/ZohoPage";
import { BusyAccountingPage } from "./components/pages/subpages/BusyAccountingPage";
// Cloud Hosting Sub-pages
import { TSPlusPage } from "./components/pages/subpages/TSPlusPage";
// Hardware Sub-pages
import { ServersPage } from "./components/pages/subpages/ServersPage";
import { LaptopsPage } from "./components/pages/subpages/LaptopsPage";
import { DesktopsPage } from "./components/pages/subpages/DesktopsPage";
// Service Sub-pages
import { ProductDevelopmentPage } from "./components/pages/subpages/ProductDevelopmentPage";
import { SoftwareSupportPage } from "./components/pages/subpages/SoftwareSupportPage";
import React from "react";
import { AzurePage } from "./components/pages/subpages/AzurePage";
import { ERPSoftwaresPage } from "./components/pages/ErpPage";
import { CloudHostingPage } from "./components/pages/CloudHostingPage";
import { HardwarePage } from "./components/pages/HardwarePage";

// AnimatedRoutes component to handle page transitions
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <HomePage />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <AboutPage />
            </PageWrapper>
          }
        />
        <Route
          path="/products"
          element={
            <PageWrapper>
              <ProductsPage />
            </PageWrapper>
          }
        />
        <Route
          path="/services"
          element={
            <PageWrapper>
              <ServicesPage />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <ContactPage />
            </PageWrapper>
          }
        />

        {/* ERP Software Sub-pages */}
        <Route
          path="/erp-softwares"
          element={
            <PageWrapper>
              <ERPSoftwaresPage />
            </PageWrapper>
          }
        />
        <Route
          path="/sage300"
          element={
            <PageWrapper>
              <Sage300Page />
            </PageWrapper>
          }
        />
        <Route
          path="/sage200"
          element={
            <PageWrapper>
              <Sage200Page />
            </PageWrapper>
          }
        />
        <Route
          path="/zoho"
          element={
            <PageWrapper>
              <ZohoPage />
            </PageWrapper>
          }
        />
        <Route
          path="/busy-erp"
          element={
            <PageWrapper>
              <BusyAccountingPage />
            </PageWrapper>
          }
        />

        {/* Cloud Hosting Sub-pages */}
        <Route
          path="/cloud-hosting"
          element={
            <PageWrapper>
              <CloudHostingPage />
            </PageWrapper>
          }
        />
        <Route
          path="/azure"
          element={
            <PageWrapper>
              <AzurePage />
            </PageWrapper>
          }
        />
        <Route
          path="/ts-plus"
          element={
            <PageWrapper>
              <TSPlusPage />
            </PageWrapper>
          }
        />

        {/* Hardware Sub-pages */}
        <Route
          path="/hardware"
          element={
            <PageWrapper>
              <HardwarePage />
            </PageWrapper>
          }
        />
        <Route
          path="/servers"
          element={
            <PageWrapper>
              <ServersPage />
            </PageWrapper>
          }
        />
        <Route
          path="/laptops"
          element={
            <PageWrapper>
              <LaptopsPage />
            </PageWrapper>
          }
        />
        <Route
          path="/desktops"
          element={
            <PageWrapper>
              <DesktopsPage />
            </PageWrapper>
          }
        />

        {/* Service Sub-pages */}
        <Route
          path="/product-development"
          element={
            <PageWrapper>
              <ProductDevelopmentPage />
            </PageWrapper>
          }
        />
        <Route
          path="/software-support"
          element={
            <PageWrapper>
              <SoftwareSupportPage />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

// PageWrapper component to handle scroll-to-top and animations
function PageWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="min-h-screen"
    >
      {children}
    </motion.main>
  );
}

export default function App() {
  // Add smooth scrolling for anchor links
  React.useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  return (
    <PerformanceWrapper>
      <Router>
        <div className="min-h-screen bg-white">
          {/* Remove currentPage prop since Navigation will use useLocation hook */}
          <Navigation />
          <AnimatedRoutes />
          {/* Remove onPageChange prop from Footer since we'll use Link components */}
          <Footer />
        </div>
      </Router>
    </PerformanceWrapper>
  );
}
