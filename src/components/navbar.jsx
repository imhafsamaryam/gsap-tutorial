// import { useState } from "react";
// // import { MenuIcon, XIcon } from "@heroicons/react/outline";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const links = [
//     { name: "About", href: "/about" },
//     { name: "Products", href: "/products" },
//     { name: "Services", href: "/services" },
//     { name: "Contact", href: "/contact" },
//   ];

//   return (
//     <nav className=" bg-transparent absolute z-10 top-0 w-full ">
//       <div className="container mx-auto  px-[1rem] md:px-[2rem]">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <h1 className="text-2xl font-bold text-primary">AbleSolutions</h1>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             {links.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="text-gray-400 hover:text-primary transition-colors"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <div>open</div> : <div>close</div>}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden py-2 space-y-2">
//             {links.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }
"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Menu, X, ChevronDown } from "lucide-react"
import { useLocation } from "react-router-dom"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const menuRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      // Animate menu opening
      gsap.fromTo(menuRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" })

      // Prevent body scrolling
      document.body.style.overflow = "hidden"
    } else {
      // Allow body scrolling
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    {
      name: "Products",
      path: "/products",
      hasDropdown: true,
      dropdownItems: [
        { name: "SAGE 300", path: "/products/sage300" },
        { name: "SAGE 200", path: "/products/sage200" },
        { name: "BUSY Accounting", path: "/products/busy-accounting" },
      ],
    },
    {
      name: "Services",
      path: "/services",
      hasDropdown: true,
      dropdownItems: [
        { name: "ERP Support & Maintenance", path: "/services/erp-support" },
        { name: "IT Support", path: "/services/it-support" },
        { name: "Cloud Services", path: "/services/cloud-services" },
        { name: "Security Installation", path: "/services/security-installation" },
      ],
    },
    { name: "Contact Us", path: "/contact" },
  ]

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === path
    }
    return location.pathname.startsWith(path)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-slate-950/90 backdrop-blur-md py-3" : "bg-transparent py-5"}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src="images/able-logo.png" alt="Able Software Solutions" className="h-10 mr-3" />
            <span className="text-white font-bold text-xl">Able Softwares Solutions</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                {link.hasDropdown ? (
                  <>
                    <a
                      href={link.path}
                      className={`relative text-sm font-medium transition-colors flex items-center ${isActive(link.path)
                        ? "text-white after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#3c7321] after:via-[#edeb57] after:to-[#1a954b] after:rounded-full"
                        : "text-gray-300 hover:text-white"
                        }`}
                    >
                      {link.name}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </a>
                    <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900 border border-gray-800 rounded-lg shadow-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="py-2">
                        {link.dropdownItems.map((item) => (
                          <a
                            key={item.path}
                            href={item.path}
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-800 hover:text-white"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href={link.path}
                    className={`relative text-sm font-medium transition-colors ${isActive(link.path)
                      ? "text-white after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#3c7321] after:via-[#edeb57] after:to-[#1a954b] after:rounded-full"
                      : "text-gray-300 hover:text-white"
                      }`}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-md border-t border-gray-800 h-screen"
        >
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <div key={link.path} className="relative">
                {link.hasDropdown ? (
                  <div className="space-y-2">
                    <a
                      href={link.path}
                      className={`text-lg font-medium py-2 flex justify-between items-center ${isActive(link.path) ? "text-white" : "text-gray-300"}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </a>
                    <div className="pl-4 mt-2 space-y-2 border-l border-gray-700">
                      {link.dropdownItems.map((item) => (
                        <a
                          key={item.path}
                          href={item.path}
                          className="block py-2 text-gray-400 hover:text-white"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={link.path}
                    className={`text-lg font-medium py-2 ${isActive(link.path) ? "text-white" : "text-gray-300"}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
