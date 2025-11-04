import { motion } from "motion/react";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { AnimatedSection } from "../../ui/animated-section";
import React from "react";
import {
  CheckCircle,
  IndianRupee,
  FileText,
  Calculator,
  Users,
  BarChart3,
  Shield,
  ArrowRight,
} from "lucide-react";
import { CTASection } from "../../CTASection";
import { HeroSection } from "../../HeroSection";
import { Link } from "react-router-dom";

export function BusyAccountingPage() {
  const features = [
    {
      icon: IndianRupee,
      title: "VAT Ready",
      description: "Complete VAT compliance with auto-calculations",
    },
    {
      icon: FileText,
      title: "Invoicing",
      description: "Professional invoicing with customizable templates",
    },
    {
      icon: Calculator,
      title: "Accounting",
      description: "Complete double-entry accounting system",
    },
    {
      icon: Users,
      title: "Multi-User",
      description: "Support for multiple users with role-based access",
    },
    {
      icon: BarChart3,
      title: "Reports",
      description: "100+ built-in reports for business insights",
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Bank-level security for your financial data",
    },
  ];

  const versions = [
    {
      name: "Busy Basic",
      price: 9000,
      description: "Essential accounting for small businesses",
      features: [
        "Single User License",
        "Basic Accounting",
        "VAT Compliant",
        "Basic Reports",
        "Email Support",
      ],
      popular: false,
    },
    {
      name: "Busy Standard",
      price: 18000,
      description: "Advanced features for growing businesses",
      features: [
        "Multi-User (3 Users)",
        "Inventory Management",
        "Payroll Processing",
        "Advanced Reports",
        "Job Work Management",
        "Phone Support",
      ],
      popular: true,
    },
    {
      name: "Busy Enterprise",
      price: 54000,
      description: "Complete business management solution",
      features: [
        "Unlimited Users",
        "Manufacturing Module",
        "Multi-Location Support",
        "Advanced Security",
        "Custom Reports",
        "Priority Support",
        "On-site Training",
      ],
      popular: false,
    },
  ];

  // const gstFeatures = [
  //   "GSTR-1, GSTR-2A, GSTR-3B Generation",
  //   "E-Way Bill Integration",
  //   "HSN/SAC Code Management",
  //   "Reverse Charge Calculation",
  //   "Input Tax Credit Tracking",
  //   "GST Reconciliation Reports",
  // ];

  const stats = [
    { value: 100000, label: "Active Users", suffix: "+" },
    { value: 25, label: "Years Experience", suffix: "+" },
    { value: 99, label: "Customer Satisfaction", suffix: "%" },
    { value: 500, label: "Cities Covered", suffix: "+" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Hero Section */}

      <HeroSection
        badge={"VAT Compliant Accounting Software"}
        title1="Busy Accounting"
        title2="Made Simple"
        description="UAE's most trusted accounting software with comprehensive
                VAT Compliant, inventory management, and business
                  intelligence for all business sizes."
        imgSrc={"/erpsoftwares.jpg"}
      />

      {/* Key Features */}
      <AnimatedSection className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
              Complete Business Accounting Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Busy Accounting provides all the tools you need to manage your
              business finances efficiently
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
                    className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#018136] transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <feature.icon className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors duration-300" />
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

      {/* GST Compliance Section */}
      {/* <AnimatedSection className="px-6 py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl text-gray-900 mb-6">
                Complete GST Compliance
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Stay compliant with all GST regulations effortlessly. Busy
                Accounting handles all GST calculations, returns, and reporting
                automatically.
              </p>

              <div className="space-y-4">
                {gstFeatures.map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#018136] flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#018136]/20 to-orange-500/20 rounded-3xl blur-3xl" />
              <Card className="relative p-8 bg-white shadow-2xl">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#018136] text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                    GST
                  </div>
                  <h3 className="text-2xl text-gray-900 mb-4">GST Certified</h3>
                  <p className="text-gray-600 mb-6">
                    Approved by GST Network (GSTN) for seamless compliance and
                    filing.
                  </p>
                  <Badge className="bg-[#018136]/10 text-[#018136] border-[#018136]/20">
                    GSTN Approved Software
                  </Badge>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </AnimatedSection> */}

      {/* Pricing Plans */}
      <AnimatedSection className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
              Choose Your Busy Version
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the version that best fits your business needs. All
              versions include VAT compliant.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {versions.map((version, index) => (
              <motion.div
                key={version.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {version.popular && (
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
                    version.popular
                      ? "ring-2 ring-[#018136] shadow-2xl"
                      : "shadow-lg"
                  }`}
                >
                  <div className="text-center mb-2">
                    <h3 className="text-2xl text-gray-900 mb-2">
                      {version.name}
                    </h3>
                    <p className="text-gray-600">{version.description}</p>
                   {/* <div className="flex items-baseline justify-center">
                      <span className="text-4xl text-[#018136]">
                        ₹{version.price.toLocaleString()}
                      </span>
                      <span className="text-gray-600 ml-1">/year</span>
                    </div> */}
                  </div>

                  <div className="space-y-4 mb-8">
                    {version.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-center mx-auto space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.1 + featureIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="w-5 h-5 text-[#018136] flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Link to="/contact">
                    <Button
                      className={`w-full py-3 rounded-full ${
                        version.popular
                          ? "bg-[#018136] hover:bg-[#016429] text-white"
                          : "border-[#018136] text-[#018136] hover:bg-[#018136] hover:text-white"
                      }`}
                      variant={version.popular ? "default" : "outline"}
                    >
                      Get Started
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Support & Training */}
      <AnimatedSection className="px-6 py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
              Complete Support & Training
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive support to ensure you get the most out of
              Busy Accounting
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Installation",
                description: "Free software installation and setup",
              },
              {
                title: "Data Migration",
                description: "Transfer data from existing systems",
              },
              {
                title: "User Training",
                description: "Comprehensive training for all users",
              },
              {
                title: "Ongoing Support",
                description: "24/7 technical support and assistance",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                  <motion.div
                    className="w-12 h-12 bg-[#018136]/10 rounded-xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-xl text-[#018136]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
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

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
