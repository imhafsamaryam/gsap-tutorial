import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { AnimatedSection } from "../ui/animated-section";
import {
  CheckCircle,
  Cloud,
  Shield,
  Zap,
  Users,
  Globe,
  Database,
  Server,
  Monitor,
  Building,
  ArrowRight,
} from "lucide-react";
import { CTASection } from "../CTASection";
import { HeroSection } from "../HeroSection";
import React, { useEffect, useRef } from "react";
import { ERPSolutionsGrid } from "../ERPGrid";

interface CloudHostingPageProps {
  initialSection?: string;
}

export function CloudHostingPage({ initialSection }: CloudHostingPageProps) {
  const navigate = useNavigate();
  const azureRef = useRef<HTMLDivElement>(null);
  const tsplusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const refs = {
      azure: azureRef,
      tsplus: tsplusRef,
    };

    if (initialSection && refs[initialSection as keyof typeof refs]) {
      refs[initialSection as keyof typeof refs].current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [initialSection]);

  const cloudSolutions = [
    {
      id: "azure",
      name: "Microsoft Azure",
      description:
        "Enterprise-grade cloud platform with comprehensive infrastructure and platform services for scalable business solutions",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      categoryBadge: "Enterprise Cloud",
      features: [
        "Virtual Machines & App Services",
        "Azure SQL Database",
        "Kubernetes Service",
        "Global Data Centers",
        "AI & Machine Learning",
        "Enterprise Security",
      ],
      benefits: [
        "Global scale with 60+ regions",
        "Enterprise-grade security & compliance",
        "Pay-as-you-go pricing model",
        "Hybrid cloud capabilities",
      ],
      imageSrc: "/azure.png",
      path: "/contact",
    },
    {
      id: "tsplus",
      name: "TS Plus",
      description:
        "Affordable and powerful remote desktop solution enabling secure access to Windows applications from any device",
      icon: Monitor,
      color: "from-green-500 to-emerald-500",
      categoryBadge: "Remote Access",
      features: [
        "Remote Desktop Access",
        "Multi-Device Support",
        "Multi-User Sessions",
        "Enterprise Security",
        "Easy Deployment",
        "Cost-Effective Licensing",
      ],
      benefits: [
        "Access from any device, anywhere",
        "Quick setup and deployment",
        "Perfect for remote work",
        "Affordable pricing plans",
      ],
      imageSrc: "/tsplus.png",
      path: "/contact",
    },
  ];

  const stats = [
    { icon: Cloud, number: "200+", label: "Cloud Projects" },
    { icon: Users, number: "50k+", label: "Active Users" },
    { icon: Shield, number: "99.9%", label: "Uptime SLA" },
    { icon: Globe, number: "60+", label: "Global Regions" },
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <HeroSection
        badge={"Cloud & Remote Solutions"}
        title1="Cloud Hosting"
        title2="& Remote Access"
        description="Comprehensive cloud solutions from enterprise-grade Microsoft Azure to affordable TS Plus remote desktop hosting. Choose the perfect solution for your business needs."
        imgSrc={"/cloudhosting.jpg"}
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
                <div className="w-16 h-16 bg-[#0078D4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-[#0078D4]" />
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
      {/* Cloud Solutions */}
      <ERPSolutionsGrid
        solutions={cloudSolutions}
        onLearnMore={(solution) => {
          console.log("Learn more about:", solution.name);
        }}
      />
      {/* Industries Served */}
      {/* <AnimatedSection className="px-6 py-16 bg-white">
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
              Our cloud solutions are designed to meet the unique needs of
              various industries
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
                  <div className="w-12 h-12 bg-[#0078D4]/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#0078D4] transition-colors duration-300">
                    <Building className="w-6 h-6 text-[#0078D4] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-gray-900 font-medium">{industry}</h3>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection> */}
      {/* Implementation Process
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
              Our Implementation Process
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to ensure successful cloud deployment and
              maximum ROI
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment & Planning",
                description:
                  "Analyze your requirements and create a customized cloud strategy",
              },
              {
                step: "02",
                title: "Solution Design",
                description:
                  "Design the optimal cloud architecture and migration plan",
              },
              {
                step: "03",
                title: "Deployment & Migration",
                description:
                  "Implement the solution with secure data migration and configuration",
              },
              {
                step: "04",
                title: "Optimization & Support",
                description:
                  "Continuous monitoring, optimization, and 24/7 support",
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
                  className="w-16 h-16 bg-[#0078D4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg"
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
