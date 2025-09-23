import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { PerformanceWrapper } from "./components/ui/performance-wrapper";
import { HomePage } from "./components/pages/HomePage";
import { AboutPage } from "./components/pages/AboutPage";
import { ProductsPage } from "./components/pages/ProductsPage";
import { CloudPage } from "./components/pages/CloudPage";
import { HardwarePage } from "./components/pages/HardwarePage";
import { ContactPage } from "./components/pages/ContactPage";
// Product Sub-pages
import { Sage300Page } from "./components/pages/subpages/Sage300Page";
import { Sage200Page } from "./components/pages/subpages/Sage200Page";
import { ZohoBooksPage } from "./components/pages/subpages/ZohoBooksPage";
import { BusyAccountingPage } from "./components/pages/subpages/BusyAccountingPage";
// Cloud Hosting Sub-pages
import { MicrosoftAzurePage } from "./components/pages/subpages/MicrosoftAzurePage";
import { TSPlusPage } from "./components/pages/subpages/TSPlusPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isPageChanging, setIsPageChanging] = useState(false);

  const handlePageChange = (newPage: string) => {
    if (newPage === currentPage) return;
    
    setIsPageChanging(true);
    setTimeout(() => {
      setCurrentPage(newPage);
      setIsPageChanging(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 150);
  };

  // Add smooth scrolling for anchor links
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={handlePageChange} />;
      case 'about':
        return <AboutPage onPageChange={handlePageChange} />;
      case 'products':
        return <ProductsPage onPageChange={handlePageChange} />;
      case 'cloud':
        return <CloudPage onPageChange={handlePageChange} />;
      case 'hardware':
        return <HardwarePage onPageChange={handlePageChange} />;
      case 'contact':
        return <ContactPage onPageChange={handlePageChange} />;
      // Product Sub-pages
      case 'sage300':
        return <Sage300Page onPageChange={handlePageChange} />;
      case 'sage200':
        return <Sage200Page onPageChange={handlePageChange} />;
      case 'zoho-books':
        return <ZohoBooksPage onPageChange={handlePageChange} />;
      case 'busy-accounting':
        return <BusyAccountingPage onPageChange={handlePageChange} />;
      // Cloud Hosting Sub-pages
      case 'microsoft-azure':
        return <MicrosoftAzurePage onPageChange={handlePageChange} />;
      case 'ts-plus':
        return <TSPlusPage onPageChange={handlePageChange} />;
      // Hardware Sub-pages (placeholders for now)
      case 'servers':
      case 'laptops':
      case 'desktops':
      case 'networking':
      case 'maintenance':
        return <HardwarePage onPageChange={handlePageChange} />;
      default:
        return <HomePage onPageChange={handlePageChange} />;
    }
  };

  return (
    <PerformanceWrapper>
      <div className="min-h-screen bg-white">
        <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
        
        <AnimatePresence mode="wait">
          <motion.main
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isPageChanging ? 0 : 1, y: isPageChanging ? 20 : 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="min-h-screen"
          >
            {renderPage()}
          </motion.main>
        </AnimatePresence>

        <Footer onPageChange={handlePageChange} />
      </div>
    </PerformanceWrapper>
  );
}