import { motion } from "motion/react";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { AnimatedSection } from "../../ui/animated-section";
import {
  CheckCircle,
  Code,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { CTASection } from "../../CTASection";
import { HeroSection } from "../../HeroSection";
import React from "react";

interface ProductDevelopmentPageProps {
  onPageChange: (page: string) => void;
}

export function ProductDevelopmentPage({
  onPageChange,
}: ProductDevelopmentPageProps) {
  const services = [
    {
      icon: Code,
      title: "Custom ERP Development",
      description:
        "Tailored enterprise resource planning solutions designed specifically for your business workflows",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android platforms",
    },
    {
      icon: Globe,
      title: "Web Application Development",
      description:
        "Scalable, responsive web applications using modern frameworks and technologies",
    },
    {
      icon: Database,
      title: "Database Design & Optimization",
      description:
        "Efficient database architecture and performance tuning for optimal data management",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Cloud-native applications and migration services for Azure, AWS, and Google Cloud",
    },
    {
      icon: Cpu,
      title: "API Development & Integration",
      description:
        "RESTful and GraphQL APIs with seamless third-party system integrations",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description:
        "We analyze your business requirements, workflows, and objectives to create a comprehensive project roadmap",
    },
    {
      step: "02",
      title: "Design & Planning",
      description:
        "Our team develops detailed technical specifications, architecture designs, and project timelines",
    },
    {
      step: "03",
      title: "Development",
      description:
        "Agile development process with regular sprints, code reviews, and quality assurance testing",
    },
    {
      step: "04",
      title: "Deployment & Support",
      description:
        "Smooth deployment to production with comprehensive training and ongoing technical support",
    },
  ];

  const technologies = [
    ".NET Core",
    "React",
    "Angular",
    "Node.js",
    "Python",
    "Java",
    "SQL Server",
    "PostgreSQL",
    "MongoDB",
    "Azure",
    "AWS",
    "Docker",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <HeroSection
        badge={"  Custom Software Development"}
        title1="Product Development"
        title2="Services"
        description="  Transform your business ideas into robust, scalable software
                  solutions. Able Software Solution delivers custom development
                  services that align perfectly with your unique business
                  requirements and strategic goals."
        onPageChange={onPageChange}
        imgSrc={"/product4.jpg"}
      />
      {/* Services */}
      <AnimatedSection className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
              Our Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive software development solutions powered by
              cutting-edge technologies and industry best practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <motion.div
                    className="w-12 h-12 bg-[#018136]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#018136] transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <service.icon className="w-6 h-6 text-[#018136] group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                  <h3 className="text-xl text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Development Process */}
      <AnimatedSection className="px-6 py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures on-time delivery, quality code,
              and successful project outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="text-5xl font-bold text-[#018136]/20">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Technologies */}
      <AnimatedSection className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
              Technologies We Work With
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern technology stack for building robust, scalable, and secure
              applications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#018136]/5 to-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-gray-900">{tech}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <CTASection onPageChange={onPageChange} />
    </div>
  );
}
