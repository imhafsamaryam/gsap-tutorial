import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { AnimatedSection } from "../ui/animated-section";
import {
  CheckCircle,
  Cloud,
  Server,
  Shield,
  Database,
  Zap,
  Globe,
  Users,
  Target,
  Clock,
  Award,
  Cpu,
  Network,
  Lock,
  Scale,
  Monitor,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import { CTASection } from "../CTASection";
import { HeroSection } from "../HeroSection";
import React, { useEffect, useRef } from "react";

interface CloudHostingPageProps {
  onPageChange: (page: string) => void;
  initialSection?: string;
}

export function CloudHostingPage({
  onPageChange,
  initialSection,
}: CloudHostingPageProps) {
  const azureServices = [
    {
      title: "Azure Virtual Machines",
      description:
        "Scalable compute capacity with on-demand Windows and Linux virtual machines",
      icon: Server,
      features: ["Windows & Linux VMs", "Auto-scaling", "High Availability"],
    },
    {
      title: "Azure App Services",
      description:
        "Fully managed platform for building, deploying, and scaling web apps",
      icon: Globe,
      features: ["Multiple Languages", "Auto-scaling", "CI/CD Integration"],
    },
    {
      title: "Azure SQL Database",
      description:
        "Intelligent, fully managed relational database with auto-scaling",
      icon: Database,
      features: ["Fully Managed", "High Performance", "Built-in AI"],
    },
    {
      title: "Azure Kubernetes Service",
      description: "Managed Kubernetes container orchestration service",
      icon: Cpu,
      features: ["Managed Kubernetes", "Enterprise Security", "DevOps Ready"],
    },
  ];

  const tsplusFeatures = [
    {
      icon: Monitor,
      title: "Remote Desktop Access",
      description: "Access any Windows application remotely from any device",
    },
    {
      icon: Smartphone,
      title: "Multi-Device Support",
      description: "Works on Windows, Mac, iOS, Android, and Linux",
    },
    {
      icon: Users,
      title: "Multi-User Sessions",
      description: "Multiple users can work simultaneously on the same server",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SSL encryption and advanced security features",
    },
  ];

  const azureStats = [
    { icon: Cloud, number: "200+", label: "Azure Projects" },
    { icon: Clock, number: "10k+", label: "Cloud Hours" },
    { icon: Award, number: "99.9%", label: "Uptime SLA" },
    { icon: Shield, number: "60+", label: "Global Regions" },
  ];

  const tsplusStats = [
    { value: 50000, label: "Active Installations", suffix: "+" },
    { value: 140, label: "Countries", suffix: "+" },
    { value: 99.9, label: "Uptime Guarantee", suffix: "%" },
    { value: 24, label: "Support Hours", suffix: "/7" },
  ];

  const benefits = [
    {
      title: "Cost Efficiency",
      description: "Reduce IT infrastructure costs with pay-as-you-go pricing",
      icon: Scale,
    },
    {
      title: "Global Scale",
      description:
        "Deploy applications worldwide with low latency and high availability",
      icon: Globe,
    },
    {
      title: "Enterprise Security",
      description: "Multi-layered security with compliance certifications",
      icon: Shield,
    },
    {
      title: "Flexible Solutions",
      description:
        "Choose between comprehensive cloud platforms and specialized remote access",
      icon: Cloud,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <HeroSection
        badge={"Cloud Hosting Solutions"}
        title1="Cloud Hosting"
        title2="& Remote Access"
        description="Comprehensive cloud solutions from enterprise-grade Microsoft Azure to affordable TS Plus remote desktop hosting. Choose the perfect solution for your business needs."
        onPageChange={onPageChange}
        imgSrc={"/cloud-hosting.png"}
      />

      {/* Benefits Section */}
      <AnimatedSection className="px-6 py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-[#0078D4]/10 text-[#0078D4] px-4 py-2 uppercase">
                Why Choose Our Solutions
              </Badge>
              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 py-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Business Benefits
              </motion.h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Leverage the power of cloud computing to drive innovation,
                reduce costs, and enable remote work
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-[#0078D4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-[#0078D4]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Microsoft Azure Section */}
      <AnimatedSection className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-[#0078D4]/10 text-[#0078D4] px-4 py-2 uppercase">
                Enterprise Cloud Platform
              </Badge>
              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 py-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Microsoft Azure
              </motion.h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive cloud platform for building, deploying, and
                managing applications through Microsoft's global datacenter
                network
              </p>
            </motion.div>
          </div>

          {/* Azure Stats */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {azureStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#0078D4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-[#0078D4]" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Azure Services */}
          <div className="grid md:grid-cols-2 gap-8">
            {azureServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0 group cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#0078D4]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#0078D4] transition-colors duration-300">
                      <service.icon className="w-6 h-6 text-[#0078D4] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-[#0078D4]/10 text-[#0078D4]"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={() => onPageChange("contact")}
              className="bg-[#0078D4] hover:bg-[#106EBE] text-white px-8 py-3 rounded-full"
            >
              Get Azure Consultation
            </Button>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* TS Plus Section */}
      <AnimatedSection className="px-6 py-16 bg-gradient-to-br from-purple-50 to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-[#018136]/10 text-[#018136] px-4 py-2 uppercase">
                Remote Desktop Solution
              </Badge>
              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 py-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                TS Plus Remote Access
              </motion.h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Affordable and powerful remote desktop solution that enables
                secure access to Windows applications from any device, anywhere
              </p>
            </motion.div>
          </div>

          {/* TS Plus Stats */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {tsplusStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#018136]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl font-bold text-[#018136]">
                    {stat.value}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* TS Plus Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {tsplusFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-0 bg-white">
                  <div className="w-12 h-12 bg-[#018136]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#018136] transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-[#018136] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* TS Plus Packages */}
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              {
                name: "TS Plus Essentials",
                price: 8000,
                features: [
                  "5 Concurrent Users",
                  "Basic Web Portal",
                  "Standard Security",
                  "Email Support",
                ],
                popular: false,
              },
              {
                name: "TS Plus Professional",
                price: 20000,
                features: [
                  "15 Concurrent Users",
                  "Advanced Web Portal",
                  "Load Balancing",
                  "Priority Support",
                  "Mobile Apps",
                ],
                popular: true,
              },
              {
                name: "TS Plus Enterprise",
                price: 50000,
                features: [
                  "Unlimited Users",
                  "Custom Branding",
                  "High Availability",
                  "24/7 Support",
                  "API Integration",
                ],
                popular: false,
              },
            ].map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#018136] text-white px-4 py-1">
                    Most Popular
                  </Badge>
                )}
                <Card
                  className={`p-6 h-full ${
                    pkg.popular ? "ring-2 ring-[#018136]" : ""
                  }`}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {pkg.name}
                    </h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl text-[#018136]">
                        ₹{pkg.price.toLocaleString()}
                      </span>
                      <span className="text-gray-600 ml-1">/year</span>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#018136] flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={() => onPageChange("contact")}
                    className={`w-full ${
                      pkg.popular
                        ? "bg-[#018136] hover:bg-[#016429] text-white"
                        : "border-[#018136] text-[#018136] hover:bg-[#018136] hover:text-white"
                    }`}
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Comparison Section */}
      <AnimatedSection className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 py-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Choose the Right Solution
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you need comprehensive cloud infrastructure or specialized
              remote access, we have the perfect solution
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 border-2 border-[#0078D4]/20 hover:border-[#0078D4] transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#0078D4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cloud className="w-8 h-8 text-[#0078D4]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Microsoft Azure
                  </h3>
                  <p className="text-gray-600">Enterprise Cloud Platform</p>
                </div>
                <div className="space-y-4">
                  {[
                    "Complete cloud infrastructure",
                    "Global scale with 60+ regions",
                    "AI and machine learning services",
                    "Enterprise security and compliance",
                    "Hybrid cloud capabilities",
                    "Pay-as-you-go pricing",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#0078D4] flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button
                  onClick={() => onPageChange("contact")}
                  className="w-full mt-6 bg-[#0078D4] hover:bg-[#106EBE] text-white"
                >
                  Choose Azure
                </Button>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 border-2 border-[#018136]/20 hover:border-[#018136] transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#018136]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Monitor className="w-8 h-8 text-[#018136]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    TS Plus
                  </h3>
                  <p className="text-gray-600">Remote Desktop Solution</p>
                </div>
                <div className="space-y-4">
                  {[
                    "Remote application access",
                    "Multi-device support",
                    "Easy to deploy and manage",
                    "Cost-effective licensing",
                    "Quick setup and deployment",
                    "Perfect for remote work",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#018136] flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button
                  onClick={() => onPageChange("contact")}
                  className="w-full mt-6 bg-[#018136] hover:bg-[#016429] text-white"
                >
                  Choose TS Plus
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <CTASection onPageChange={onPageChange} />
    </div>
  );
}
