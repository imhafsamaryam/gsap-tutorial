import { motion } from "motion/react";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { AnimatedSection } from "../../ui/animated-section";
import {
  CheckCircle,
  Laptop,
  Battery,
  Cpu,
  Shield,
  ArrowRight,
} from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { CTASection } from "../../CTASection";
import { HeroSection } from "../../HeroSection";
import React from "react";
import { Link } from "react-router-dom";

export function LaptopsPage() {
  const laptopCategories = [
    {
      name: "Business Essentials",
      description: "Perfect for everyday business tasks",
      specs: [
        "Intel Core i5 / AMD Ryzen 5",
        "8GB - 16GB RAM",
        "256GB - 512GB SSD",
        '14" - 15.6" Display',
        "Windows 11 Pro",
        "1-year warranty",
      ],
      icon: Laptop,
    },
    {
      name: "Professional Series",
      description: "For power users and multitasking",
      specs: [
        "Intel Core i7 / AMD Ryzen 7",
        "16GB - 32GB RAM",
        "512GB - 1TB SSD",
        '14" - 15.6" Full HD Display',
        "Dedicated Graphics (Optional)",
        "Extended battery life",
        "3-year warranty",
      ],
      icon: Cpu,
      popular: true,
    },
    {
      name: "Workstation Class",
      description: "For intensive applications and CAD",
      specs: [
        "Intel Core i9 / Xeon",
        "32GB - 64GB RAM",
        "1TB - 2TB NVMe SSD",
        '15.6" - 17" 4K Display',
        "Professional Graphics Card",
        "ISV Certifications",
        "Premium support",
      ],
      icon: Shield,
    },
  ];

  const features = [
    {
      icon: Cpu,
      title: "Latest Processors",
      description: "12th/13th Gen Intel or AMD Ryzen for superior performance",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "TPM 2.0, fingerprint readers, and advanced encryption",
    },
    {
      icon: Battery,
      title: "All-Day Battery",
      description: "Long-lasting batteries for uninterrupted productivity",
    },
    {
      icon: Laptop,
      title: "Lightweight Design",
      description: "Portable and durable for mobile professionals",
    },
  ];

  const brands = [
    "Dell Latitude",
    "HP EliteBook",
    "Lenovo ThinkPad",
    "Microsoft Surface",
  ];

  const services = [
    "Pre-configured with business software",
    "Custom imaging and deployment",
    "Asset tagging and inventory management",
    "On-site warranty options",
    "Trade-in and upgrade programs",
    "Technical support and training",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <HeroSection
        badge={"  Business Laptops"}
        title1="Business-Grade"
        title2="Laptop Solutions"
        description="  Empower your workforce with reliable, high-performance laptops
                  from Able Software Solution. We offer business-class mobile
                  workstations designed for productivity, security, and
                  long-term reliability."
        imgSrc={"/laptops.webp"}
      />

      {/* Laptop Categories */}
      <AnimatedSection className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
              Laptop Configurations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From everyday tasks to demanding applications, we have the right
              laptop for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {laptopCategories.map((laptop, index) => (
              <motion.div
                key={laptop.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {laptop.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Badge className="bg-[#018136] text-white px-4 py-1 rounded-full">
                      Most Popular
                    </Badge>
                  </motion.div>
                )}
                <Card
                  className={`p-8 h-full ${
                    laptop.popular
                      ? "ring-2 ring-[#018136] shadow-2xl"
                      : "shadow-lg"
                  }`}
                >
                  <motion.div
                    className={`w-12 h-12 ${
                      laptop.popular ? "bg-[#018136]" : "bg-[#018136]/10"
                    } rounded-xl flex items-center justify-center mb-6`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <laptop.icon
                      className={`w-6 h-6 ${
                        laptop.popular ? "text-white" : "text-[#018136]"
                      }`}
                    />
                  </motion.div>

                  <h3 className="text-2xl text-gray-900 mb-2">{laptop.name}</h3>
                  <p className="text-gray-600 mb-6">{laptop.description}</p>

                  <div className="space-y-3 mb-8">
                    {laptop.specs.map((spec, specIndex) => (
                      <motion.div
                        key={spec}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + specIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="w-5 h-5 text-[#018136] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{spec}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Link to="/contact">
                    <Button
                      className={`w-full py-3 rounded-full ${
                        laptop.popular
                          ? "bg-[#018136] hover:bg-[#016429] text-white"
                          : "border-[#018136] text-[#018136] hover:bg-[#018136] hover:text-white"
                      }`}
                      variant={laptop.popular ? "default" : "outline"}
                    >
                      Explore Options
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Features */}
      <AnimatedSection className="px-6 py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
              Business-Class Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every laptop comes with enterprise features for reliability,
              security, and productivity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group cursor-pointer text-center">
                  <motion.div
                    className="w-12 h-12 bg-[#018136]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#018136] transition-colors duration-300 mx-auto"
                    whileHover={{ scale: 1.1 }}
                  >
                    <feature.icon className="w-6 h-6 text-[#018136] group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                  <h3 className="text-lg text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Brands & Services */}
      <AnimatedSection className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Brands */}
            <div>
              <h2 className="text-3xl text-gray-900 mb-6">
                Premium Laptop Brands
              </h2>
              <p className="text-gray-600 mb-8">
                We partner with top manufacturers to offer business-grade
                laptops built for reliability
              </p>
              <div className="grid grid-cols-2 gap-4">
                {brands.map((brand, index) => (
                  <motion.div
                    key={brand}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-[#018136]/5 to-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-gray-900">{brand}</h3>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-3xl text-gray-900 mb-6">
                Complete Laptop Services
              </h2>
              <p className="text-gray-600 mb-8">
                Beyond hardware, we provide comprehensive services to support
                your laptop deployment
              </p>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#018136] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{service}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
