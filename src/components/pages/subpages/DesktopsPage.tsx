import { motion } from "motion/react";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { AnimatedSection } from "../../ui/animated-section";
import {
  CheckCircle,
  Monitor,
  Cpu,
  HardDrive,
  Zap,
  ArrowRight,
} from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { CTASection } from "../../CTASection";
import { HeroSection } from "../../HeroSection";

interface DesktopsPageProps {
  onPageChange: (page: string) => void;
}

export function DesktopsPage({ onPageChange }: DesktopsPageProps) {
  const desktopCategories = [
    {
      name: "Business Workstations",
      description: "Reliable performance for everyday tasks",
      specs: [
        "Intel Core i5 / AMD Ryzen 5",
        "8GB - 16GB RAM",
        "256GB SSD + 1TB HDD",
        "Integrated Graphics",
        "DVD-RW Drive",
        "Windows 11 Pro",
        "3-year warranty",
      ],
      icon: Monitor,
    },
    {
      name: "Professional Desktops",
      description: "Enhanced power for demanding applications",
      specs: [
        "Intel Core i7 / AMD Ryzen 7",
        "16GB - 32GB RAM",
        "512GB NVMe SSD + 2TB HDD",
        "Dedicated Graphics Card",
        "Multi-monitor support",
        "Tool-less chassis design",
        "3-year on-site warranty",
      ],
      icon: Cpu,
      popular: true,
    },
    {
      name: "Engineering Workstations",
      description: "Maximum performance for CAD and rendering",
      specs: [
        "Intel Xeon / AMD Threadripper",
        "32GB - 128GB ECC RAM",
        "1TB NVMe SSD + 4TB HDD",
        "Professional Graphics (Quadro/Radeon Pro)",
        "ISV Certified",
        "Redundant storage options",
        "Premium support with 4-hour response",
      ],
      icon: Zap,
    },
  ];

  const features = [
    {
      icon: Cpu,
      title: "Powerful Processing",
      description: "Latest generation processors for maximum productivity",
    },
    {
      icon: HardDrive,
      title: "Expandable Storage",
      description: "Multiple drive bays for flexible storage configurations",
    },
    {
      icon: Monitor,
      title: "Multi-Display Support",
      description: "Drive multiple monitors for enhanced workflow",
    },
    {
      icon: Zap,
      title: "Easy Upgrades",
      description: "Tool-less design for simple component upgrades",
    },
  ];

  const useCases = [
    {
      title: "Office Productivity",
      applications: [
        "Microsoft Office Suite",
        "Email & Web Browsing",
        "Document Management",
        "Video Conferencing",
      ],
    },
    {
      title: "Design & Creative",
      applications: [
        "Adobe Creative Cloud",
        "AutoCAD",
        "3D Rendering",
        "Video Editing",
      ],
    },
    {
      title: "Engineering & CAD",
      applications: ["SolidWorks", "Revit", "CATIA", "ANSYS Simulation"],
    },
    {
      title: "Financial Services",
      applications: [
        "ERP Software",
        "Database Applications",
        "Trading Platforms",
        "Analytics Tools",
      ],
    },
  ];

  const brands = [
    "Dell OptiPlex",
    "HP EliteDesk",
    "Lenovo ThinkCentre",
    "HP Z-Series",
  ];

  const services = [
    "Custom configuration to your specifications",
    "Pre-installation of business software",
    "Data migration from old systems",
    "Multi-monitor setup and calibration",
    "Network configuration",
    "Ongoing support and maintenance",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <HeroSection
        badge={"  Desktop Workstations"}
        title1="Custom Desktop"
        title2="Workstations"
        description="    Power your business with customizable desktop solutions from
                  Able Software Solution. From office productivity to
                  professional workstations, we deliver systems configured
                  precisely to your requirements."
        onPageChange={onPageChange}
        imgSrc={"/images/desktops1.jpeg"}
      />

      {/* Desktop Categories */}
      <AnimatedSection className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
              Desktop Configurations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored desktop solutions for every business need and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {desktopCategories.map((desktop, index) => (
              <motion.div
                key={desktop.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {desktop.popular && (
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
                  className={`p-8 h-full ${desktop.popular
                      ? "ring-2 ring-[#018136] shadow-2xl"
                      : "shadow-lg"
                    }`}
                >
                  <motion.div
                    className={`w-12 h-12 ${desktop.popular ? "bg-[#018136]" : "bg-[#018136]/10"
                      } rounded-xl flex items-center justify-center mb-6`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <desktop.icon
                      className={`w-6 h-6 ${desktop.popular ? "text-white" : "text-[#018136]"
                        }`}
                    />
                  </motion.div>

                  <h3 className="text-2xl text-gray-900 mb-2">
                    {desktop.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{desktop.description}</p>

                  <div className="space-y-3 mb-8">
                    {desktop.specs.map((spec, specIndex) => (
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

                  <Button
                    onClick={() => onPageChange("contact")}
                    className={`w-full py-3 rounded-full ${desktop.popular
                        ? "bg-[#018136] hover:bg-[#016429] text-white"
                        : "border-[#018136] text-[#018136] hover:bg-[#018136] hover:text-white"
                      }`}
                    variant={desktop.popular ? "default" : "outline"}
                  >
                    Customize & Order
                  </Button>
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
              Desktop Advantages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why desktop workstations remain the choice for serious business
              users
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

      {/* Use Cases */}
      <AnimatedSection className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desktops configured for specific industry needs and applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl text-gray-900 mb-4">
                    {useCase.title}
                  </h3>
                  <div className="space-y-3">
                    {useCase.applications.map((app, appIndex) => (
                      <div
                        key={appIndex}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-1.5 h-1.5 bg-[#018136] rounded-full flex-shrink-0" />
                        <span className="text-gray-700">{app}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Brands & Services */}
      <AnimatedSection className="px-6 py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Brands */}
            <div>
              <h2 className="text-3xl text-gray-900 mb-6">
                Trusted Desktop Brands
              </h2>
              <p className="text-gray-600 mb-8">
                We offer business-class desktops from industry-leading
                manufacturers
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
                Complete Desktop Services
              </h2>
              <p className="text-gray-600 mb-8">
                Comprehensive services to ensure seamless desktop deployment and
                operation
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
      <CTASection onPageChange={onPageChange} />
    </div>
  );
}
