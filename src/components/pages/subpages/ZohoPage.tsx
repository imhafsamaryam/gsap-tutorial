import { motion } from "motion/react";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { AnimatedSection } from "../../ui/animated-section";
import {
  CheckCircle,
  Cloud,
  Settings,
  Users,
  Zap,
  Shield,
  ArrowRight,
  Award,
  HeadphonesIcon,
} from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { CTASection } from "../../CTASection";
import { HeroSection } from "../../HeroSection";
import React from "react";

interface ZohoPageProps {
  onPageChange: (page: string) => void;
}

export function ZohoPage({ onPageChange }: ZohoPageProps) {
  const features = [
    {
      icon: Cloud,
      title: "Cloud-First Platform",
      description:
        "Access your business tools from anywhere with Zoho's comprehensive cloud ecosystem",
    },
    {
      icon: Settings,
      title: "Customizable Workflows",
      description:
        "Tailor every aspect of Zoho applications to match your unique business processes",
    },
    {
      icon: Users,
      title: "Multi-User Collaboration",
      description:
        "Enable seamless teamwork with role-based access and real-time collaboration features",
    },
    {
      icon: Zap,
      title: "Process Automation",
      description:
        "Automate repetitive tasks and streamline operations across all departments",
    },
    {
      icon: Shield,
      title: "UAE Compliance Ready",
      description:
        "Built-in VAT support and FTA compliance for UAE business requirements",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description:
        "Trusted by thousands of businesses across the Middle East and globally",
    },
  ];

  const zohoProduc = [
    {
      name: "Zoho Books",
      description: "Simplify Financial Management for UAE Enterprises",
      features: [
        "Automated invoicing and billing",
        "Bank reconciliation",
        "UAE VAT-compliant reporting for FTA",
        "Real-time financial insights",
        "Multi-currency capabilities",
      ],
    },
    {
      name: "Zoho CRM",
      description: "Engineered for UAE's Fast-Paced Market",
      features: [
        "Intelligent lead management and scoring",
        "Customer segmentation tools",
        "Multi-channel communication (Email, WhatsApp)",
        "Arabic language support",
        "Mobile CRM access for field teams",
        "Sales forecasting and analytics",
      ],
    },
    {
      name: "Zoho One",
      description: "Complete Business Operating System",
      features: [
        "All Zoho applications in one unified license",
        "HR and payroll automation",
        "Supply chain and inventory control",
        "Customer service workflow management",
        "Seamless app-to-app integration",
      ],
    },
  ];

  const services = [
    {
      title: "End-to-End Implementation",
      description:
        "Comprehensive deployment from requirement analysis to go-live support",
      points: [
        "Business needs assessment",
        "Custom workflow configuration",
        "Data migration from legacy systems",
        "Security and role-based setup",
        "Third-party software integration",
      ],
    },
    {
      title: "Integration Services",
      description: "Connect Zoho with your existing business ecosystem",
      points: [
        "ERP and accounting system integration",
        "E-commerce platform connections",
        "HRMS and payroll synchronization",
        "POS and inventory system linking",
        "Custom API development",
      ],
    },
    {
      title: "Expert Consulting & Support",
      description: "Strategic guidance and ongoing technical assistance",
      points: [
        "Dedicated account management",
        "UAE business hours support",
        "Certified Zoho consultants",
        "Periodic system health checks",
        "Priority incident resolution",
      ],
    },
  ];

  const whyChoose = [
    {
      title: "Authorized Zoho Partner",
      description:
        "Official reseller status with certified consultants and proven implementation expertise",
    },
    {
      title: "20+ Years of UAE Presence",
      description:
        "Deep understanding of local business practices, regulations, and market dynamics",
    },
    {
      title: "Industry-Specific Solutions",
      description:
        "Tailored implementations for retail, hospitality, real estate, and professional services",
    },
    {
      title: "Measurable Results",
      description:
        "Track record of helping businesses achieve digital transformation goals across the region",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <HeroSection
        badge={"AUTHORIZED ZOHO PARTNER IN DUBAI"}
        title1="Transform Your Business with"
        title2="Zoho Cloud Solutions"
        description="    Streamline operations with cloud-based business applications
                tailored for UAE organizations. As your trusted Zoho authorized
                partner in Dubai, Able Software Solution empowers businesses to
                leverage Zoho's comprehensive suite—from CRM and accounting to
                HR and automation tools."
        onPageChange={onPageChange}
        imgSrc={"/zoho.webp"}
      />

      {/* Why Choose Zoho */}
      <AnimatedSection className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
              Why Choose Zoho for Your UAE Business?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zoho provides over 50 cloud applications engineered to enhance
              business efficiency. Whether managing finances, customer
              relationships, projects, or HR functions, Zoho cloud software in
              Dubai adapts to your workflow seamlessly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
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
                    <feature.icon className="w-6 h-6 text-[#018136] group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                  <h3 className="text-xl text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Zoho Products */}
      <AnimatedSection className="px-6 py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
              Comprehensive Zoho Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In UAE's dynamic business landscape, affordable, scalable, and
              compliant solutions are essential. Zoho delivers exactly
              that—enabling process automation, real-time decision-making, and
              strategic growth.
            </p>
          </div>

          <div className="space-y-8">
            {zohoProduc.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 hover:shadow-xl transition-all duration-300">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl text-gray-900 mb-3">
                        {product.name}
                      </h3>
                      <p className="text-lg text-gray-600 mb-6">
                        {product.description}
                      </p>
                      <Button
                        onClick={() => onPageChange("contact")}
                        className="bg-[#018136] hover:bg-[#016429] text-white px-6 py-2 rounded-full"
                      >
                        Learn More
                      </Button>
                    </div>
                    <div className="space-y-3">
                      {product.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: index * 0.1 + featureIndex * 0.05,
                          }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="w-5 h-5 text-[#018136] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Services */}
      <AnimatedSection className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
              Our Zoho Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As your Zoho implementation partner in UAE, we provide
              comprehensive services beyond software installation—from needs
              analysis to extended technical support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-3">
                    {service.points.map((point, pointIndex) => (
                      <div
                        key={pointIndex}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-1.5 h-1.5 bg-[#018136] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Why Able Software Solution */}
      <AnimatedSection className="px-6 py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
              Why Choose Able Software Solution?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over 20 years serving the UAE technology market, we're more
              than a vendor—we're your strategic growth partner. As an
              award-winning IT and ERP solutions provider, we combine
              world-class software like Zoho with local expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChoose.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#018136] rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl text-gray-900 mb-2">
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

      {/* CTA Section */}
      <CTASection onPageChange={onPageChange} />
    </div>
  );
}
