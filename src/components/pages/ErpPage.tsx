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
  BarChart3,
  Building,
  Globe,
  Database,
  Workflow,
  Target,
  ArrowRight,
} from "lucide-react";
import { CTASection } from "../CTASection";
import { HeroSection } from "../HeroSection";
import React, { useEffect, useRef } from "react";
import { ERPSolutionsGrid } from "../ERPGrid";

interface ERPSoftwaresPageProps {
  // Remove onPageChange prop since we'll use React Router
  initialSection?: string;
}

export function ERPSoftwaresPage({ initialSection }: ERPSoftwaresPageProps) {
  const navigate = useNavigate();
  const sage300Ref = useRef<HTMLDivElement>(null);
  const sage200Ref = useRef<HTMLDivElement>(null);
  const busyRef = useRef<HTMLDivElement>(null);
  const zohoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const refs = {
      sage300: sage300Ref,
      sage200: sage200Ref,
      "busy-erp": busyRef,
      zoho: zohoRef,
    };

    if (initialSection && refs[initialSection as keyof typeof refs]) {
      refs[initialSection as keyof typeof refs].current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [initialSection]);
  const erpSolutions = [
    {
      id: "sage300",
      name: "Sage 300",
      description:
        "Advanced ERP for mid-market businesses with comprehensive financial management and operational control",
      icon: Building,
      color: "from-blue-500 to-cyan-500",
      categoryBadge: "Enterprise",
      features: [
        "Multi-company & Multi-currency",
        "Advanced Financial Management",
        "Supply Chain Management",
        "Project & Job Costing",
        "Business Intelligence",
        "Customizable Dashboards",
      ],
      benefits: [
        "Streamline complex business processes",
        "Real-time business intelligence",
        "Scalable for growing enterprises",
        "Global business capabilities",
      ],
      imageSrc: "/sage300-erp.png",
      path: "/sage300",
    },
    {
      id: "sage200",
      name: "Sage 200",
      description:
        "Comprehensive business management solution offering end-to-end visibility and control",
      icon: Workflow,
      color: "from-purple-500 to-pink-500",
      categoryBadge: "Business",
      features: [
        "End-to-End Business Management",
        "Inventory & Stock Control",
        "Manufacturing Management",
        "CRM Integration",
        "Reporting & Analytics",
        "Mobile Access",
      ],
      benefits: [
        "Complete business visibility",
        "Improved operational efficiency",
        "Enhanced customer service",
        "Flexible deployment options",
      ],
      imageSrc: "/sage200-erp.png",
      path: "/sage200",
    },
    {
      id: "busy-erp",
      name: "Busy ERP",
      description:
        "VAT Compliant accounting and business management solution for small to medium enterprises",
      icon: BarChart3,
      color: "from-green-500 to-emerald-500",
      categoryBadge: "SME",
      features: [
        "GST Compliant Accounting",
        "Inventory Management",
        "Taxation & Compliance",
        "Payroll Management",
        "Multi-location Support",
        "Tally Integration",
      ],
      benefits: [
        "Simplified GST compliance",
        "Cost-effective solution",
        "Easy to use interface",
        "Localized for Indian market",
      ],
      imageSrc: "/busy-erp.png",
      path: "/busy-erp",
    },
    {
      id: "zoho",
      name: "ZOHO",
      description:
        "Cloud-based business applications suite with integrated CRM and productivity tools",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      categoryBadge: "Cloud",
      features: [
        "Cloud-Based Platform",
        "Integrated CRM",
        "Custom Applications",
        "Workflow Automation",
        "Collaboration Tools",
        "API Integration",
      ],
      benefits: [
        "Access from anywhere",
        "Seamless integration",
        "Regular updates",
        "Pay-per-user pricing",
      ],
      imageSrc: "/zoho-erp.png",
      path: "/zoho",
    },
  ];

  const stats = [
    { icon: Users, number: "1000+", label: "Businesses Transformed" },
    { icon: Building, number: "50+", label: "Industries Served" },
    { icon: Zap, number: "99%", label: "Client Satisfaction" },
    { icon: Shield, number: "24/7", label: "Support Available" },
  ];

  const industries = [
    "Manufacturing",
    "Retail & Distribution",
    "Construction",
    "Healthcare",
    "Education",
    "Professional Services",
    "Non-Profit",
    "Hospitality",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <HeroSection
        badge={"Business Management Solutions"}
        title1="ERP Softwares"
        title2="& Business Solutions"
        description="Comprehensive ERP solutions tailored to your business needs. From advanced enterprise resource planning to cloud-based business applications, we have the perfect solution to streamline your operations."
        imgSrc={"/erpsoftwares.jpg"}
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
      {/* ERP Solutions */}
      <ERPSolutionsGrid
        solutions={erpSolutions}
        onLearnMore={(solution) => {
          console.log("Learn more about:", solution.name);
        }}
      />{" "}
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
              Our ERP solutions are tailored to meet the unique needs of various
              industries
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
      </AnimatedSection> */}
      {/* Implementation Process */}
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
              Our Implementation Process
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to ensure successful ERP implementation and
              maximum ROI
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description:
                  "Understand your business needs and create implementation roadmap",
              },
              {
                step: "02",
                title: "Solution Design",
                description:
                  "Customize ERP to match your business processes and requirements",
              },
              {
                step: "03",
                title: "Implementation",
                description:
                  "Deploy the solution with data migration and system configuration",
              },
              {
                step: "04",
                title: "Training & Support",
                description:
                  "Train your team and provide ongoing support and optimization",
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
