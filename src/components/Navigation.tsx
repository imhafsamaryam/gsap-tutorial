import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { ChevronDown, ArrowLeft } from "lucide-react";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

interface SubPage {
  id: string;
  label: string;
  description?: string;
}

interface NavItem {
  id: string;
  label: string;
  subPages?: SubPage[];
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
  const [mobileMenuHistory, setMobileMenuHistory] = useState<string[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const navigationItems: NavItem[] = [
    { id: "about", label: "About Us" },
    {
      id: "products",
      label: "Products",
      subPages: [
        {
          id: "sage300",
          label: "Sage 300",
          description: "Advanced ERP for mid-market businesses",
        },
        {
          id: "sage200",
          label: "Sage 200",
          description: "Comprehensive business management solution",
        },
        {
          id: "zoho-books",
          label: "Zoho Books",
          description: "Cloud-based accounting software",
        },
        {
          id: "busy-accounting",
          label: "Busy Accounting",
          description: "GST-ready accounting solution",
        },
      ],
    },
    {
      id: "cloud",
      label: "Cloud Hosting",
      subPages: [
        {
          id: "microsoft-azure",
          label: "Microsoft Azure",
          description: "Enterprise cloud infrastructure",
        },
        {
          id: "ts-plus",
          label: "TS Plus",
          description: "Remote desktop hosting solutions",
        },
      ],
    },
    {
      id: "hardware",
      label: "Hardware",
      subPages: [
        {
          id: "servers",
          label: "Servers",
          description: "High-performance server configurations",
        },
        {
          id: "laptops",
          label: "Laptops",
          description: "Business-grade mobile workstations",
        },
        {
          id: "desktops",
          label: "Desktops",
          description: "Custom desktop workstations",
        },
        {
          id: "networking",
          label: "Networking",
          description: "Network infrastructure solutions",
        },
        {
          id: "maintenance",
          label: "Annual Maintenance",
          description: "Comprehensive support plans",
        },
      ],
    },
    { id: "contact", label: "Contact Us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle dropdown hover with delay
  const handleMouseEnter = (itemId: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHoveredMenu(itemId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 150);
  };

  const handlePageChange = (pageId: string) => {
    onPageChange(pageId);
    setIsMenuOpen(false);
    setMobileActiveMenu(null);
    setMobileMenuHistory([]);
  };

  const handleMobileSubMenu = (menuId: string) => {
    if (mobileActiveMenu === menuId) {
      // Going back
      setMobileActiveMenu(null);
      setMobileMenuHistory([]);
    } else {
      // Going forward
      setMobileMenuHistory([...mobileMenuHistory, menuId]);
      setMobileActiveMenu(menuId);
    }
  };

  const handleMobileBack = () => {
    const newHistory = [...mobileMenuHistory];
    newHistory.pop();
    setMobileMenuHistory(newHistory);
    setMobileActiveMenu(newHistory[newHistory.length - 1] || null);
  };

  const renderDesktopDropdown = (item: NavItem) => {
    if (!item.subPages) return null;

    return (
      <AnimatePresence>
        {hoveredMenu === item.id && (
          <motion.div
            className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="p-6">
              <motion.h3
                className="text-lg text-[#018136] mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                {item.label}
              </motion.h3>
              <div className="space-y-3">
                {item.subPages.map((subPage, index) => (
                  <motion.button
                    key={subPage.id}
                    onClick={() => handlePageChange(subPage.id)}
                    className="w-full text-left p-3 rounded-xl hover:bg-[#018136]/5 transition-all duration-300 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    whileHover={{ x: 8 }}
                  >
                    <div className="flex items-start space-x-3">
                      <motion.div
                        className="w-2 h-2 bg-[#018136] rounded-full mt-2 group-hover:scale-125"
                        transition={{ duration: 0.2 }}
                      />
                      <div>
                        <h4 className="text-gray-800 group-hover:text-[#018136] transition-colors duration-300">
                          {subPage.label}
                        </h4>
                        {subPage.description && (
                          <p className="text-sm text-gray-500 mt-1 group-hover:text-gray-600">
                            {subPage.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  const renderMobileMenu = () => {
    if (!mobileActiveMenu) {
      // Main menu
      return (
        <div className="flex flex-col space-y-4">
          {navigationItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              {item.subPages ? (
                <button
                  onClick={() => handleMobileSubMenu(item.id)}
                  className="w-full flex items-center justify-between text-left text-lg font-medium py-3 px-4 text-gray-700 hover:text-[#018136] hover:bg-[#018136]/5 rounded-xl transition-all duration-300"
                >
                  <span>{item.label}</span>
                  <motion.div
                    animate={{ rotate: mobileActiveMenu === item.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>
              ) : (
                <button
                  onClick={() => handlePageChange(item.id)}
                  className={`w-full text-left text-lg font-medium py-3 px-4 rounded-xl transition-all duration-300 ${
                    currentPage === item.id
                      ? "text-[#018136] bg-[#018136]/10"
                      : "text-gray-700 hover:text-[#018136] hover:bg-[#018136]/5"
                  }`}
                >
                  {item.label}
                </button>
              )}
            </motion.div>
          ))}
        </div>
      );
    }

    // Sub-menu
    const activeItem = navigationItems.find(
      (item) => item.id === mobileActiveMenu
    );
    if (!activeItem?.subPages) return null;

    return (
      <motion.div
        key={mobileActiveMenu}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="space-y-4"
      >
        <button
          onClick={handleMobileBack}
          className="flex items-center space-x-3 text-[#018136] py-3 px-4 hover:bg-[#018136]/5 rounded-xl transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to {activeItem.label}</span>
        </button>

        <div className="space-y-3">
          {activeItem.subPages.map((subPage, index) => (
            <motion.button
              key={subPage.id}
              onClick={() => handlePageChange(subPage.id)}
              className="w-full text-left p-4 bg-gray-50 hover:bg-[#018136]/5 rounded-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <h4 className="text-gray-800 hover:text-[#018136] transition-colors duration-300">
                {subPage.label}
              </h4>
              {subPage.description && (
                <p className="text-sm text-gray-500 mt-1">
                  {subPage.description}
                </p>
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <motion.header
        className={`fixed w-full px-6 py-4 bg-white/95 backdrop-blur-md shadow-sm z-50 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-4"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/" className="flex items-center">
              <img
                src="/images/able-logo.png"
                alt="Able Software Solutions"
                className="h-16 mr-3"
              />{" "}
              <button
                onClick={() => handlePageChange("home")}
                className="text-xl pl-2 font-bold text-[#018136] hover:text-[#016429] transition-colors duration-300"
              >
                Able Softwares Solutions
              </button>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.slice(0, -1).map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <motion.button
                  onClick={() => !item.subPages && handlePageChange(item.id)}
                  className={`relative flex items-center space-x-1 text-gray-700 hover:text-[#018136] font-medium transition-colors duration-300 ${
                    currentPage === item.id ? "text-[#018136]" : ""
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <span>{item.label}</span>
                  {item.subPages && (
                    <motion.div
                      animate={{ rotate: hoveredMenu === item.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  )}
                  {currentPage === item.id && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#018136]"
                      layoutId="underline"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#018136] origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: currentPage === item.id ? 1 : 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                {renderDesktopDropdown(item)}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              className="flex flex-col justify-center items-center w-6 h-6"
            >
              <motion.span
                className="block h-0.5 w-6 bg-gray-700"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-0.5 w-6 bg-gray-700 mt-1.5"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-0.5 w-6 bg-gray-700 mt-1.5"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -6 },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.button>

          {/* Desktop CTA Button */}
          <motion.div
            className="hidden lg:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => handlePageChange("contact")}
              className="bg-[#018136] hover:bg-[#016429] text-white px-6 py-2 rounded-full overflow-hidden relative group"
            >
              <motion.div className="absolute inset-0 bg-[#016429] -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              <span className="relative z-10">Get Free Demo</span>
            </Button>
          </motion.div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="flex flex-col h-full pt-20 px-6 pb-6">
                <nav className="flex-1">
                  <AnimatePresence mode="wait">
                    {renderMobileMenu()}
                  </AnimatePresence>
                </nav>

                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                >
                  <Button
                    onClick={() => handlePageChange("contact")}
                    className="w-full bg-[#018136] hover:bg-[#016429] text-white py-3 rounded-full"
                  >
                    Get Free Demo
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-20" />
    </>
  );
}
