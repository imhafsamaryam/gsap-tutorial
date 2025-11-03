import { motion } from "motion/react";
import { Link } from "react-router-dom";
import React from "react";

interface FooterProps {
  // Remove onPageChange prop since we'll use React Router
}

export function Footer({}: FooterProps) {
  const footerSections = [
    {
      title: "Products",
      links: [
        { label: "Sage 300", path: "/sage300" },
        { label: "Sage 200", path: "/sage200" },
        { label: "Busy Accounting", path: "/busy-erp" },
        { label: "Zoho Books", path: "/zoho" },
        { label: "Cloud Hosting", path: "/cloud-hosting" },
        { label: "Hardware", path: "/hardware" },
      ],
    },

    {
      title: "Services",
      links: [
        { label: "Product Development", path: "/product-development" },
        { label: "Software Support", path: "/software-support" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Contact", path: "/contact" },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            style={{ paddingBottom: "40px", paddingRight: "20px" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <motion.h3 whileHover={{ scale: 1.05 }}>
                <Link to="/" className="flex items-center">
                  <img
                    src="/able-logo.png"
                    alt="Able Software Solutions"
                    className="h-16 mr-3"
                  />
                  <span className="text-xl pl-2 font-bold text-[#018136] hover:text-[#016429] transition-colors duration-300">
                    Able Software Solutions
                  </span>
                </Link>
              </motion.h3>
              <p
                className="text-gray-600 leading-relaxed mb-6"
                style={{ paddingTop: "10px" }}
              >
                Leading ERP solutions provider helping businesses streamline
                operations, increase efficiency, and drive growth through
                innovative technology and exceptional support.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-[#018136]">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-600 text-sm">
                  Hamriyah Free Zone, Sharjah, UAE
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-[#018136]">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span className="text-gray-600 text-sm">+971 585198723</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-[#018136]">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1.75a10.25 10.25 0 1 0 10.25 10.25A10.262 10.262 0 0 0 12 1.75zm0 18.5a8.25 8.25 0 1 1 8.25-8.25 8.259 8.259 0 0 1-8.25 8.25zm.75-12.75a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 .22.53l3 3a.75.75 0 0 0 1.06-1.06l-2.78-2.78z" />
                  </svg>
                </div>
                <span className="text-gray-600 text-sm">
                  8:00AM-5:00PM (Mon – Fri)
                </span>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="font-semibold text-gray-900 mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-[#018136] text-sm transition-colors duration-300 text-left block"
                    >
                      <motion.span
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                        className="block"
                      >
                        {link.label}
                      </motion.span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-200 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-600 text-sm">
              © 2025 Able Software Solutions. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {[
                {
                  name: "LinkedIn",
                  icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                  url: "https://linkedin.com/company/able-software-solutions",
                },
                {
                  name: "Twitter",
                  icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
                  url: "https://twitter.com/ablesoftware",
                },
                {
                  name: "Facebook",
                  icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                  url: "https://facebook.com/ablesoftwaresolutions",
                },
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-100 hover:bg-[#018136] text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-gray-600 hover:text-[#018136] transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-gray-600 hover:text-[#018136] transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
