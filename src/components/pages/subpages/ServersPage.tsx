import { motion } from "motion/react";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { AnimatedSection } from "../../ui/animated-section";
import {
  CheckCircle,
  Server,
  Shield,
  Zap,
  HardDrive,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { CTASection } from "../../CTASection";
import { HeroSection } from "../../HeroSection";
import React from "react";

interface ServersPageProps {
  onPageChange: (page: string) => void;
}

export function ServersPage({ onPageChange }: ServersPageProps) {
  const serverTypes = [
    {
      name: "Entry-Level Servers",
      description: "Perfect for small businesses and startups",
      specs: [
        "Intel Xeon E-series processors",
        "16GB - 64GB RAM",
        "1TB - 4TB storage",
        "RAID 1 configuration",
        "Single power supply",
        "3-year warranty",
      ],
      icon: Server,
    },
    {
      name: "Mid-Range Servers",
      description: "Ideal for growing businesses",
      specs: [
        "Intel Xeon Scalable processors",
        "64GB - 256GB RAM",
        "4TB - 16TB storage",
        "RAID 5/10 configuration",
        "Redundant power supplies",
        "Hot-swap drive bays",
        "5-year warranty",
      ],
      icon: Zap,
      popular: true,
    },
    {
      name: "Enterprise Servers",
      description: "For mission-critical applications",
      specs: [
        "Dual Intel Xeon Platinum processors",
        "256GB - 1TB+ RAM",
        "16TB - 100TB+ storage",
        "Advanced RAID configurations",
        "Fully redundant components",
        "Remote management (iDRAC/iLO)",
        "24/7 support with 4-hour response",
      ],
      icon: Shield,
    },
  ];

  const features = [
    {
      icon: Cpu,
      title: "High Performance",
      description:
        "Latest generation processors for maximum computing power and efficiency",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Advanced security features including TPM 2.0, secure boot, and hardware encryption",
    },
    {
      icon: HardDrive,
      title: "Scalable Storage",
      description:
        "Flexible storage options with support for SSD, HDD, and NVMe drives",
    },
    {
      icon: Zap,
      title: "Energy Efficient",
      description:
        "80 PLUS certified power supplies reducing energy costs and environmental impact",
    },
  ];

  const brands = [
    "Dell PowerEdge",
    "HP ProLiant",
    "Lenovo ThinkSystem",
    "Fujitsu PRIMERGY",
  ];

  const services = [
    "Server configuration and setup",
    "Operating system installation",
    "RAID configuration",
    "Network integration",
    "Data migration services",
    "Ongoing maintenance and support",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <HeroSection
        badge={"Enterprise Hardware"}
        title1="High-Performance"
        title2="Server Solutions"
        description=" Power your business with enterprise-grade servers from Able
                  Software Solution. We provide robust, scalable server
                  infrastructure tailored to your specific business requirements
                  and growth objectives."
        onPageChange={onPageChange}
        imgSrc={"/images/servers.webp"}
      />

      {/* Server Types */}
      <AnimatedSection className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
              Server Configurations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of server solutions designed for different
              business sizes and requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serverTypes.map((server, index) => (
              <motion.div
                key={server.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {server.popular && (
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
                  className={`p-8 h-full ${server.popular
                    ? "ring-2 ring-[#018136] shadow-2xl"
                    : "shadow-lg"
                    }`}
                >
                  <motion.div
                    className={`w-12 h-12 ${server.popular ? "bg-[#018136]" : "bg-[#018136]/10"
                      } rounded-xl flex items-center justify-center mb-6`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <server.icon
                      className={`w-6 h-6 ${server.popular ? "text-white" : "text-[#018136]"
                        }`}
                    />
                  </motion.div>

                  <h3 className="text-2xl text-gray-900 mb-2">{server.name}</h3>
                  <p className="text-gray-600 mb-6">{server.description}</p>

                  <div className="space-y-3 mb-8">
                    {server.specs.map((spec, specIndex) => (
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
                    className={`w-full py-3 rounded-full ${server.popular
                      ? "bg-[#018136] hover:bg-[#016429] text-white"
                      : "border-[#018136] text-[#018136] hover:bg-[#018136] hover:text-white"
                      }`}
                    variant={server.popular ? "default" : "outline"}
                  >
                    Get Quote
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
              Enterprise-Grade Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All our servers come equipped with enterprise-class features for
              reliability and performance
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
                Trusted Server Brands
              </h2>
              <p className="text-gray-600 mb-8">
                We partner with industry-leading manufacturers to provide you
                with the most reliable server solutions
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
                Complete Server Services
              </h2>
              <p className="text-gray-600 mb-8">
                Our comprehensive services ensure your server infrastructure is
                optimized and maintained
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
