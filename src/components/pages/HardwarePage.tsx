import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { AnimatedSection } from "../ui/animated-section";
import {
  CheckCircle,
  Server,
  Laptop,
  Monitor,
  Shield,
  Zap,
  Users,
  Building,
  Cpu,
  HardDrive,
  Battery,
  ArrowRight,
} from "lucide-react";
import { CTASection } from "../CTASection";
import { HeroSection } from "../HeroSection";
import React, { useEffect, useRef } from "react";
import { ERPSolutionsGrid } from "../ERPGrid";

interface HardwarePageProps {
  initialSection?: string;
}

export function HardwarePage({ initialSection }: HardwarePageProps) {
  const navigate = useNavigate();
  const serversRef = useRef<HTMLDivElement>(null);
  const laptopsRef = useRef<HTMLDivElement>(null);
  const desktopsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const refs = {
      servers: serversRef,
      laptops: laptopsRef,
      desktops: desktopsRef,
    };

    if (initialSection && refs[initialSection as keyof typeof refs]) {
      refs[initialSection as keyof typeof refs].current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [initialSection]);

  const hardwareSolutions = [
    {
      id: "servers",
      name: "Enterprise Servers",
      description:
        "High-performance server solutions for businesses of all sizes, from entry-level to enterprise-grade infrastructure",
      icon: Server,
      color: "from-blue-500 to-cyan-500",
      categoryBadge: "Infrastructure",
      features: [
        "Intel Xeon & AMD EPYC Processors",
        "64GB - 1TB+ ECC Memory",
        "RAID 1/5/10 Storage Configurations",
        "Redundant Power Supplies",
        "Remote Management (iDRAC/iLO)",
        "Hot-swap Drive Bays",
      ],
      benefits: [
        "99.9% uptime guarantee",
        "Scalable for business growth",
        "Enterprise-grade reliability",
        "24/7 monitoring and support",
      ],
      imageSrc: "/servers.webp",
      path: "/contact",
    },
    {
      id: "laptops",
      name: "Business Laptops",
      description:
        "Reliable, high-performance laptops designed for productivity, security, and mobile workforce requirements",
      icon: Laptop,
      color: "from-purple-500 to-pink-500",
      categoryBadge: "Mobile Computing",
      features: [
        "Intel Core i5/i7/i9 & AMD Ryzen",
        "8GB - 64GB DDR5 Memory",
        "256GB - 2TB NVMe SSD Storage",
        '14" - 17" Business-grade Displays',
        "TPM 2.0 & Fingerprint Security",
        "All-day Battery Life",
      ],
      benefits: [
        "Enhanced workforce mobility",
        "Enterprise security features",
        "Long-term reliability",
        "Comprehensive warranty options",
      ],
      imageSrc: "/laptops.webp",
      path: "/contact",
    },
    {
      id: "desktops",
      name: "Desktop Workstations",
      description:
        "Customizable desktop solutions for office productivity, creative work, and demanding engineering applications",
      icon: Monitor,
      color: "from-green-500 to-emerald-500",
      categoryBadge: "Workstations",
      features: [
        "Intel Core & Xeon Processors",
        "8GB - 128GB Memory Options",
        "SSD + HDD Storage Combinations",
        "Integrated & Dedicated Graphics",
        "Multi-monitor Support",
        "Tool-less Chassis Design",
      ],
      benefits: [
        "Maximum performance per dollar",
        "Easy upgrades and maintenance",
        "Enhanced productivity setups",
        "Reliable for heavy workloads",
      ],
      imageSrc: "/desktops1.jpeg",
      path: "/contact",
    },
  ];

  const stats = [
    { icon: Server, number: "500+", label: "Server Deployments" },
    { icon: Laptop, number: "2000+", label: "Laptops Deployed" },
    { icon: Shield, number: "99.8%", label: "Client Satisfaction" },
    { icon: Users, number: "24/7", label: "Technical Support" },
  ];

  const industries = [
    "Healthcare",
    "Finance & Banking",
    "Education",
    "Manufacturing",
    "Retail & E-commerce",
    "Professional Services",
    "Government",
    "Startups",
  ];

  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Hardware-level security features including TPM 2.0 and secure boot",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Latest generation processors and fast storage solutions",
    },
    {
      icon: Cpu,
      title: "Reliable Components",
      description:
        "Quality components from trusted manufacturers with extended warranties",
    },
    {
      icon: HardDrive,
      title: "Scalable Solutions",
      description: "Configurations that grow with your business requirements",
    },
  ];

  const brands = [
    "Dell Technologies",
    "HP Enterprise",
    "Lenovo ThinkSeries",
    "Fujitsu PRIMERGY",
    "Microsoft Surface",
    "Apple Mac Pro",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <HeroSection
        badge={"Enterprise Hardware Solutions"}
        title1="Business Hardware"
        title2="& Infrastructure"
        description="Comprehensive hardware solutions from enterprise servers to business laptops and desktop workstations. We provide reliable, high-performance computing infrastructure tailored to your business needs."
        imgSrc={"/laptops.jpg"}
      />

      {/* Stats Section */}
      <AnimatedSection className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#018136]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-[#018136]" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Hardware Solutions */}
      <ERPSolutionsGrid
        solutions={hardwareSolutions}
        onLearnMore={(solution) => {
          console.log("Learn more about:", solution.name);
        }}
      />

      {/* Key Features */}
      {/* <AnimatedSection className="px-6 py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 py-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Enterprise-Grade Features
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All our hardware solutions come with enterprise-class features for
              reliability, security, and performance
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
              Industries We Serve
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our hardware solutions are designed to meet the unique
              requirements of various industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-0 group cursor-pointer">
                  <div className="w-12 h-12 bg-[#018136]/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#018136] transition-colors duration-300">
                    <Building className="w-6 h-6 text-[#018136] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-gray-900 font-medium">{industry}</h3>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

       <AnimatedSection className="px-6 py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 py-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Trusted Hardware Brands
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with industry-leading manufacturers to provide you with
              reliable, high-performance hardware solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {brands.map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-0 group cursor-pointer">
                  <div className="w-16 h-16 bg-[#018136]/5 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#018136] transition-colors duration-300">
                    <Server className="w-8 h-8 text-[#018136] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-gray-900 font-medium text-sm">{brand}</h3>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

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
              Our Hardware Deployment Process
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to ensure successful hardware deployment and
              optimal performance
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Needs Assessment",
                description:
                  "Analyze your requirements and recommend optimal hardware configurations",
              },
              {
                step: "02",
                title: "Solution Design",
                description:
                  "Design the hardware architecture and deployment plan",
              },
              {
                step: "03",
                title: "Deployment & Setup",
                description:
                  "Install, configure, and integrate hardware with your systems",
              },
              {
                step: "04",
                title: "Support & Maintenance",
                description:
                  "Provide ongoing support, monitoring, and maintenance services",
              },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  className="w-16 h-16 bg-[#018136] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  {phase.step}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {phase.title}
                </h3>
                <p className="text-gray-600">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection> */}

      <CTASection />
    </div>
  );
}
