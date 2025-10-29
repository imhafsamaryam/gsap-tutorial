import { motion } from "motion/react";
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

interface ERPSoftwaresPageProps {
  onPageChange: (page: string) => void;
  initialSection?: string;
}

export function ERPSoftwaresPage({
  onPageChange,
  initialSection,
}: ERPSoftwaresPageProps) {
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
      image: "/sage300-erp.png",
    },
    {
      id: "sage200",
      name: "Sage 200",
      description:
        "Comprehensive business management solution offering end-to-end visibility and control",
      icon: Workflow,
      color: "from-purple-500 to-pink-500",
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
      image: "/sage200-erp.png",
    },
    {
      id: "busy-erp",
      name: "Busy ERP",
      description:
        "GST-ready accounting and business management solution for small to medium enterprises",
      icon: BarChart3,
      color: "from-green-500 to-emerald-500",
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
      image: "/busy-erp.png",
    },
    {
      id: "zoho",
      name: "ZOHO",
      description:
        "Cloud-based business applications suite with integrated CRM and productivity tools",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
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
      image: "/zoho-erp.png",
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
        onPageChange={onPageChange}
        imgSrc={"/erp-solutions.png"}
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
      <AnimatedSection className="px-6 py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-[#018136]/10 text-[#018136] px-4 py-2 uppercase">
                Our Solutions
              </Badge>
              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 py-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Comprehensive ERP Solutions
              </motion.h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our portfolio of industry-leading ERP solutions,
                each designed to address specific business needs and scales
              </p>
            </motion.div>
          </div>

          <div className="space-y-12">
            {erpSolutions.map((erp, index) => (
              <motion.div
                key={erp.id}
                ref={
                  erp.id === "sage300"
                    ? sage300Ref
                    : erp.id === "sage200"
                    ? sage200Ref
                    : erp.id === "busy-erp"
                    ? busyRef
                    : zohoRef
                }
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`p-8 hover:shadow-xl transition-all duration-300 border-0 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <div
                    className={`flex flex-col lg:flex-row items-center gap-8 ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="lg:w-1/3">
                      <motion.div
                        className="relative group cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div
                          className={`w-64 h-64 bg-gradient-to-br ${erp.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg`}
                        >
                          <erp.icon className="w-32 h-32 text-white" />
                        </div>
                        <div className="absolute inset-0 bg-black/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    </div>

                    <div className="lg:w-2/3">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-3xl font-bold text-gray-900">
                          {erp.name}
                        </h3>
                        <Badge
                          className={`bg-gradient-to-r ${erp.color} text-white px-3 py-1`}
                        >
                          {erp.id === "sage300"
                            ? "Enterprise"
                            : erp.id === "sage200"
                            ? "Business"
                            : erp.id === "busy-erp"
                            ? "SME"
                            : "Cloud"}
                        </Badge>
                      </div>

                      <p className="text-xl text-gray-600 mb-6">
                        {erp.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-[#018136]" />
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {erp.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-2 text-gray-600"
                              >
                                <div className="w-1.5 h-1.5 bg-[#018136] rounded-full" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <Target className="w-5 h-5 text-[#018136]" />
                            Business Benefits
                          </h4>
                          <ul className="space-y-2">
                            {erp.benefits.map((benefit, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-2 text-gray-600"
                              >
                                <div className="w-1.5 h-1.5 bg-[#018136] rounded-full" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <Button
                        onClick={() => onPageChange(erp.id)}
                        className="bg-[#018136] hover:bg-[#016429] text-white px-8 py-3 rounded-full"
                      >
                        Learn More About {erp.name}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Industries Served */}
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
      </AnimatedSection>

      {/* Implementation Process */}
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
      </AnimatedSection>

      <CTASection onPageChange={onPageChange} />
    </div>
  );
}
